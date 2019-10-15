import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SignInComponent } from './pages/sign-in-page/sign-in-page.component';
import { UsersComponent } from './pages/users-page/users-page.component';
import { UserDetailsComponent } from './pages/users-page/user-details/user-details.component';
import { UsersListComponent } from './pages/users-page/users-list/users-list.component';

import { AuthService } from './shared/services/auth.service';
import { CanActivateApplicationPage } from './core/guards/auth.guard';
import { UsersListService } from './pages/users-page/users-list/users-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    UsersListService,
    CanActivateApplicationPage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
