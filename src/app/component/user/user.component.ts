import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: '[user-item]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user!: User
  avatar_user_default = 'https://www.hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg'

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUrlAvatar(url: any) {
    return this.userService.sanitizeImageUrl(url)
  }

}
