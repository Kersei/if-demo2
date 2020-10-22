import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_SELECT_VALUE_ACCESOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomSelectComponent),
    multi: true
};

@Component({
    selector: 'app-custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss'],
    providers: [CUSTOM_SELECT_VALUE_ACCESOR]
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {

    @Input('options') options = [
        {
            value: 'plan',
            text: 'Plan de 8 días'
        },
        {
            value: 'plan',
            text: 'Reducción de cintura'
        },
        {
            value: 'plan',
            text: 'Plan inicial'
        }
    ];
    @Input('type') type: string;
    @Output('selectionChanged') selectionChanged = new EventEmitter<any>();

    opened = false;
    selected = this.options[0];
    disabled = false;

    constructor() { }

    writeValue(value: any): void {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value = value) {
                this.selected = this.options[i];
                break;
            }
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

    ngOnInit() {
        this.selected = this.options[0];
    }

    toggleSelect() {
        if (!this.disabled) {
            this.opened = !this.opened;
        }
    }

    select(option: any) {
        this.selected = option;
        this.selectionChanged.emit(option.value);
        this.onChange(option.value);
    }

}
