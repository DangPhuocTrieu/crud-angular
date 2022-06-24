import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './component/detail/detail.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';
import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { FormLayoutComponent } from './component/form-layout/form-layout.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    UsersComponent,
    UserComponent,
    DetailComponent,
    CreateUserComponent,
    EditUserComponent,
    FormLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule,
    ReactiveFormsModule,
    AngularToastifyModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
