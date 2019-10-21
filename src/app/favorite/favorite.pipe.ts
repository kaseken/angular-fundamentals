import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FavoritePipe implements PipeTransform {
  transform(value: string, excludes?: any): string {
    if (!value) return null;
    let result = value.split(' ');
    result.forEach((word, i) => {
      if (i !== 0) {
        excludes.forEach(exclude => {
          if (word == exclude) {
            result[i] = word.charAt(0).toLowerCase() + word.slice(1);
          }
        });
      }
    });
    return result.join(' ');
  }
}
