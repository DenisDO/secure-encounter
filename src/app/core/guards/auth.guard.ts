import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

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
