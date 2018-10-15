import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import {Routes, RouterModule, Router} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginformComponent} from './loginform/loginform.component';

const routes: Routes = [
    { path: 'home', component: LoginformComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
  ],
})
export class AppRoutingModule {
    constructor(private router: Router) {
        this.router.errorHandler = (error: any) => {
            this.router.navigate(['home']);
        };
    }
}
