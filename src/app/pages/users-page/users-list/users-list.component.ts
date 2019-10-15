import { Component, OnInit } from '@angular/core';
import { UsersListService } from './users-list.service';
import { IUsersListResponse, IPatient } from 'src/app/shared/interfaces/patient.interface';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    constructor(
        private usersListService: UsersListService
    ) { }

    public patients: IPatient[];

    ngOnInit(): void {
        this.usersListService.getPatientsList()
            .subscribe((resp: IUsersListResponse) => {
                this.patients = resp.payload.pageData;
            });
    }

    public selectUser(patient: IPatient): void {
        console.log(patient);
    }
}
