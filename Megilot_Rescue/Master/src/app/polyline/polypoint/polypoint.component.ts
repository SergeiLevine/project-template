import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-polypoint',
  templateUrl: './polypoint.component.html',
  styleUrls: ['./polypoint.component.css']
})
export class PolypointComponent implements OnInit {
  @Input() lat;
  @Input() lng;
  constructor() { }
  ngOnInit() {
  }

}
