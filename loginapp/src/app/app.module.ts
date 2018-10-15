import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';

// const appRoutes: Routes = [
//   {
//     path: '',
//     component: LoginformComponent
//   },
//   {
//     path: 'dashboard',
//     canActivate: [AuthguardGuard],
//     component: DashboardComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    // RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
