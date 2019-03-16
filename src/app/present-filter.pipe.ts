import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'presentFilter'
})
export class PresentFilterPipe implements PipeTransform {

  transform(presents: string[], name: string): string[] {
    if(!name ||name.length === 0){
      return presents;
    }
    return presents.filter(rec => rec.toLowerCase().startsWith(name.toLowerCase()));
  }

}
