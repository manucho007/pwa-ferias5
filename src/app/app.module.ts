import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './ui/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/user-login/login.component';
import { AngularFireModule} from 'angularfire2';
import { environment} from '../environments/environment';
import { CoreModule } from './core/core.module';
import { ProfileComponent } from './ui/user-profile/profile.component';
import { AuthGuard } from './core/auth.guard';
import { AuthAdminGuard } from './core/auth-admin.guard';
import { UserFormComponent } from './ui/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users/users-list/users-list.component';
import { StandsListComponent } from './stands/stands-list/stands-list.component';
import { StandsAddComponent } from './stands/stands-add/stands-add.component';
import { UsersAddComponent } from './users/users-add/users-add.component';



const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users-list', component: UsersListComponent,  canActivate: [AuthGuard] },
  { path: 'stands-list', component: StandsListComponent,  canActivate: [AuthGuard] },
  { path: 'users-add', component: UsersAddComponent,canActivate:[AuthAdminGuard] },
  { path: 'stands-add', component: StandsAddComponent,canActivate:[AuthAdminGuard] },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    UserFormComponent,
    UsersListComponent,
    StandsListComponent,
    StandsAddComponent,
    UsersAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(app_routes),
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
