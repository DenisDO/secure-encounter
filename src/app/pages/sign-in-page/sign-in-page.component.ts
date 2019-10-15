import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    public signInForm: FormGroup;

    ngOnInit() {
        this.initSignInForm();
    }

    private initSignInForm(): void {
        this.signInForm = new FormGroup({
            uid: new FormControl(''),
            email: new FormControl(''),
            password: new FormControl('')
        });
    }

    public signIn(e: Event) {
        e.preventDefault();
        this.authService.signIn(this.signInForm.value)
            .subscribe((data: IUser) => {
                if (data.isOk) {
                    this.router.navigate(['users/list']);
                    localStorage.setItem('authtoken', data.tokens.jwt);
                } else {
                    console.log('Auth error: ', data.errorMessage);
                }
            });
    }
}
