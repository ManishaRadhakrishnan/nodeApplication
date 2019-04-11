import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  constructor(){}
  
changeVisibility()
{
  this.isVisible=!this.isVisible;
}
  isVisible = false;
  title = 'MY LOGIN PAGE';
}
