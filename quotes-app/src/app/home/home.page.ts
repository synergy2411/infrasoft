import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private geolocation : Geolocation, private alertCtrl : AlertController) {}

  getLocation(){
    this.geolocation.getCurrentPosition()
      .then(position => {
        this.alertCtrl.create({
          header : "Coordinates",
          message : `
          Latitude : ${position.coords.latitude} || 
          Longitude : ${position.coords.longitude}
          `,
          buttons : ['OK']
        }).then(alert => alert.present())
      }, err => console.log(err) );
  }

}
