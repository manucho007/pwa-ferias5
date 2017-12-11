import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment} from '../environments/environment';
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule} from 'angularfire2';

// import { AuthGuard } from './core/auth.guard';
// import { AuthAdminGuard } from './core/auth-admin.guard';

import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './ui/home/home.component';
import { LoginComponent } from './ui/user-login/login.component';
import { ProfileComponent } from './ui/user-profile/profile.component';
import { UserFormComponent } from './ui/user-form/user-form.component';

// import { UsersListComponent } from './users/users-list/users-list.component';
// import { StandsListComponent } from './stands/stands-list/stands-list.component';
// import { StandsAddComponent } from './stands/stands-add/stands-add.component';
// import { UsersAddComponent } from './users/users-add/users-add.component';
// import { StandsBoughtComponent } from './stands/stands-bought/stands-bought.component';
//


const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: 'users-list', component: UsersListComponent,  canActivate: [AuthGuard] },
  // { path: 'stands-list', component: StandsListComponent,  canActivate: [AuthGuard] },
  // { path: 'stands-bought', component: StandsBoughtComponent, canActivate:[AuthGuard] },
  // { path: 'users-add', component: UsersAddComponent,canActivate:[AuthAdminGuard] },
  // { path: 'stands-add', component: StandsAddComponent,canActivate:[AuthAdminGuard] },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    UserFormComponent,
    // UsersListComponent,
    // StandsListComponent,
    // StandsAddComponent,
    // UsersAddComponent,
    // StandsBoughtComponent
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
    // AuthGuard,
    // AuthAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
