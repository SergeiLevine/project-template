import { Component, OnInit, Injectable, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AnonymousSubscription } from "rxjs/Subscription";
import { Http, Response } from '@angular/http';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral, SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint, }
  from 'angular2-google-maps/core';
import 'rxjs/Rx';
import { MarkerService } from './marker.service'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MarkerService]
})

export class MapComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = 31.7683;
  lng: number = 35.2137;
  areaCount: number = 0;
  drawble: boolean = false;


  realData = [];
  realCords = [];
  url = 'http://5b889434.ngrok.io/send_data.php';
  pathArray = [
    [
      { user: 'A', lat: 30, lng: 30 }, 
      { user: 'A', lat: 31, lng: 31 }, 
      { user: 'A', lat: 32, lng: 32 }
    ],
    [{ user: 'B', lat: 33, lng: 33 }, { user: 'B', lat: 34, lng: 34 }, { user: 'B', lat: 34, lng: 34 }]];

  /*paths: Array<LatLngLiteral> = [
    
   
  ]*/
  paths = [];

  mapClicked(e) {
    if (this.drawble == false) {
      return;
    }
    //var temp=this.paths;
    var temp = [];
    /*for (let i of this.paths){
      temp.push(i);
    }*/
    if (this.paths.length > 0 && this.paths[this.areaCount - 1] != undefined) {
      console.log(this.paths[this.areaCount - 1]);
      for (let i of this.paths[this.areaCount - 1]) {
        temp.push(i);
      }
    }
    temp.push({ lat: parseFloat(e.coords.lat), lng: parseFloat(e.coords.lng) });
    // this.paths=temp;
    this.paths[this.areaCount - 1] = temp;
    //console.log(this.paths);
  }
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
    console.log(newpath);
    return newpath;
  }

  getLat(k) {
    return (k[k.length - 1].lat);
  }
  getLng(k) {
    return (k[k.length - 1].lng);
  }
  getUser(k) {
    return (k[k.length - 1].user);
  }
  drawPolygon(n, l, t) {
    //var temp={user:String,latitude:String,longitude:String};
    if (this.drawble == false)
      this.areaCount++;
    this.drawble = !this.drawble;
  }
  toMarker(r) {
    var marker = {
      user: r.user,
      latitude: r.latitude,
      longitude: r.longitude
    };
    return marker;

  }

  constructor(private http: Http) {
    for (let k of this.realData) {
      k.latitude = parseFloat(k.latitude);
      k.longitude = parseFloat(k.longitude);
      this.realCords.push(k);
    }
    this.realData = this.realCords;


  }

  ngOnInit() {
    this.getData();

  }
  _postservice;
  outputs;
  getData() {
    this.http.get(this.url).subscribe(res => {
      this.realData = res.json();
      //this.refreshData();
    });

  }

  get data() {
    //console.log('in data')
    var i = 0;

    for (let d of this.realData) {

      d.longitude = parseFloat(d.longitude);
      d.latitude = parseFloat(d.latitude);
      //this.pathArray.push({lat:d.latitude,lng:d.longitude});

    }



    return this.realData;
  }

}
