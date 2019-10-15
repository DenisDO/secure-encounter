import { Injectable } from '@angular/core';
import { IPatient, IUsersListResponse } from 'src/app/shared/interfaces/patient.interface';
import { Observable } from 'rxjs';
import { BASE_PATIENTS_LIST_URL } from 'src/app/shared/configuration/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable()
export class UsersListService {
    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    public getPatientsList(): Observable<IUsersListResponse> {
        return this.http.get<IUsersListResponse>(BASE_PATIENTS_LIST_URL, this.getHeaders());
    }

    private getHeaders() {
        return {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.authService.getJWT()
            })
        };
    }
}
