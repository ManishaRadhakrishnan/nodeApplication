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
    user : string;
    pass : string;
  constructor(
    private login_service: LoginService
    ) {
      this.user = '';
      this.pass='';
    }
  //  display(user,pass)
    //{
     //this.login_service.get_response(this.user,this.pass);
    //}
  do_request(user,pass)
  {
    this.login_service.get_response(this.user,this.pass)
    .subscribe(
      (data: Login) => this.login = { ...data }, // success path
      error => this.error = error // error path
    );
  }
}
