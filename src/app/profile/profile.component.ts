import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddAvailabilityComponent } from '../add-availability/add-availability.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    dataForm = this.fb.group({
        name: [{ value: 'Anastasia', disabled: true }, Validators.required],
        lastName: [{ value: 'Moreno', disabled: true }, Validators.required],
        email: [{ value: 'ana.moreno@inspiringfitness.com', disabled: true }, Validators.required],
        phone: [{ value: '+123 456 77 8899', disabled: true }, Validators.required],
        picture: ['']
    });

    editMode = false;

    constructor(private dialog: MatDialog, private fb: FormBuilder) { }

    ngOnInit() {
    }

    openNewAvailability(isEdit: boolean = false) {
        this.dialog.open(AddAvailabilityComponent, { data: { edit: isEdit } });
    }

    enableEdit() {
        this.editMode = true;
        this.dataForm.enable();
        document.getElementById('name').focus();
    }

    disableEdit() {
        this.editMode = false;
        this.dataForm.disable();
    }

    saveData() {
        this.disableEdit();
    }
}
