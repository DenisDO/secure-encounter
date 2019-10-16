import { Component, OnInit } from '@angular/core';
import { IUsersListResponse, IPatient } from 'src/app/shared/interfaces/patient.interface';
import { UsersPageService } from '../users-page.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    constructor(
        private usersPageService: UsersPageService
    ) { }

    public patients: IPatient[];
    public appointments: IPatient[];

    ngOnInit(): void {
        this.usersPageService.getPatientsList()
            .subscribe((resp: IUsersListResponse) => {
                this.patients = resp.payload.pageData;
            });
        this.usersPageService.getAppointmentsList()
            .subscribe((resp: IUsersListResponse) => {
                this.appointments = resp.payload.pageData;
            });
    }

    public selectUser(patient: IPatient): void {
        this.usersPageService.openUserDetails(patient);
    }
}
