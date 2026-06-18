import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user';
import { listUser } from '../../data/listUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  userList: IUser[] = listUser;
  displayedColumns: string[] = ['name', 'date', 'status'];

  onUserSelected(user: IUser) {
    console.log('User selected:', user);
  }
}
