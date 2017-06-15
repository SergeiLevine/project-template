import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  currData=[
    
  ]
  constructor(private http: Http,private router: Router) { }
  name:String;
  date:Date;
  id:Number;
  search(){
    var searchData={
      name:this.name,
      data:this.date,
      id:this.id
    }


  }
  setSelected(k){
    //console.log(k);
    
    this.router.navigate(['inquiry-map']);

  }
  ngOnInit() {
  }

}


