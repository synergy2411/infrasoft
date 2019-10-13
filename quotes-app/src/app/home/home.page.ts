import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FCM } from '@ionic-native/fcm/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private geolocation: Geolocation,
    private alertCtrl: AlertController,
    private camera: Camera,
    private platform: Platform,
    private fcm: FCM) {
    this.platform.ready()
      .then(() => {
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
        });

        this.fcm.onTokenRefresh().subscribe(token => {
          // Register your new token in your back-end if you want
          // backend.registerToken(token);
        });
      })
  }

  getMyPic() {
    const options: CameraOptions = {
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG
    }

    this.camera.getPicture(options).then(imageData => {
      this.alertCtrl.create({ message: imageData, buttons: ["OK"] })
        .then(alert => alert.present());
    }).catch(err => {
      this.alertCtrl.create({ message: JSON.stringify(err), buttons: ["Cancel"] })
        .then(alert => alert.present());
    })
  }

  getLocation() {
    this.geolocation.getCurrentPosition()
      .then(position => {
        this.alertCtrl.create({
          header: "Coordinates",
          message: `
          Latitude : ${position.coords.latitude} || 
          Longitude : ${position.coords.longitude}
          `,
          buttons: ['OK']
        }).then(alert => alert.present())
      }, err => console.log(err));
  }

  pushes: any = [];

  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }
  getToken() {
    this.fcm.getToken().then(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }
}
