import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public onlineOffline: boolean = navigator.onLine;

  constructor() { }

  ngOnInit() {
    window.addEventListener('online', () => {this.onlineOffline = true; console.log("true block",this.onlineOffline)});
    window.addEventListener('offline', () => {this.onlineOffline = false;  console.log("false block",this.onlineOffline)});
  }

}
