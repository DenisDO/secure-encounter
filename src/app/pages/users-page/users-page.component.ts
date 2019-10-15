import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersComponent implements OnInit {
    constructor(
        public router: Router
    ) {}

    ngOnInit(): void {
    }
}
