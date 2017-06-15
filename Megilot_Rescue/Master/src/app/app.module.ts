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
import { InquiryComponent } from './inquiry/inquiry.component';



import { AlertService, AuthenticationService, UserService,eventInfoService } from './services/index';


import { AuthGuard } from './guards/auth.guard';

import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {ImageUploadModule} from 'angular2-image-upload';
import { DatepickerModule } from 'angular2-material-datepicker';
//import {FileUploadModule} from 'primeng/primeng';

import { AppConfig } from './app.config';
import { DirectionsMapDirective } from './directions-map.directive';
import { InquiryMapComponent } from './inquiry-map/inquiry-map.component';


const appRoutes: Routes=[
  { path: '', component: MainMenuComponent, canActivate: [AuthGuard] },
  {path:'map',component:MapComponent,canActivate: [AuthGuard] },
  {path:'menu',component:MainMenuComponent,canActivate: [AuthGuard] },
  {path:'event-menu',component:EventMenuComponent,canActivate: [AuthGuard] },
  {path:'inquiry',component:InquiryComponent,canActivate: [AuthGuard] },
  {path:'inquiry-map',component:InquiryMapComponent,canActivate:[AuthGuard]},
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
    InquiryComponent,
    DirectionsMapDirective,
    InquiryMapComponent,
  ],
  imports: [
    DatepickerModule,
    RouterModule.forRoot(appRoutes),
    ImageUploadModule.forRoot(),
    //FileUploadModule,
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
        UserService,
        eventInfoService
        ],
        
  bootstrap: [AppComponent]
})
export class AppModule { }
