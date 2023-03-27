import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { RoleComponent } from './role/role.component';
import { TaskTodoComponent } from './task-todo/task-todo.component';
import { TruncatePipePipe } from './truncate-pipe.pipe';
import { HighLightDirective } from './high-light.directive';
import { CommonshellComponent } from './commonshell/commonshell.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginScreenComponent } from './login/login-screen/login-screen.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoleComponent,
    TaskTodoComponent,
    TruncatePipePipe,
    HighLightDirective,
    CommonshellComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    HttpClientModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
