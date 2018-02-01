import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {
    ICentrifugeConfig,
    Centrifuge,
    Subscription,
    ICentrifugeMessage,
    ICentrifugeError,
} from 'centrifuge-ts';

import {environment} from '@env';
import {LoggerService} from './logger.service';

@Injectable()
export class CentrifugeService {

    private _centrifuge: Centrifuge = null;
    private _channels = [];
    private _messageUidSubscriptions = {};

    public connect(config: ICentrifugeConfig): Subject<any> {
        const subject = new Subject();
        this.disconnect();

        if (!environment.prod) {
            config.debug = true;
        }

        /*
        config.authHeaders = {
            'Authorization': 'Bearer 123123',
        };
        */

        this._centrifuge = new Centrifuge(config);
        this._centrifuge.on('connect', (context: any): void => {
            subject.next(null);
            subject.complete();
        });
        this._centrifuge.on('disconnect', (context: any): void => {
            // TODO: onDisonnect event

        });
        this._centrifuge.on('error', (error: any): void => {
            // TODO: onError event
        });
        this._centrifuge.connect();
        return subject;
    }

    public subscribe(channel: string, callbacks: any = {}): void {
        if (this._channels[channel]) {
            return;
        }
        const subscription: Subscription = this._centrifuge.subscribe(channel, {
            subscribe: (context: any): void => callbacks.subscribe && callbacks.subscribe(context),
            unsubscribe: (context: any): void => callbacks.unsubscribe && callbacks.unsubscribe(context),
            join: (message: any): void => callbacks.join && callbacks.join(message),
            leave: (message: any): void => callbacks.leave && callbacks.leave(message),
            message: (message: any): void => {
                this._handleMessage(channel, message);
                if (callbacks.message) {
                    callbacks.message(message);
                }
            },
            error: (errContext: any): void => callbacks.error && callbacks.error(errContext)
        });
        subscription.presence().then(message => callbacks.presence && callbacks.presence(message));
        this._channels[channel] = subscription;
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

    public publish(channel: string, message: any): Subject<any> {
        const subject = new Subject();
        const subscription: Subscription = this._channels[channel];
        if (subscription) {
            subscription.publish(message).then((response: ICentrifugeMessage) => {
                if ('status' in response && response['status'] === true) {
                    subject.next(null);
                    subject.complete();
                } else {
                    subject.error({
                        error: 'Unknown error accured'
                    });
                    subject.complete();
                }
            }, (err: ICentrifugeError) => {
                subject.error(err);
                subject.complete();
            });
        } else {
            subject.error(`Channel "${channel}" is not subscribed!`);
            subject.complete();
        }
        return subject;
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
        this._centrifuge = null;
    }

    private _handleMessage(channel: string, message: any): void {
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

}
