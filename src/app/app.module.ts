import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedPageModule } from './feed/feed.module';
import { IntroPageModule } from './intro/intro.module';
import { TabsPageModule } from './tabs/tabs.module';
import { HttpClientModule } from '@angular/common/http';
import { configService } from './local_storage/config/config';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FeedPageModule, 
    IntroPageModule, 
    TabsPageModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    configService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
