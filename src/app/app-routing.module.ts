import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './helper/auth.guard';
 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'supervisor', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'operador', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'call-center', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'supervisor' }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
