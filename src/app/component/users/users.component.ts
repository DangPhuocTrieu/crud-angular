import { Component, OnInit } from '@angular/core';
import { delay, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: User[]
  loading = true

  constructor(private userService: UserService) { }

  ngOnInit(): void {  
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().pipe(delay(500)).subscribe(data => {
      this.users = data.users
      this.loading = false
    }) 
  }

}
