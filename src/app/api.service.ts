import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Globals } from './globals';
import { Item } from './shared/item';
import { Category } from './shared/category';

@Injectable()
export class ApiService {

    private categories: Category[];

    constructor(private http: HttpClient, private globals: Globals) {
    }

    public getCategories() {
        return new Promise<Category[]>((resolve, reject) => {
            if (this.categories) resolve(this.categories);
            else this.http.get<Category[]>(this.globals.MENU_URL)
                .subscribe(categories => {
                    this.categories = categories;
                    resolve(categories);
                }, reject);
        });
    }

    getItems(filter: string, query: object) {
        return this.http.get<Item[]>(this.globals.ITEMS_URL);
    }
}
