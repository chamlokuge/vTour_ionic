
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, AlertController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
//import { HttpModule } from '@angular/http';
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraProvider } from '../providers/util/camera.provider';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ProfileFivePage } from '../pages/profile-five/profile-five';
import { ProfileSettingsPage } from '../pages/profile-settings/profile-settings';
//import { MenusPage} from '../pages/menus/menus';
@NgModule({
  declarations: [ 
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfileFivePage,
    ProfileSettingsPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    //HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfileFivePage,
    ProfileSettingsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertService,
    ToastService,
    CameraProvider,
    Camera,


    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

