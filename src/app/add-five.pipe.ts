import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFive',
  standalone: true  
})
export class AddFivePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    if (typeof value !== 'number') {
      console.warn('AddFivePipe: value must be a number');
      return value;
    }
    
    return value + 5;
  }

}