import { Component } from '@angular/core';

import { Employee } from './Employee';
import { range, filter, map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emp: Employee = new Employee();
  title = 'first-angular-project';

  constructor()
  {
    this.emp.name=" Deepak Sharma";
  }
}
