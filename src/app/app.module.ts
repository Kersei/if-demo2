import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {
    MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatSidenavModule,
    MatListModule, MatIconModule, MatGridListModule, MatDialogModule, MatStepperModule
} from '@angular/material';
import { StartComponent } from './start/start.component'
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { DatePipe } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { SharedModule } from './shared/shared.module';
import { ClientCardComponent } from './client-card/client-card.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { FollowUpCallComponent } from './follow-up-call/follow-up-call.component';
import { InitialCallComponent } from './initial-call/initial-call.component';
import { CustomActivityComponent } from './custom-activity/custom-activity.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { AddMembershipComponent } from './add-membership/add-membership.component';
import { ProfileComponent } from './profile/profile.component';
import { AddAvailabilityComponent } from './add-availability/add-availability.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        StartComponent,
        RegisterComponent,
        ClientsComponent,
        ClientComponent,
        AddClientComponent,
        ClientCardComponent,
        InitialCallComponent,
        FollowUpCallComponent,
        CustomActivityComponent,
        ActivitiesComponent,
        ActivityItemComponent,
        AddActivityComponent,
        MembershipsComponent,
        AddMembershipComponent,
        ProfileComponent,
        AddAvailabilityComponent,
        LostPasswordComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        MatDialogModule,
        MatStepperModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        ChartsModule
    ],
    entryComponents: [
        AddClientComponent,
        AddActivityComponent,
        AddMembershipComponent,
        AddAvailabilityComponent
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
        DatePipe,
        ThemeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
