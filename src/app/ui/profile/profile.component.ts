import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.signOut();
  }
}
