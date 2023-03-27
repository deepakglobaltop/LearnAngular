import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginScreenComponent } from './login/login-screen/login-screen.component';
import { RoleComponent } from './role/role.component';

let routes: Routes =
 [
   { path:"" , redirectTo:"/home" , pathMatch:"full"},
    {
      path:"home" , component:HomeComponent , 
    children:
    [{ path:"role", component:RoleComponent  }]
   },
   {path:"login" , component:LoginScreenComponent},
   { path:"role", component:RoleComponent  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
