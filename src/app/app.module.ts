import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {
    MatToolbarModule, MatSidenavModule, MatIconModule, MatGridListModule, MatListModule, MatMenuModule,
    MatButtonModule, MatInputModule, MatAutocompleteModule, MatCardModule, MatChipsModule, MatCheckboxModule,
    MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Globals } from './globals';
import { ApiService } from './api.service';
import { CookieService } from './cookie.service';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ItemsComponent } from './items/items.component';
import { SlugPipe } from './pipes/slug.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent, SidenavComponent, ItemsComponent,
        SlugPipe
    ],
    imports: [
        BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,
        ReactiveFormsModule, BrowserAnimationsModule, OverlayModule,
        InfiniteScrollModule,
        MatToolbarModule, MatSidenavModule, MatIconModule, MatGridListModule, MatListModule, MatMenuModule,
        MatButtonModule, MatInputModule, MatAutocompleteModule, MatCardModule, MatChipsModule, MatCheckboxModule,
        MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule
    ],
    providers: [Globals, ApiService, CookieService, SlugPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
