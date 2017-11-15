import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
