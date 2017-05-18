import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../app.config';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { eventInfoService } from '../_services/index';
@Component({
  selector: 'app-event-menu',
  templateUrl: './event-menu.component.html',
  styleUrls: ['./event-menu.component.css']
})
export class EventMenuComponent implements OnInit {

  constructor(private http: Http,
  private config: AppConfig,
  private route: ActivatedRoute,
  private router: Router,
  private s:eventInfoService) { }
  name:String;
  description:String;
  date:Date;
  /*Begin event function posts data from the form to the server and routs to the map screen if succesful*/
  beginEvent(){

    var eventInfo={
      name:this.name,
      description:this.description
      };
    this.http.post(this.config.apiUrl+'/eventCreate.php',eventInfo).subscribe((r: Response) => {      
                //var u=r.json();
               // console.log('event started');
               if (r.text()=='Event created')
                this.router.navigate(['map']);
                
    });

  }
  ngOnInit() {
  }

}
