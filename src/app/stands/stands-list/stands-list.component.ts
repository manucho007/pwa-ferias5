import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirestoreService} from '../../core/firestore.service';
// import { AuthService} from '../../core/auth.service';
import { Observable} from 'rxjs/Observable';
interface Stand {
  id: string;
  size: string;
  floor: string;
  price: number;
  isBought:boolean;
}
@Component({
  selector: 'app-stands-list',
  templateUrl: './stands-list.component.html',
  styleUrls: ['./stands-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StandsListComponent implements OnInit {
  stands: Observable<Stand[]>;
  constructor(public db:FirestoreService) { }

  ngOnInit() {
    this.stands = this.db.colWithIds$('stands', ref => ref.orderBy("id",'asc'));
}

}
