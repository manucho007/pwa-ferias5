import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';
import { AngularFireModule} from 'angularfire2';
import { environment} from '../environments/environment';
import { CoreModule } from './core/core.module';
import { ProfileComponent } from './ui/profile/profile.component';
import { AuthGuard } from './core/auth.guard';
import { UsersListComponent } from './ui/users-list/users-list.component';


const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_routes),
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
