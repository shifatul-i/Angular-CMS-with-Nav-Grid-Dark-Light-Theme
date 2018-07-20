import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items.component';

const routes: Routes = [
    {path: '', redirectTo: '/items/trending', pathMatch: 'full'},
    {path: 'items/:filter', component: ItemsComponent},
    {path: 'items/category/:category', component: ItemsComponent},
    {path: 'items/category/:category/:filter', component: ItemsComponent},
    {path: 'more/:type', component: ItemsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
