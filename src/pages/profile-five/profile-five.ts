// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the ProfileFivePage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-profile-five',
//   templateUrl: 'profile-five.html',
// })
// export class ProfileFivePage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad ProfileFivePage');
//   }

// }


import { Component,Injectable } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';

@IonicPage()
@Component({
  selector: 'page-profile-five',
  templateUrl: 'profile-five.html',
})
export class ProfileFivePage {

  // user = {
  //   name: 'Cosima Niehaus',
  //   profileImage: 'assets/img/avatar/girl-avatar.png',
  //   coverImage: 'assets/img/background/background-5.jpg',
  //   occupation: 'Designer',
  //   location: 'Seattle, WA',
  //   description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
  //   address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
  //   phone: '555 555 555',
  //   email: 'cosima@niehaus.com',
  //   whatsapp: '555 555 555',

  user = {
    name: 'Chamodi Lokuge',
    profileImage: '../../assets/img/avatar/girl-avatar.png',
    coverImage: '../../assets/img/background/background-5.jpg',
    occupation: 'Travel Agent',
    location: 'Moratuwa, Sri Lanka',
    description: 'Passionate Worker. Customer service shouldn’t just be a department, it should be the entire company .',
    address: '226/1, Bandaranayake Mawatha, Moratuwa, Sri Lanka',
    phone: '555 555 555',
    email: 'chamodilokuge@gmail.com',
    whatsapp: '555 555 555',
  };

  //constructor(public navCtrl: NavController) { }
  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
     }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileFivePage');
  }

  profileSettings(){
    this.navCtrl.push(ProfileSettingsPage);
  }

}
