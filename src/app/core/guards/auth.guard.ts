import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersPageService } from 'src/app/pages/users-page/users-page.service';

@Injectable()
export class CanActivateApplicationPage implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const jwt = localStorage.getItem('authtoken');
        if (jwt) {
            return true;
        } else {
            this.router.navigate(['/home']);
            return false;
        }
    }
}

@Injectable()
export class CanActivateUserDetails implements CanActivate {
    constructor(
        private router: Router,
        private usersPageService: UsersPageService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.usersPageService.selectedUser) {
            return true;
        } else {
            this.router.navigate(['/users/list']);
            return false;
        }
    }
}
