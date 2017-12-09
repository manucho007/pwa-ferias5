import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Stand } from '../../interfaces/stands';
import { FirestoreService} from '../../core/firestore.service';

@Component({
  selector: 'stands-add',
  templateUrl: './stands-add.component.html',
  styleUrls: ['./stands-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StandsAddComponent implements OnInit {
stand:Stand ={
    id: '',
    size: '',
    floor: '',
    price: 0,
    available:true
};
  constructor(public db:FirestoreService) { }

  ngOnInit() {
  }
  addStand(){
  // this.db.add('stands',this.stand);
  this.db.set(`stands/${this.stand.id}`,this.stand);
  this.stand.id= '';
  this.stand.size= '';
  this.stand.floor= '';
  this.stand.price= 0;
  }
}
