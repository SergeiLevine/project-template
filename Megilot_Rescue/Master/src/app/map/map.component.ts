import { Component, OnInit } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral,SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint} 
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
  prevPostion=[{lat:32.7693,lng:35.2147},{lat:32.8687,lng:35.3139},{lat:32.6684,lng:35.1135}];
  markerArray=[{name:'A',lat:31.7683,lng:35.2137,prevLat:32.7693,prevLng:35.2147},
  {name:'B',lat:31.8683,lng:35.3137,prevLat:32.8687,prevLng:35.3139},
  {name:'C',lat:31.6683 , lng:35.1137,prevLat:32.6684,prevLng:35.1135}];

  paths: Array<LatLngLiteral> = [
    { lat: 31.5,  lng: 35.5 },
    { lat: 30.5,  lng: 34.5 },
    { lat: 31.5,  lng: 34 },
    
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
  drawPolygon(){
    this.paths.push({lat:0,lng:0});
    
  }
  constructor() { }
  
  ngOnInit() {
    
  }

}
