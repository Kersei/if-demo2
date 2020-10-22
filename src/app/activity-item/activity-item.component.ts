import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-activity-item',
    templateUrl: './activity-item.component.html',
    styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {

    @Input('type') type: string;
    @Input('done') done: boolean = false;
    @Input('options') options: [];
    @Input('hidden') membershipHidden: boolean = false;
    @Output('optionSelected') selection = new EventEmitter<any>();
    @Output('checkChange') checkChange = new EventEmitter<boolean>();
    @Output('buttonPressed') buttonPressed = new EventEmitter<any>();

    showButton = false;
    color = '';

    constructor() { }

    ngOnInit() {
        if (this.membershipHidden) {
            this.color = '#797D90';
        }
    }

    optionSelected(value: any) {
        this.selection.emit(value);
    }

    checkToggle(value: boolean) {
        this.checkChange.emit(value);
    }

    buttonClicked() {
        this.buttonPressed.emit();
    }

    mouseIn() {
        this.showButton = true;
        if (this.membershipHidden) {
            this.color = '#292F4D';
        }
    }

    mouseOut() {
        this.showButton = false;
        if (this.membershipHidden) {
            this.color = '#797D90';
        }
    }

}
