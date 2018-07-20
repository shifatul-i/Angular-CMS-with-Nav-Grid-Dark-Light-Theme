import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ApiService } from '../api.service';
import { Globals } from '../globals';
import { Category } from '../shared/category';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
    @ViewChild('sidenav') private sidenav: any;
    public innerWidth: any;

    mobileQuery: MediaQueryList;
    navCategory: Category[];
    navMain: any[] = [
        {_id: 'Trending', link: ['/items', 'trending'], icon: 'flaticon-trending'},
        {_id: 'Recommended', link: ['/items', 'recommended'], icon: 'flaticon-thunder'},
        {_id: 'Loved', link: ['/items', 'loved'], icon: 'flaticon-love-filled'},
    ];
    navMore: any[] = [
        {_id: 'Report', link: ['/more', 'report'], icon: 'flaticon-flag'},
        {_id: 'Help', link: ['/more', 'help'], icon: 'flaticon-question-circle'},
        {_id: 'Feedback', link: ['/more', 'feedback'], icon: 'flaticon-happy-face'},
    ];

    private readonly mobileQueryListener: () => void;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private globals: Globals,
        private api: ApiService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 599px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);

        api.getCategories()
            .then(categories => this.navCategory = categories)
            .catch(console.error);
    }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }

    toggleSidebar(): void {
        this.sidenav.toggle();
    }

}
