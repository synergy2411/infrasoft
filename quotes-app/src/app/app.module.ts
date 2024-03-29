import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteService } from './services/quote.service';
import { QuotePage } from './quote/quote.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthService } from './services/auth.service';
import { LoginGaurdService } from './services/login-gaurd.service';

@NgModule({
  declarations: [AppComponent, QuotePage],
  entryComponents : [QuotePage],
  imports: [BrowserModule, 
      IonicModule.forRoot(), 
      AppRoutingModule, 
      HttpClientModule],
  providers: [
    AuthService,
    LoginGaurdService,
    Camera,
    FCM,
    Geolocation,
    QuoteService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
