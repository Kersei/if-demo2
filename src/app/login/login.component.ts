import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(public fb: FormBuilder, private authSrv: AuthService, private router: Router) { }

    loginForm = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.min(6)]
    });

    login() {
        let user = this.loginForm.value;
        let router = this.router;
        this.authSrv.login(user).subscribe({
            next(res) {
                console.log(res);
                localStorage.setItem('token', res.token);
                localStorage.setItem('name', res.name);
                router.navigateByUrl('/home');
            },
            error(error) {
                console.log(error);
            }
        })
    }

}
