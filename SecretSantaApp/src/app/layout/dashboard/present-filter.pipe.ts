import { Pipe, PipeTransform } from '@angular/core';
import { Present } from '../../shared/models/present.model';

@Pipe({
  name: 'presentFilter'
})
export class PresentFilterPipe implements PipeTransform {
  transform(presents: Present[], name: string): Present[] {
    if (!name || name.length === 0) {
      return presents;
    }
    return presents.filter(rec =>
      rec.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }
}
