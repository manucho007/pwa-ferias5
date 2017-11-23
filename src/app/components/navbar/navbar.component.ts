import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}
