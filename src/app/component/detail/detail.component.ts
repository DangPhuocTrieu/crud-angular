import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  user!: User
  loading = true

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetailUser()
  }

  getDetailUser() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.userService.getUser(id)
      .pipe(delay(1000))
      .subscribe(user => {
        this.user = user
        this.loading = false
      })
  }

}
