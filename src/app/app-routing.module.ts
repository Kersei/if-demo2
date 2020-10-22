import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { ProfileComponent } from './profile/profile.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';


const routes: Routes = [
    {
        path: 'inicio',
        component: StartComponent
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'clientes', component: ClientsComponent },
            { path: 'cliente', component: ClientComponent },
            { path: 'actividades', component: ActivitiesComponent },
            { path: 'membresias', component: MembershipsComponent },
            { path: 'perfil', component: ProfileComponent }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegisterComponent
    },
    {
        path: 'recuperar',
        component: LostPasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
