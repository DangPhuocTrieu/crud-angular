import { CreateUserComponent } from './component/create-user/create-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './component/detail/detail.component';
import { UsersComponent } from './component/users/users.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'create', component: CreateUserComponent },
  { path: '', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
