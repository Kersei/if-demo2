import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { APP_DATE_FORMATS, FormatDatepicker } from 'src/app/format-datepicker';

@Component({
    selector: 'app-day-picker',
    templateUrl: './day-picker.component.html',
    styleUrls: ['./day-picker.component.scss'],
    providers: [
        { provide: DateAdapter, useClass: FormatDatepicker },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
    ]
})
export class DayPickerComponent implements OnInit {

    today = new Date();
    text = '';

    constructor(private datePipe: DatePipe) { }

    ngOnInit() {
        this.text = this.datePipe.transform(this.today, 'dd \'de\' MMMM, yyyy', '', 'es-MX');
    }

    changeDate(amount: number) {
        let date = this.today;
        date.setDate(date.getDate() + amount);
        this.today = new Date(date);
        this.text = this.datePipe.transform(this.today, 'dd \'de\' MMMM, yyyy', '', 'es-MX');
    }

}
