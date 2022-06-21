import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {
  transform(value: any): string {
    var text = value.toLowerCase();
    text = text.replace('a', '4');
    text = text.replace('e', '3');
    text = text.replace('i', '1');
    text = text.replace('o', '0');
    text = text.replace('u', '9');
    return text;
  }

}
