import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any;
  data!: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Klava',
        lastName: 'Novizki',
        email: 'klava@web',
        isActive: true,
        registered: new Date('01/02/2001 08:30:15'),
        hide: true,
      },
      {
        firstName: 'John',
        lastName: 'Johnson',
        email: 'john@web',
        isActive: false,
        registered: new Date('01/02/2001 08:30:15'),
        hide: true,
      },
      {
        firstName: 'Maximilian',
        lastName: 'Max',
        email: 'Max@web',
        isActive: true,
        registered: new Date('01/02/2001 08:30:15'),
        hide: true,
      },
    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
