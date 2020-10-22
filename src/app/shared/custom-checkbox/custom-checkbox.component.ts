import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-custom-checkbox',
    templateUrl: './custom-checkbox.component.html',
    styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent implements OnInit, ControlValueAccessor {

    @Input('checked') checked = false;
    @Input('disabled') disabled = false;
    @Input('done') done = false;
    @Output('change') change = new EventEmitter<boolean>();

    constructor() { }

    writeValue(value: boolean): void {
        this.checked = value
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

    ngOnInit() {
    }

    toggle() {
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChange(this.checked);
    }
}
