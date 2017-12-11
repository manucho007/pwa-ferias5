import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../core/auth.guard';
import { AuthAdminGuard } from '../core/auth-admin.guard';


import { UsersListComponent } from '../users/users-list/users-list.component';
import { StandsListComponent } from '../stands/stands-list/stands-list.component';
import { StandsAddComponent } from '../stands/stands-add/stands-add.component';
import { UsersAddComponent } from '../users/users-add/users-add.component';
import { StandsBoughtComponent } from '../stands/stands-bought/stands-bought.component';


const lazyRoutes: Routes = [
  { path: 'users-list', component: UsersListComponent,  canActivate: [AuthGuard] },
  { path: 'stands-list', component: StandsListComponent,  canActivate: [AuthGuard] },
  { path: 'stands-bought', component: StandsBoughtComponent, canActivate:[AuthGuard] },
  { path: 'users-add', component: UsersAddComponent,canActivate:[AuthAdminGuard] },
  { path: 'stands-add', component: StandsAddComponent,canActivate:[AuthAdminGuard] },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsersListComponent,
    StandsListComponent,
    StandsAddComponent,
    UsersAddComponent,
    StandsBoughtComponent
  ],
  providers: [
    AuthGuard,
    AuthAdminGuard
  ],
})
export class LazyModule { }
