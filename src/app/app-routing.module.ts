import { CreateUserComponent } from './component/create-user/create-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './component/detail/detail.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  { path: '', children: [
    { path: 'detail/:id', component: DetailComponent },
    { path: 'create', component: CreateUserComponent },
    { path: '', component: UsersComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }