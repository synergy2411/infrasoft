import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string ="";
  password : string = "";

  constructor(private authService : AuthService,
              private toastCtrl : ToastController,
              private router : Router) { }

  ngOnInit() {
  }

  onRegister(){
    console.log("Email : ", this.email + "\nPassword : ", this.password);
    this.authService.register(this.email, this.password)
      .then(response => {
        this.showToast(response);
      }, err => {
        this.showToast(err);
      });
  }

  onLogin(){
    this.authService.login(this.email, this.password)
      .then(response => {
        this.showToast(response)
        this.router.navigate(['tabs']);
      }, err => this.showToast(err))
  }

  private showToast(message: any){
    this.toastCtrl.create({
      message,
      duration : 1500
    }).then(toast => toast.present());
  }

}
