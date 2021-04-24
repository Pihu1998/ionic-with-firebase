import { Component } from '@angular/core';
import firebase from 'firebase';
import { Facebook } from "@ionic-native/facebook/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private facebook: Facebook) {}

login(){

 this.facebook.login(["email"]).then((loginResponse) => {
   
   let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
   firebase.auth().signInWithRedirect(credential).then((info) => { 
    alert(JSON.stringify(info));
   })
   
 })

}

}

