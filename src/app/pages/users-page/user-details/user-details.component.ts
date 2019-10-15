import { Component, OnInit } from '@angular/core';
import { UsersPageService } from '../users-page.service';
import { IPatient } from 'src/app/shared/interfaces/patient.interface';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    constructor(
        private userPageService: UsersPageService
    ) {}
    public currentUser: IPatient;

    ngOnInit(): void {
        this.currentUser = this.userPageService.selectedUser;
    }
}
