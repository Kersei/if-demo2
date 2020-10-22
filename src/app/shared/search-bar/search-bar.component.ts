import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    opened = false;

    constructor() { }

    ngOnInit() {
    }

    handleInput() {
        if (!this.opened) {
            this.opened = true;
        }
    }

}
