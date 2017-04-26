import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent implements OnInit {
  @Input() lat;
  @Input() lng;
  @Input() name;
  constructor() { }

  ngOnInit() {
  }

}
