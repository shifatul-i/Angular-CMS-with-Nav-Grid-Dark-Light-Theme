import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

    constructor() {
    }

    public getCookie(name: string) {
        const ca: Array<string> = document.cookie.split(';');
        const caLen: number = ca.length;
        const cookieName = `${name}=`;
        let c: string;
        for (let i = 0; i < caLen; i++) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) return c.substring(cookieName.length, c.length);
        }
        return null;
    }

    public deleteCookie(cookieName: string) {
        this.setCookie({name: cookieName, value: '', expireDays: -1});
    }

    public setCookie(params: any) {
        const d: Date = new Date();
        d.setTime(d.getTime() + (params.expireDays ? params.expireDays : 90) * 24 * 60 * 60 * 1000);
        document.cookie =
            (params.name ? params.name : '') + '=' + (params.value ? params.value : '') + ';'
            + (params.session && params.session === true ? '' : 'expires=' + d.toUTCString() + ';')
            + 'path=' + (params.path && params.path.length > 0 ? params.path : '/') + ';'
            + (location.protocol === 'https:' && params.secure && params.secure === true ? 'secure' : '');
    }
}
