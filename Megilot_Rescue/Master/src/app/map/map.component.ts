import { Component, OnInit,Injectable,Pipe, PipeTransform } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AnonymousSubscription} from "rxjs/Subscription";
import {Http, Response} from '@angular/http';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral,SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint,} 
from 'angular2-google-maps/core';
import 'rxjs/Rx';
import {MarkerService} from './marker.service'
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
  drawble:boolean=false;
  private timerSubscription: AnonymousSubscription;
  private markerSubscription: AnonymousSubscription;
  realData=[];
  realCords=[];
  prevPostion=[{lat:32.7693,lng:35.2147},{lat:32.8687,lng:35.3139},{lat:32.6684,lng:35.1135}];
  markerArray=[{name:'A',lat:	31.784468,lng:35.237017,prevLat:32.7693,prevLng:35.2147},
  {name:'B',lat:31.771918,lng:35.239248,prevLat:32.8687,prevLng:35.3139},
  {name:'C',lat:31.774107 , lng:35.252466,prevLat:32.6684,prevLng:35.1135}];
  
  paths: Array<LatLngLiteral> = [
    /*{ lat: 	31.871959,  lng: 35.217018 },
    { lat: 31.731259,  lng: 35.211018  },
    { lat: 31.731250,  lng: 35.301018 }*/
    
  ]
  // Nesting paths will create a hole where they overlap;
  
   mapClicked(e){
     if (this.drawble==false){
       return;
     }
     console.log(e);
     //var temp=this.paths;
     var temp=[];
     for (let i of this.paths){
       temp.push(i);
     }
     temp.push({lat:parseFloat(e.coords.lat),lng:parseFloat(e.coords.lng)});
     this.paths=temp;
     console.log(this.paths);
   }

  drawPolygon(n,l,t){
    //var temp={user:String,latitude:String,longitude:String};
    this.drawble=!this.drawble;
  }
  toMarker(r){
    var marker={
      user:r.user,
      latitude:r.latitude,
      longitude:r.longitude};
      return marker;

  }

  constructor(private http:Http) { 
    for (let k of this.realData){
      k.latitude=parseFloat(k.latitude);
      k.longitude=parseFloat(k.longitude);
      this.realCords.push(k);
    }
    this.realData=this.realCords;
    console.log(this.realCords);
    

  }
  
  ngOnInit() {
    this.getData();
    
  }
  _postservice;
  outputs;
  getData(){
      this.http.get('http://bdc6b1e1.ngrok.io/send_data.php').subscribe(res =>{ 
      this.realData = res.json();
      //this.refreshData();
      console.log(this.realData)
    });
      
    }
    refreshData(){
        this.markerSubscription = MarkerService.prototype.getMarker().subscribe(realData=> {
        this.realData = realData;
        this.subscribeToData();
    });
    }
    subscribeToData(){
      this.timerSubscription= Observable.timer(5000).first().subscribe(() => this.refreshData());
    }

    get data(){
      //console.log('in data')
      for(let d of this.realData){
        d.longitude = parseFloat(d.longitude);
        d.latitude = parseFloat(d.latitude);
      }
      return this.realData;
    }

}
