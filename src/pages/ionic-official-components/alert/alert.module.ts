// import { NgModule } from '@angular/core';
// import { IonicPageModule } from 'ionic-angular';
// import { AlertPage } from './alert';

// @NgModule({
//   declarations: [
//     AlertPage,
//   ],
//   imports: [
//     IonicPageModule.forChild(AlertPage),
//   ],
// })
// export class AlertPageModule {}

import { AlertsPage } from './alert';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AlertsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertsPage),
  ],
  exports: [
    AlertsPage
  ]
})

export class AlertsPageModule { }

