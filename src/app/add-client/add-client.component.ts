import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

    currentStep = 0;

    steps = [
        'step 1',
        'step 2'
    ];

    constructor() { }

    ngOnInit() {
    }

    goToStep(step: number) {
        this.currentStep = step;
    }

}
