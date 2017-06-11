import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-polyline',
  templateUrl: './polyline.component.html',
  styleUrls: ['./polyline.component.css']
})
export class PolylineComponent implements OnInit {
  @Input() lat1;
  @Input() lng1;
  @Input() lat2;
  @Input() lng2;
  constructor() { }
 
  ngOnInit() {
    console.log(this.lat1);
  }

}
