import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExtraValidation } from '../extra-validation';

@Component({
    selector: 'app-lost-password',
    templateUrl: './lost-password.component.html',
    styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent implements OnInit {

    recoverForm = this.fb.group({
        email: ['', [Validators.required, ExtraValidation.rightEmail]]
    });

    showMessage = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

    recover() {
        this.showMessage = true;
    }
}
