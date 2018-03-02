import {
    Injectable,
    Inject,
    PLATFORM_ID,
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class AppService {

    public name: string = null;
    public isPlatformBrowser: boolean;

    private _title: string = null;
    private _heading: string = null;

    constructor(private _titleService: Title,
                private _translateService: TranslateService,
                @Inject(PLATFORM_ID) private _platformId: Object) {
        this.isPlatformBrowser = isPlatformBrowser(this._platformId);
    }

    public set title(title: string) {
        let _title = (title && title.trim()) || '';
        if (_title) {
            _title = this._translateService.instant(_title);
        }
        this._heading = _title;
        const appName = this.name ? this.name : '';
        this._title = _title + ((appName && _title) ? ' | ' : '') + appName;
        this._titleService.setTitle(this._title);
    }

    public get title(): string {
        return this._title;
    }

    public get heading(): string {
        return this._heading;
    }

}
