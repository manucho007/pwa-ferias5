import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirestoreService } from '../../core/firestore.service';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../interfaces/user';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersListComponent implements OnInit {
  users: Observable<User[]>;
  order: string = 'nationality';
  constructor(public db: FirestoreService) { }

  ngOnInit() {
    this.users = this.db.colWithIds$('users', ref => ref.orderBy(this.order, 'asc'));
  }

}
