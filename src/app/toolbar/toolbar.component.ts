import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { trigger, transition, animate, style } from '@angular/animations';

import { CookieService } from '../cookie.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({transform: 'translateY(-100%)'}),
                animate('250ms ease-in', style({transform: 'translateY(0%)'}))
            ]),
            transition(':leave', [
                animate('250ms ease-in', style({transform: 'translateY(-100%)'}))
            ])
        ]),
        trigger('slideOutIn', [
            transition(':enter', [
                animate('250ms ease-in', style({transform: 'translateY(-100%)'}))
            ]),
            transition(':leave', [
                style({transform: 'translateY(-100%)'}),
                animate('250ms ease-in', style({transform: 'translateY(0%)'}))
            ])
        ])
    ]
})
export class ToolbarComponent implements OnInit {
    @Output() toggle: EventEmitter<null> = new EventEmitter();
    THEME_DARK = 'app-dark-theme';
    THEME_LIGHT = 'app-light-theme';
    THEME_DARK_MENU = 'Dark theme';
    THEME_LIGHT_MENU = 'Light theme';
    searchFormCtrl: FormControl = new FormControl();
    mobileSearch: Boolean = false;
    searchOptions = ['One', 'Two', 'Three'];
    private themeName;
    public themeMenu;

    constructor(private overlay: OverlayContainer, private cookie: CookieService) {
        this.themeName = cookie.getCookie('theme') || this.THEME_LIGHT;
        this.themeMenu = this.themeName === this.THEME_LIGHT ? this.THEME_DARK_MENU : this.THEME_LIGHT_MENU;
    }

    ngOnInit(): void {
        document.body.classList.add('mat-app-background');
        document.body.classList.add(this.themeName);
        this.overlay.getContainerElement().classList.add(this.themeName);
    }

    toggleSidenav(): void {
        this.toggle.emit();
    }

    toggleTheme() {
        const currentTheme = this.themeName;
        if (this.themeName === this.THEME_DARK) {
            this.themeName = this.THEME_LIGHT;
            this.themeMenu = this.THEME_DARK_MENU;
        } else {
            this.themeName = this.THEME_DARK;
            this.themeMenu = this.THEME_LIGHT_MENU;
        }
        this.overlay.getContainerElement().classList.remove(currentTheme);
        document.body.classList.remove(currentTheme);
        this.overlay.getContainerElement().classList.add(this.themeName);
        document.body.classList.add(this.themeName);
        this.cookie.setCookie({name: 'theme', value: this.themeName});
    }
}
