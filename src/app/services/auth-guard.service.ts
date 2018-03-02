import {
    Injectable,
} from '@angular/core';
import {
    CanActivate,
    Router,
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private _router: Router) {
    }

    public canActivate(): boolean {
        return true;
        // this._router.navigate(['']);
    }

}
