import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../app.config';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { eventInfoService } from '../services/index';
import { Observable } from 'rxjs/Observable';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { FileUploadModule } from 'primeng/primeng';

@Component({
  selector: 'app-event-menu',
  templateUrl: './event-menu.component.html',
  styleUrls: ['./event-menu.component.css']
})

export class EventMenuComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: this.config.apiUrl + '/eventCreate.php' });
  constructor(private http: Http,
    private config: AppConfig,
    private route: ActivatedRoute,
    private router: Router,
    private s: eventInfoService) { }
  name: String;
  description: String;
  date: Date;
  url = this.config.apiUrl + '/imgUpload.php';
  /*Begin event function posts data from the form to the server and routs to the map screen if succesful*/
  beginEvent() {

    var eventInfo = {
      name: this.name,
      description: this.description
    };
    console.log(eventInfo.name);
    this.http.post(this.config.apiUrl + '/eventCreate.php', eventInfo).subscribe((r: Response) => {
  
      this.router.navigate(['map']);

    });


  }
  imageUploaded(event) {
    console.log(event.serverResponse);
  }
  fileChange(event) {

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      this.http.post(`${this.url}`, formData)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
        data => console.log('success'),
        error => console.log(error)
        )
    }

  }
  ngOnInit() {
  }

}
