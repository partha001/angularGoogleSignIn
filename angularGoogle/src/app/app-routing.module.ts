import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"",component: LoginComponent, pathMatch:"full"},
    {path:"logout",component:LogoutComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
