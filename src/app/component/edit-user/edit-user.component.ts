import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user!: User
  file!: any
  previewURL = ''

  form: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    userName: ['', [Validators.required, Validators.minLength(5)]],
    age: ['20'],
    gender: ['Nam'],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$')]],
    address: ['', [Validators.required, Validators.minLength(7)]],
    avatar: [''] 
  })

  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {   
    this.getUser()
  }

  getUser() {
    let id = String(this.route.snapshot.paramMap.get('id'))
    this.userService.getUser(id).subscribe(({ user }) => {
      this.form.patchValue(user)
    })
  }

  getUrlAvatar(url: any) { 
    return this.userService.sanitizeImageUrl(url)
  }

  handleChangeFile(event: any) {
    this.file = event.target.files[0]
    this.previewURL = URL.createObjectURL(this.file)
  }

  handleSubmit(form: FormGroup) {

  }
}
