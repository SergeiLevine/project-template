import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  auth=false;
  eventStarted=false;
  logout(){
    this.auth=!this.auth;
  }
  startEvent(){

  }
  login(event){
    
    console.log("Login succesful");
    this.auth=true;
  }
}
