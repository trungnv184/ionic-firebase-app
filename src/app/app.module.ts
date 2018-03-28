
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from "../pages/home/home";
import { AngularFireModule } from 'angularfire2';


export const firebaseConfiguration = {
  apiKey: "AIzaSyB-wCQQFO_SSVNbaqcb4rObYLZ4o4nbUSM",
  authDomain: "ionic-firebase-app-e5e6f.firebaseapp.com",
  databaseURL: "https://ionic-firebase-app-e5e6f.firebaseio.com",
  projectId: "ionic-firebase-app-e5e6f",
  storageBucket: "",
  messagingSenderId: "800467503199"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfiguration),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
