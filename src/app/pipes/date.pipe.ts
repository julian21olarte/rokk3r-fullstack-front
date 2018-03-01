import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'customDate'
})
export class DatePipe implements PipeTransform {

    transform(value: string) {
        return moment.utc(value).format('LL');
    }

}