import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { ExtraValidation } from '../extra-validation';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    constructor(public fb: FormBuilder, private authSrv: AuthService, private router: Router) { }

    registerForm = this.fb.group({
        'name': ['', Validators.required],
        'email': ['', [ExtraValidation.rightEmail, Validators.required]],
        'password': ['', [Validators.required, Validators.min(6)]],
        'password_confirmation': ['', [Validators.required, ExtraValidation.matchValues('password')]]
    });

    register() {
        let user = this.registerForm.value;
        let router = this.router;
        this.authSrv.register(user).subscribe({
            next(res) {
                console.log(res);
                localStorage.setItem('token', res.token);
                router.navigateByUrl('/home');
            },
            error(error) {
                console.log(error);
            }
        })
    }
}
