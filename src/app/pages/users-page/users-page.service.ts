import { Injectable } from '@angular/core';
import { IPatient, IUsersListResponse } from 'src/app/shared/interfaces/patient.interface';
import { Observable } from 'rxjs';
import { BASE_PATIENTS_LIST_URL, BASE_APPOINTMENTS_LIST_URL } from 'src/app/shared/configuration/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class UsersPageService {
    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private router: Router
    ) { }

    public selectedUser: IPatient;

    public getPatientsList(): Observable<IUsersListResponse> {
        return this.http.get<IUsersListResponse>(
            BASE_PATIENTS_LIST_URL,
            {
                headers: this.getHeaders(),
                params: this.getParams()
            }
        );
    }

    public getAppointmentsList(): Observable<IUsersListResponse> {
        return this.http.post<IUsersListResponse>(
            BASE_APPOINTMENTS_LIST_URL,
            {
                date: new Date().toISOString(),
                status: '1'
            },
            {
                headers: this.getHeaders()
            }
        );
    }

    public openUserDetails(user: IPatient): void {
        this.selectedUser = user;
        this.router.navigate(['/users/details']);
    }

    public closeUserDetails(): void {
        this.selectedUser = null;
        this.router.navigate(['/users/list']);
    }

    private getHeaders() {
        return new HttpHeaders({
            Authorization: 'Bearer ' + this.authService.getJWT()
        });
    }

    private getParams(): HttpParams {
        return new HttpParams({
            fromObject: {
                maximumRows: '7',
                startRowIndex: '0'
            }
        });
    }
}
