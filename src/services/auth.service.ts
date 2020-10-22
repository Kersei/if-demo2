import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    server = environment.server;

    constructor(private http: HttpClient) { }

    login(loginInfo: any): Observable<any> {
        return this.http.post(this.server + 'api/login', loginInfo)
            .pipe(map(res => res))
            .pipe(catchError((error: any) => throwError(error)));
    }

    register(user: any): Observable<any> {
        return this.http.post(this.server + 'api/register', user)
            .pipe(map(res => res))
            .pipe(catchError((error: any) => throwError(error)));
    }
}
