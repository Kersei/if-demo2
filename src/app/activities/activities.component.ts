import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddActivityComponent } from '../add-activity/add-activity.component';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    openNewActivity() {
        this.dialog.open(AddActivityComponent);
    }
}
