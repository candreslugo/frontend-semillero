import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myImage:string = "./assets/resources/HANDYMAN.png"
  title = 'Handyman';
  nombre : String = "HANDYMAN";
  constructor(){

  }
}

