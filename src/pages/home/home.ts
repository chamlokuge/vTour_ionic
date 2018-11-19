import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})  
export class HomePage {
  @ViewChild('username') uname;
   @ViewChild('password') password;
 
 
  constructor(public navCtrl: NavController ,public alertCtrl:AlertController) {

  }

  

  register(){
    this.navCtrl.push(RegisterPage);
  }

   signIn(){
      this.navCtrl.push(LoginPage);
   }

  //  signIn(){
  //    if(this.uname.value=="admin" && this.password.value == "admin"){
  //   const alert = this.alertCtrl.create({
  //     title: 'Login Successful!',
  //     subTitle: 'You are logged in',
  //      buttons: ['OK']
  //   });
  //    alert.present();
  // }
 }


