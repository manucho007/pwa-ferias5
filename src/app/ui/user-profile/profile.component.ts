import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  editState: boolean = false;
  constructor(public auth: AuthService) { }

  ngOnInit() {

  };

  logout() {
    this.auth.signOut();
  };

  editUser() {
    this.editState = true;

  };

  clearState() {
    this.editState = false;
  };

  updateUserData(user) {

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      nationality: user.nationality,
      mainActivity: user.mainActivity,
      secondActivity: user.secondActivity,
      company:user.company
    }
    this.auth.updateUser(user, data);
    this.clearState();
  };
}
