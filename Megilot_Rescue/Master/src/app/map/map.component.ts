import { Component, OnInit, Injectable, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AnonymousSubscription } from "rxjs/Subscription";
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral, SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint, GoogleMapsAPIWrapper }
  from 'angular2-google-maps/core';
import 'rxjs/Rx';
//import { MarkerService } from './marker.service'
import { AppConfig } from '../app.config';
import { Router, ActivatedRoute } from '@angular/router';
import { eventInfoService } from '../services/index';
import { DirectionsMapDirective } from '../directions-map.directive'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [eventInfoService, GoogleMapsAPIWrapper]
})

export class MapComponent implements OnInit {
  title: string = '';
  lat: number = 31.7683;
  lng: number = 35.2137;
  areaCount: number = 0;
  drawble: boolean = false;
  drawTex: string = 'draw';
  realData = [];
  realCords = [];
  eventInfo = [];
  url = this.config.apiUrl + '/send_data.php';
  latA = 30;
  latB = 31;
  lngA = 30;
  lngB = 31;
  pathArray = [[
    { user: 'A', lat: 30, lng: 30 },
    { user: 'A', lat: 31, lng: 31 },
    { user: 'A', lat: 32, lng: 32 }
  ],
  [{ user: 'B', lat: 33, lng: 33 },
  { user: 'B', lat: 34, lng: 34 },
  { user: 'B', lat: 34, lng: 34 }
  ]];
  routes = [];

  origin = { longitude: 31.7683, lattitude: 35.2137 };  // its a example aleatory position
  destination = { longitude: 31.7690, lattitude: 35.2227 };  // its a example aleatory position


  paths = [];

  constructor(private http: Http, private config: AppConfig, private route: ActivatedRoute, private router: Router) {
    for (let k of this.realData) {
      k.latitude = parseFloat(k.latitude);
      k.longitude = parseFloat(k.longitude);
      this.realCords.push(k);
    }
    //this.realData = this.realCords;
    //this.eventInfo={name:s.eventName,desc:s.eventInfo};


  }
  /**Allows the map to be clicked and the drawing of polygons on the map, increments the amont of current polygons by 1 */
  drawPolygon() {
    if (this.drawble == false) {
      this.drawTex = 'Complete'
      this.areaCount++;
    }
    else {
      this.drawTex = 'Draw';
    }
    this.drawble = !this.drawble;
  }

  /**map clicked becomes active after the draw button is clicked, pushed the coordinates into an array which 
   * displays the polyong in the map
   */
  mapClicked(e) {
    if (this.drawble == false) {
      return;
    }

    var temp = [];
    if (this.paths.length > 0 && this.paths[this.areaCount - 1] != undefined) {
      console.log(this.paths[this.areaCount - 1]);
      for (let i of this.paths[this.areaCount - 1]) {
        temp.push(i);
      }
    }
    temp.push({ lat: parseFloat(e.coords.lat), lng: parseFloat(e.coords.lng) });
    this.paths[this.areaCount - 1] = temp;
  }

  /**create path function the data from the database to coordinates that will be bound to the path component
   * displaying the path of each mobile user
   */
  createPath(k) {
    var newpath = [];
    var j = 0;
    for (var i = 0; i < k.length; i++) {
      var n;
      if (j == 0) {
        n = ({ lat1: k[j].lat, lat2: k[j].lat, lng1: k[j].lng, lng2: k[j].lng });
      }
      else {
        n = ({ lat1: k[j - 1].lat, lat2: k[j].lat, lng1: k[j - 1].lng, lng2: k[j].lng });
      }
      newpath[j] = n;

      j++;

    }
    return newpath;
  }


  getLat(k) {
    if (k == undefined)
      return;
    var t=k;
    //console.log(t);
    return (t[t.length - 1].latitude);
  }
  getLng(k) {
    if (k == undefined)
      return;
    var t=k;
    //console.log(t); 
    return (t[t.length - 1].longitude);
  }
  getUser(k) {
    if (k == undefined)
      return;
    var t=k;
    //console.log(t);  
    return (t[t.length - 1].user_name);
  }


  ngOnInit() {
    //this.getData();

    /*for (let k of this.pathArray)
      this.routes.push(this.createPath(k));
    console.log(this.routes);*/
  }
  /**recives current mobile data user from the database */
  getData() {
    this.http.get(this.url).subscribe(res => {
      //console.log(res);
      if (res.json()=='No participants yet'){
        console.log("no participants yet");
        return;
      }
      console.log(res);
      this.realData = res.json();
    }
    );

  }
  get data() {
    this.http.get(this.url).subscribe(res => {
      if (res.json()=='No participants yet'){
        //console.log("no participants yet");
        return;
      }
      //console.log(res);
      this.realData = res.json();
    }
    );
    setTimeout(1000);
    //console.log(this.realData);
    for (let d of this.realData) {
      //console.log(d);
      for (let k of d) {
        k.longitude = parseFloat(k.longitude);
        k.latitude = parseFloat(k.latitude);
      }
    }
    console.log(this.realData);
    return this.realData;
  }
}
