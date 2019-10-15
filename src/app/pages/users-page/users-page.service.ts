import { Injectable } from '@angular/core';
import { IPatient, IUsersListResponse } from 'src/app/shared/interfaces/patient.interface';
import { Observable } from 'rxjs';
import { BASE_PATIENTS_LIST_URL } from 'src/app/shared/configuration/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class UsersPageService {
    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private router: Router
    ) { }

    public selectedUser: IPatient;

    public getPatientsList(): Observable<IUsersListResponse> {
        return this.http.get<IUsersListResponse>(BASE_PATIENTS_LIST_URL, this.getHeaders());
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
        return {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.authService.getJWT()
            })
        };
    }
}
