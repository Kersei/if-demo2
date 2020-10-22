import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-initial-call',
    templateUrl: './initial-call.component.html',
    styleUrls: ['./initial-call.component.scss']
})
export class InitialCallComponent implements OnInit {

    options = [
        {
            text: 'Enviar Follow-Up',
            value: 'follow-up'
        },
        {
            text: 'Posponer 5 minutos',
            value: 'postpone'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
