import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddClientComponent } from '../add-client/add-client.component';

declare var JSONRpcClient: any;

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

    token: any;
    userToken: any;
    test: any;
    currentTab = 1;
    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        let loginClient = new JSONRpcClient({
            'url': 'https://user-api.simplybook.me' + '/login',
            'onerror': function (error) { },
        });

        this.token = loginClient.getToken('rafatest', '65d371b3ccb6b084de09439ac6de91fab39c4a00a0479bc2319e3054d1e318c5');
        this.userToken = loginClient.getUserToken('rafatest', 'admin', 'Jojoojo55*');
        /*let client = new JSONRpcClient({
            'url': 'https://user-api.simplybook.me',
            'headers': {
                'X-Company-Login': 'rafatest',
                'X-Token': this.token
            },
            'onerror': function (error) {
                console.log(error);
            }
        });*/
        let admin = new JSONRpcClient({
            'url': 'https://user-api.simplybook.me' + '/admin/',
            'headers': {
                'X-Company-Login': 'rafatest',
                'X-User-Token': this.userToken
            },
            'onerror': function (error) {
                console.log(error);
            }
        });
        this.test = JSON.stringify(admin.getAvailableTimeIntervals('2020-09-02', '2020-09-09', '', 6, 2));
    }


    openNewClient() {
        let dialogRef = this.dialog.open(AddClientComponent)
    }
}
