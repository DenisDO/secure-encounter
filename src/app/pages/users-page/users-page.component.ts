import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IPatient } from 'src/app/shared/interfaces/patient.interface';
import { UsersPageService } from './users-page.service';

@Component({
    selector: 'app-users',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersComponent implements OnInit {
    constructor(
        public router: Router,
        private activatedRoute: ActivatedRoute,
        private userPageService: UsersPageService
    ) {}

    public currentUser: IPatient;

    ngOnInit(): void {
        this.activatedRoute.url.subscribe(() => {
            if (this.router.url === '/users/details') {
                this.currentUser = this.userPageService.selectedUser;
            }
        });
    }

    public goBack(): void {
        this.router.navigate(['/users/list']);
    }
}
