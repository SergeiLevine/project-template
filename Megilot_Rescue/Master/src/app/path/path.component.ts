import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
  @Input() pathArray;
 

  constructor() { console.log('created path');}

  ngOnInit() {
    for (let k of this.pathArray)
      console.log(k.lat1);
  }

}
