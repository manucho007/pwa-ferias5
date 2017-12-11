import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirestoreService} from '../../core/firestore.service';
import { AuthService} from '../../core/auth.service';
import { Observable} from 'rxjs/Observable';
import { Purchase } from '../../interfaces/purchase';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-stands-bought',
  templateUrl: './stands-bought.component.html',
  styleUrls: ['./stands-bought.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class StandsBoughtComponent implements OnInit {
purchases: Observable<Purchase[]>;
// user:Observable<User>;
  constructor(public db:FirestoreService, public auth:AuthService) { }

  ngOnInit() {
    // this.user.uid= this.db.doc$(`users/${this.auth.user}`)
    // const Id = this.auth.user.displayName
    this.purchases = this.db.col$('purchases');
    // this.user= this.db.doc$(`users/${this.auth.user}`)
  }

}
