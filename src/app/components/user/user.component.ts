import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  //Properties
  user!: User;

  //Methd
  constructor() {}

  ngOnInit(): void {
    this.user = {
      firstName: 'Klava',
      lastName: 'Novizki',
      email: 'klava@web',
      isActive: true,
      registered: new Date('01/02/2001 08:30:15'),
      hide: true,
    };
  }
}
