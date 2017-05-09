import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MarkerComponent } from './marker/marker.component';
import { PolylineComponent } from './polyline/polyline.component';
import { PolygonComponent } from './polygon/polygon.component';
import { LoginComponent } from './login/login.component';
import { JpipePipe } from './jpipe.pipe';
import {MarkerService} from './map/marker.service';
import { PathComponent } from './path/path.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EventMenuComponent } from './event-menu/event-menu.component';
import {ImageUploadComponent} from './angular2-image-upload';


const appRoutes: Routes=[
  {path:'map',component:MapComponent},
  {path:'menu',component:MainMenuComponent},
  {path:'event-menu',component:EventMenuComponent}

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
    JpipePipe,
    PathComponent,
    MainMenuComponent,
    EventMenuComponent,
    
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
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
