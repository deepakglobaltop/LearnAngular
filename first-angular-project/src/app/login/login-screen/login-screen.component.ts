import { Component, OnInit, NgModule } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  userId: string="Guest";
  validate: boolean = false;
  
  constructor(private loginService: LoginServiceService) {
    
   }

  ngOnInit(): void {
  }

  validateUser()
  {
    console.log(" inside validateUser"+this.userId)
    this.validate =this.loginService.isValidUser(this.userId);

  }

}
