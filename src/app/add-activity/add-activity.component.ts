import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
    styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

    options = [
        {
            value: null,
            text: 'Seleccione'
        },
        {
            value: 'call',
            text: 'Llamada'
        },
        {
            value: 'task',
            text: 'Tarea'
        },
        {
            value: 'reminder',
            text: 'Recordatorio'
        }
    ];
    selected: any = null;
    constructor() { }

    ngOnInit() {
    }

    selection(value: any) {
        console.log(value);
        this.selected = value;
    }

}
