import { Component, OnInit,Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral,SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint,} 
from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = 31.7683;
  lng: number = 35.2137;
  drawble:boolean=false;
  realData;

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
  nestedPaths:Array<Array<LatLngLiteral>> =[[
    { lat: 0,  lng: 10 },
    { lat: 0,  lng: 20 },
    { lat: 10, lng: 20 },
    { lat: 10, lng: 10 },
    { lat: 0,  lng: 10 }
  ], [
    { lat: 0, lng: 15 },
    { lat: 0, lng: 20 },
    { lat: 5, lng: 20 },
    { lat: 5, lng: 15 },
    { lat: 0, lng: 15 }
  ]]
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
    
    this.drawble=!this.drawble;
   
    
  }
  constructor(private http:Http) { 
    
    

  }
  
  ngOnInit() {
    this.getData();
  }
  _postservice;
  outputs;
  getData(){
      this.http.get('http://819b12e0.ngrok.io/send_data.php').subscribe(res => this.realData = res.json());
      console.log(this.realData);
    }
    

}
