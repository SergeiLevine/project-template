import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }
  start(){
    this.router.navigate(['event-menu']);
  }
  inquire(){
    this.router.navigate(['inquiry']);
  }
  join(){
    this.router.navigate(['join-event']);
  }
  ngOnInit() {
  }

}
