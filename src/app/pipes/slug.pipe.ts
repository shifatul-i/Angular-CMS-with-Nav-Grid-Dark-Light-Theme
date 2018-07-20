import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'slug'
})
export class SlugPipe implements PipeTransform {

    transform(value: string, args?: any): any {
        if (value)
            return value
                .replace(/[^\w\s]/gi, '')
                .trim()
                .toLowerCase()
                .replace(/\W+/g, '-');
        return value;
    }
}
