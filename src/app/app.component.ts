import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { configService } from './local_storage/config/config';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private configService: configService,
    private Route: Router
  ) {

    let config = configService.getConfigData();

    if (config == null) {

      this.Route.navigate(['']);
      configService.setConfigData(false);

    }else{
      
      this.Route.navigate(['tabs/tab1']);

    }

    console.log(config);

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
