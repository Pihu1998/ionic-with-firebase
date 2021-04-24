import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase';
import { Facebook } from "@ionic-native/facebook/ngx";

firebase.initializeApp({
  apiKey: "AIzaSyC_TNOnupSVPv4ILy0d7Qk8zhoR9dZeknk",
  authDomain: "facebooklogin-e0db7.firebaseapp.com",
  projectId: "facebooklogin-e0db7",
  storageBucket: "facebooklogin-e0db7.appspot.com",
  messagingSenderId: "81105725303",
  appId: "1:81105725303:web:cffc975231a57987a72372",
  measurementId: "G-DQZVNL95WR"
})

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [Facebook, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
