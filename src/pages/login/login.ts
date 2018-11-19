import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfileFivePage } from '../profile-five/profile-five';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;



  constructor(public navCtrl: NavController ,public alertCtrl:AlertController) {

  }
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInUser(){
      this.navCtrl.push(ProfileFivePage);
   
    //console.log('Would sign in with ', this.user.value , this.password.value);
  }

}

