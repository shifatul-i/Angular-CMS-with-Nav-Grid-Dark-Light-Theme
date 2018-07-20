import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    sideBarIsOpened = false;

    constructor() {
    }

    // noinspection JSUnusedGlobalSymbols
    ngOnInit() {
        this.sideBarIsOpened = true;
    }

    toggleSideBar() {
        this.sideBarIsOpened = !this.sideBarIsOpened;
    }
}
