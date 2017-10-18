import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { eventInfoService } from '../services/index';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../app.config';
@Component({
  selector: 'app-join-event',
  templateUrl: './join-event.component.html',
  styleUrls: ['./join-event.component.css']
})
export class JoinEventComponent implements OnInit {
  id:Number;
  name:String;
  currentEvents=[];
  constructor(private http: Http,
    private config: AppConfig,
    private route: ActivatedRoute,
    private router: Router,
    private s: eventInfoService) { }
  setSelected(k){
    var eventInfo = {
      id:k.id,
      name:k.name
    };
    console.log(eventInfo.name);
    this.router.navigate(['map']);
    this.http.post(this.config.apiUrl + '/eventCreate.php', eventInfo).subscribe((r: Response) => {
  
      this.router.navigate(['map']);

    });

  }
  ngOnInit() {
    //this.http.get(this.config.apiUrl + '/eventCreate.php')
  }

}
