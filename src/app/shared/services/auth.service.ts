import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserCredentials, IUserAuthFields } from '../../shared/interfaces/user-credentials.interface';
import { DEFAULT_AUTH_LOCATION_VALUE, BASE_AUTH_URL } from '../../shared/configuration/config';
import { IUser } from '../../shared/interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public signIn(creds: IUserCredentials): Observable<IUser> {
        const body = this.addHiddenFields(creds);
        return this.http.post<IUser>(BASE_AUTH_URL, body);
    }

    public signOut(): void {
        localStorage.removeItem('authtoken');
        this.router.navigate(['/home']);
    }

    private addHiddenFields(creds: IUserCredentials): IUserAuthFields {
        return {
            clientId: creds.uid,
            userName: creds.email,
            password: creds.password,
            authLocation: DEFAULT_AUTH_LOCATION_VALUE
        };
    }

    public getJWT(): string {
        return localStorage.getItem('authtoken');
    }
}
