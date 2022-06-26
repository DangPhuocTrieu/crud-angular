import { ToastService } from 'angular-toastify';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
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
  msgs!: string

  constructor(private userService: UserService, private toastService: ToastService) { }

  ngOnInit(): void {  
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().pipe(delay(500)).subscribe(data => {
      this.users = data.users
      this.loading = false
    }) 
  }

  handleDeleteUser(id: string) {
    if(confirm('Are you sure you want to delete ?')) {
      this.userService.deleteUser(id).subscribe(data => {
        this.toastService.success('Delete user successfully')
        this.getUsers()
      })
    }
  }
}
