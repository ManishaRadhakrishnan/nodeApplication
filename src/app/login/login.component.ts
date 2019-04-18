import { Component, OnInit } from '@angular/core';
import { Login, LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
    error: any;
    headers: string[];
    login: Login;


  constructor(private login_service: LoginService) { }

  do_request()
  {
    this.login_service.get_response()
    .subscribe(
      (data: Login) => this.login = { ...data }, // success path
      error => this.error = error // error path
    );
  }
}
