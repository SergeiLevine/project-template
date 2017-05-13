
import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class MarkerService {

   

    constructor(private http: Http) {
    }

    public getMarker() {
       var postsUrl = 'B34bf07b.ngrok.io/send_data.php';
       console.log(postsUrl);
        return this.http.get(postsUrl).map(res => res.json());
            
    }

}
