import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    expanded = false;
    name = '';
    selected = 'clients'

    constructor(private router: Router) { }

    ngOnInit() {
        this.name = localStorage.getItem('name');
        switch (this.router.url) {
            case '/clientes':
                this.selected = 'clients';
                break;
            case '/actividades':
                this.selected = 'activities';
                break;
            case '/membresias':
                this.selected = 'memberships';
                break;
            default:
                this.selected = '';
                break;
        }
    }

}
