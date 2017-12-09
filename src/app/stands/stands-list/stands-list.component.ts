import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirestoreService} from '../../core/firestore.service';
import { AuthService} from '../../core/auth.service';
import { Observable} from 'rxjs/Observable';
import { Stand } from '../../interfaces/stands';
import { User } from '../../interfaces/user';
import { Purchase } from '../../interfaces/purchase';
@Component({
  selector: 'stands-list',
  templateUrl: './stands-list.component.html',
  styleUrls: ['./stands-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StandsListComponent implements OnInit {
  stands: Observable<Stand[]>;
  user:Observable<User>;
  constructor(public db:FirestoreService, public auth:AuthService) { }

  ngOnInit() {
    this.user= this.db.doc$(`users/${this.auth.user}`)
    this.stands = this.db.colWithIds$('stands', ref => ref.orderBy("id",'asc'));
}

buyStand(standId, userId){
  confirm('Desea comprar el stand?');
  const purchase:Purchase={idUser:userId,idStand:standId};
  const purchasePath = `purchases/${purchase.idUser}_${purchase.idStand}`;
  this.db.set(purchasePath,purchase);
  console.log(purchase)
  const data={available:false};
  this.db.update(`stands/${standId}`,data)
}

}
