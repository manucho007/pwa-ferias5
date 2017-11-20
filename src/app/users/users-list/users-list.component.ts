import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirestoreService} from '../../core/firestore.service';
// import { AuthService} from '../../core/auth.service';
import { Observable} from 'rxjs/Observable';
interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  isAdmin?:boolean;
  nationality?:boolean;
  technique?:boolean;
}
@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersListComponent implements OnInit {
users: Observable<User[]>;
  constructor(public db:FirestoreService) { }

  ngOnInit() {
    this.users = this.db.colWithIds$('users', ref => ref.orderBy("displayName",'asc'));
  }

}
