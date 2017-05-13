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
  url='http://b34bf07b.ngrok.io/send_data.php';
  pathArray=[];
  
  paths: Array<LatLngLiteral> = [
    //{ lat: 	null,  lng: null },
   
  ]
  
  
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
      this.http.get(this.url).subscribe(res =>{ 
      this.realData = res.json();
      //this.refreshData();
    });
      
    }
   
    get data(){
      //console.log('in data')
      var i=0;
      
      for(let d of this.realData){ 
        
        d.longitude = parseFloat(d.longitude);
        d.latitude = parseFloat(d.latitude);
        this.pathArray.push({lat:d.latitude,lng:d.longitude});
       
      }

      
      
      return this.realData;
    }

}
