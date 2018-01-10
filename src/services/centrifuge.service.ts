import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {Centrifuge} from 'centrifuge';

import {environment} from '@env';
import {LoggerService} from './logger.service';

@Injectable()
export class CentrifugeService {

    private _centrifuge: Centrifuge = null;
    private _channels = [];
    private _userChannelName: string = null;
    private _messageUidSubscriptions = {};

    public connect(centrifugeOptions: Object): Subject<any> {
        const subject = new Subject();
        this.disconnect();

        if (!environment.prod) {
            centrifugeOptions['debug'] = true;
        }

        /*
        centrifugoOptions['authHeaders'] = {
            'Authorization': 'Bearer 123123',
        };
        */

        this._centrifuge = new Centrifuge(centrifugeOptions);
        this._centrifuge.on('connect', (context: any): void => {
            if (centrifugeOptions['user']) {
                this._userChannelName = '$user_' + centrifugeOptions['user'];
            }
            this.subscribeUser();
            subject.next(null);
            subject.complete();
        });
        this._centrifuge.on('disconnect', (context: any): void => {
            // TODO: onDisonnect event
        });
        this._centrifuge.on('error', (error: any): void => {
            // TODO: onError event
        });
        // this._centrifuge.connect();
        return subject;
    }

    public subscribe(channel: string, callbacks?: any): void {
        if (this._channels[channel]) {
            return;
        }
        if (!callbacks) {
            callbacks = {};
        }
        const subscription = this._centrifuge.subscribe(channel, {
            subscribe: (context: any): void => callbacks.subscribe && callbacks.subscribe(context),
            unsubscribe: (context: any): void => callbacks.unsubscribe && callbacks.unsubscribe(context),
            join: (message: any): void => callbacks.join && callbacks.join(message),
            leave: (message: any): void => callbacks.leave && callbacks.leave(message),
            message: (message: any): void => callbacks.message && callbacks.message(message),
            error: (errContext: any): void => callbacks.error && callbacks.error(errContext)
        });
        subscription.presence().then(message => callbacks.presence && callbacks.presence(message));
        this._channels[channel] = subscription;
    }

    private _handleMessage(channel: string, message: any): void {
        LoggerService.debug('CENTRIFUGO', message);
        const messageData = message.data;
        const channelSubjects = this._messageUidSubscriptions[channel];
        if (!messageData || !channelSubjects) {
            return;
        }
        const uid = messageData.uid;
        const data = messageData.data;
        if (uid && data) {
            if (channelSubjects[uid]) {
                while (channelSubjects[uid].length > 0) {
                    const subject: Subject<any> = channelSubjects[uid].shift();
                    if (subject) {
                        subject.next(data);
                        subject.complete();
                    }
                }
                delete(channelSubjects[uid]);
            }
        }
    }

    public subscribeUser(): void {
        let channel;
        channel = 'system';
        this.subscribe(channel, {
            message: (message: any): void => {
                this._handleMessage(channel, message);
            }
        });
        channel = this._userChannelName;
        this.subscribe(channel, {
            message: (message: any): void => {
                this._handleMessage(channel, message);
            }
        });
    }

    public onMessage(channel: string, uid: string): Subject<any> {
        if (!this._messageUidSubscriptions[channel]) {
            this._messageUidSubscriptions[channel] = [];
        }
        if (!this._messageUidSubscriptions[channel][uid]) {
            this._messageUidSubscriptions[channel][uid] = [];
        }
        const subject = new Subject();
        this._messageUidSubscriptions[channel][uid].push(subject);
        return subject;
    }

    public onPrivateMessage(uid: string): Subject<any> {
        return this.onMessage(this._userChannelName, uid);
    }

    public unsubscribe(channel: string): void {
        if (!this._channels[channel]) {
            return;
        }
        this._channels[channel].unsubscribe();
        delete this._channels[channel];
    }

    public unsubscribeAll(): void {
        for (const channel in this._channels) {
            if (this._channels.hasOwnProperty(channel)) {
                this.unsubscribe(channel);
            }
        }
    }

    public disconnect(): void {
        if (!this._centrifuge) {
            return;
        }
        this.unsubscribeAll();
        this._centrifuge.disconnect();
    }

}
