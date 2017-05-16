import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MapComponent } from './map/map.component';
import { MarkerComponent } from './marker/marker.component';
import { PolylineComponent } from './polyline/polyline.component';
import { PolygonComponent } from './polygon/polygon.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EventMenuComponent } from './event-menu/event-menu.component';
import { LoginComponent } from './login';
import { PathComponent } from './path/path.component';

import {MarkerService} from './map/marker.service';
import { AlertService, AuthenticationService, UserService } from './_services/index';

import { AuthGuard } from './_guards/auth.guard';

import { AgmCoreModule } from 'angular2-google-maps/core';
import {ImageUploadModule} from 'angular2-image-upload';

import { AppConfig } from './app.config';


const appRoutes: Routes=[
 // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {path:'map',component:MapComponent},
  {path:'menu',component:MainMenuComponent},
  {path:'event-menu',component:EventMenuComponent},
  {path: 'login', component: LoginComponent },

    // otherwise redirect to home
  { path: '**', redirectTo: '' }

]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavItemComponent,
    MapComponent,
    MarkerComponent,
    PolylineComponent,
    PolygonComponent,
    LoginComponent,
    PathComponent,
    MainMenuComponent,
    EventMenuComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ImageUploadModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6ptPv5Nl8UksFWczSmloxpjuKXzD_7-M'
    })

  ],
  providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
