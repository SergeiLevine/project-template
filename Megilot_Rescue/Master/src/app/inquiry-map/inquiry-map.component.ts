import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiry-map',
  templateUrl: './inquiry-map.component.html',
  styleUrls: ['./inquiry-map.component.css']
})
export class InquiryMapComponent implements OnInit {
  lat: number = 31.7683;
  lng: number = 35.2137;
  constructor() { }

  ngOnInit() {
    
  }

}
