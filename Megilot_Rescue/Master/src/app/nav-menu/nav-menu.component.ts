import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  //arr =[{id:'obj1'},{id:'obj2'},{id:'obj3'},{id:'obj4'}];
  arr =[{id:'Add polygon'},{id:'obj2'},{id:'obj3'},{id:'obj4'}];
  
  constructor() { }

  ngOnInit() {
  }

}
