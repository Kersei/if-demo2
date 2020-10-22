import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-add-membership',
    templateUrl: './add-membership.component.html',
    styleUrls: ['./add-membership.component.scss']
})
export class AddMembershipComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    title = '';
    buttonText = '';

    ngOnInit() {
        this.title = !!this.data ? this.data.edit ? 'Editar Membresía' : 'Nueva Membresía' : 'Nueva Membresía';
        this.buttonText = !!this.data ? this.data.edit ? 'Editar' : 'Agregar' : 'Agregar';
    }

}
