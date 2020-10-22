import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-options-dots',
    templateUrl: './options-dots.component.html',
    styleUrls: ['./options-dots.component.scss']
})
export class OptionsDotsComponent implements OnInit {

    @Input('options') options = [];
    @Input('vertical') vertical = true;
    @Input('disabled') disabled = false;
    @Input('color') color: string = '#292F4D';
    @Output('selection') selection = new EventEmitter<any>();

    showOptions = false;

    constructor() { }

    ngOnInit() {
    }

    select(value: any) {
        this.showOptions = false;
        this.selection.emit(value);
    }

    toggleOptions() {
        if (!this.disabled) {
            this.showOptions = !this.showOptions;
        }
    }
}
