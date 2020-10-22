import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-client-card',
    templateUrl: './client-card.component.html',
    styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

    @Input('type') type: string;

    expanded = false;

    moreOptions = [
        {
            text: 'Iniciar llamada',
            value: 'call'
        },
        {
            text: 'Enviar Follow-Up',
            value: 'follow-up'
        },
        {
            text: 'Ver perfil',
            value: 'profile'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
