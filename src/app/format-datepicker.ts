import { FormStyle, getLocaleMonthNames, TranslationWidth } from '@angular/common';
import { MatDateFormats, NativeDateAdapter } from '@angular/material';

export class FormatDatepicker extends NativeDateAdapter {
    format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            let day = date.getDate().toString();
            day = +day < 10 ? '0' + day : day;
            let month = this.toCamelCase(getLocaleMonthNames('es-MX', FormStyle.Format, TranslationWidth.Wide)[date.getMonth()]);
            let year = date.getFullYear();
            return `${day} de ${month}, ${year}`;
        }
        return date.toDateString();
    }

    toCamelCase(input: string): string {
        let output: string;
        output = input.charAt(0).toUpperCase();
        output += input.substr(1);
        return output;
    }
}

export const APP_DATE_FORMATS: MatDateFormats = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
};