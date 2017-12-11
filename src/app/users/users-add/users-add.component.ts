import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirestoreService} from '../../core/firestore.service';
import { User } from '../../interfaces/user';
@Component({
  selector: 'users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersAddComponent implements OnInit {
user:User={
  uid: '',
  photoURL: 'https://cad.onshape.com/images/placeholder-user.png',
  isAdmin:false,
  displayName: '',
  email: '',
  nationality:'',
  mainActivity:'',
  secondActivity:'',
  company:''
}
  constructor(public db:FirestoreService) { }

  ngOnInit() {

  }

  userAdd(){
    this.db.add('users',this.user);
  }
}
