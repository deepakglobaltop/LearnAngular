import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskDetails } from '../task-details';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.css']
})
export class TaskTodoComponent implements OnInit {


  @Input() numberOfPages=0;
  pages:number[]=[];
  @Input("allTask")
  allTask: TaskDetails[][] = [];

  @Output()
  pageNumberClicked=new EventEmitter();
  
  
  constructor() {
    
   }

   pageNumberClick(pageNumber:number)
   {
     console.log(" pageNumber== "+pageNumber);
    this.pageNumberClicked.emit(pageNumber);
   }

  ngOnInit(): void {
    console.log(" constructor ");
    console.log(" this.numberOfPages "+this.numberOfPages);
    this.pages=new Array(this.numberOfPages)
    console.log(" this.pages+ "+this.pages);
  }

}
