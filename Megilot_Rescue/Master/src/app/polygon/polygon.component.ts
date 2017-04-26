import { Component, OnInit,Input,OnChanges,SimpleChange } from '@angular/core';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.css']
})
export class PolygonComponent implements OnInit, OnChanges {
  @Input() paths;
  @Input() show;
  changeLog: string[] = [];
  constructor() { }
  ngOnChanges() {
    console.log("changed");
  }
  ngOnInit() {
  }

}
