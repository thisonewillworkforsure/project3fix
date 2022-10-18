declare var require: any;
import './string-methods';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obscenity'
})
export class ObscenityPipe implements PipeTransform {

  public readonly obscenities = require('badwords-list');

  transform(value: any, ...args: any[]): any {
    var newVal: string = value;
    var grawlix: string = '';

    this.obscenities.array.forEach((curse: any) => {
      newVal = newVal.replaceAll(curse, grawlix);

    });

    return newVal;
  }

}
