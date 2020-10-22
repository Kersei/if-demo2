import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { isNumber } from 'util';

@Component({
    selector: 'app-custom-number-picker',
    templateUrl: './custom-number-picker.component.html',
    styleUrls: ['./custom-number-picker.component.scss']
})
export class CustomNumberPickerComponent implements OnInit, ControlValueAccessor {

    @Input('value') value: number;
    @Input('min') min: number;
    @Input('max') max: number;
    @Input('step') step: number = 1;
    @Input('placeholder') placeholder: string = '';
    @Input('disabled') disabled: boolean = false;
    @Output('change') change = new EventEmitter<number>();
    @ViewChild('number', { static: false }) number: ElementRef;

    constructor() { }

    writeValue(value: any): void {
        if (isNumber(value)) {
            this.value = value;
        }
    }

    onChange(_: any) { }
    onTouch(_: any) { }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    stepUp() {
        if (!this.disabled) {
            this.number.nativeElement.stepUp();
            this.onChange(this.number.nativeElement.value);
        }
    }

    stepDown() {
        if (!this.disabled) {
            this.number.nativeElement.stepDown();
            this.onChange(this.number.nativeElement.value);
        }
    }

    ngOnInit() {
    }

}
