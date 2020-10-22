import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button-scale',
    templateUrl: './button-scale.component.html',
    styleUrls: ['./button-scale.component.scss']
})
export class ButtonScaleComponent implements OnInit {

    @Input('min') min: number = 1;
    @Input('max') max: number = 10;
    @Input('minText') minText: string = 'poco';
    @Input('maxText') maxText: string = 'súper';
    @Output('change') changeValue = new EventEmitter<number>();

    qty = 0;
    dots = [];

    constructor() { }

    ngOnInit() {
        this.qty = (this.max - this.min) + 1;
        for (let i = this.min; i <= this.qty; i++) {
            let dot = {
                value: i,
                active: false
            }
            this.dots.push(dot);
        }
    }

    select(index: number) {
        this.dots.forEach(dot => {
            dot.active = false;
        });
        for (let i = 0; i <= index; i++) {
            this.dots[i].active = true;
        }
        this.changeValue.emit(this.dots[index].value);
    }

    enterDot(index: number) {
        this.dots[index].hover = true;
    }

    leaveDot(index: number) {
        this.dots[index].hover = false;
    }

}
