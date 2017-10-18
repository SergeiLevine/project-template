import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { AppConfig } from '../app.config';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inquiry-map',
  templateUrl: './inquiry-map.component.html',
  styleUrls: ['./inquiry-map.component.css']
})
export class InquiryMapComponent implements OnInit {
  lat: number = 31.7683;
  lng: number = 35.2137;
  url=this.config.apiUrl;
  paths=[];
  constructor(private http: Http, 
  private config: AppConfig, 
  private route: ActivatedRoute, 
  private router: Router) { }

  ngOnInit() {
    
  }

}
