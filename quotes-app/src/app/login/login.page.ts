import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string ="";
  password : string = "";

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onRegister(){
    console.log("Email : ", this.email + "\nPassword : ", this.password);
    this.authService.register(this.email, this.password);
  }

}
