import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  auth=false;
  login(event){
    console.log("Login succesful")
    this.auth=true;
  }
}
