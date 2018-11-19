import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicOfficialComponentsPage } from './ionic-official-components';

@NgModule({
  declarations: [
    IonicOfficialComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicOfficialComponentsPage),
  ],
})
export class IonicOfficialComponentsPageModule {}
