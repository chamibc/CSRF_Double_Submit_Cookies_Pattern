import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  userdetails = {username: '', password: ''};
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.http.post('http://localhost:3000/login', {
      username: this.userdetails.username,
      password: this.userdetails.password
    }).subscribe(
      res => {
          let response;
          response = res;
          console.log(res);
          this.cookieService.set( 'SessionID', response.sessioniD );
          this.router.navigate(['/dashboard']);
      },
      err => {
          console.log(err);
      }
  );
  }

}
