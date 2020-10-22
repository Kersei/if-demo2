import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-add-availability',
    templateUrl: './add-availability.component.html',
    styleUrls: ['./add-availability.component.scss']
})
export class AddAvailabilityComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    title = '';
    buttonText = '';
    options = [
        {
            text: 'Lunes',
            value: 'monday'
        },
        {
            text: 'Martes',
            value: 'tuesday'
        },
        {
            text: 'Miércoles',
            value: 'wednesday'
        },
        {
            text: 'Jueves',
            value: 'thursday'
        },
        {
            text: 'Viernes',
            value: 'friday'
        },
        {
            text: 'Sábado',
            value: 'saturday'
        },
        {
            text: 'Domingo',
            value: 'sunday'
        }
    ];

    ngOnInit() {
        this.title = !!this.data ? this.data.edit ? 'Editar disponibilidad' : 'Nueva disponibilidad' : 'Nueva disponibilidad';
        this.buttonText = !!this.data ? this.data.edit ? 'Editar' : 'Agregar' : 'Agregar';
    }

}
