import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMembershipComponent } from '../add-membership/add-membership.component';

@Component({
    selector: 'app-memberships',
    templateUrl: './memberships.component.html',
    styleUrls: ['./memberships.component.scss']
})
export class MembershipsComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    options = [
        {
            text: 'Editar',
            value: 'edit'
        },
        {
            text: 'Ocultar',
            value: 'hide'
        },
        {
            text: 'Eliminar',
            value: 'delete'
        }
    ];

    ngOnInit() {
    }

    openNewMembership() {
        this.dialog.open(AddMembershipComponent);
    }

    handleOptions(val: any) {
        if (val == 'edit') {
            this.dialog.open(AddMembershipComponent, { data: { edit: true } })
        }
    }
}
