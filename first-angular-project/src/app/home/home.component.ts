import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../Employee';
import { TaskDetails } from '../task-details';
import { TaskTodoComponent } from '../task-todo/task-todo.component';
import { Observable } from 'rxjs' ; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input("companyName")
  companyName:string="";

  phoneCollapsed: boolean =false;
  currentPageNumber:number=1;
  todayDate:string | undefined;
  @Input("employee")
  employee: Employee = new Employee();
  allTask:TaskDetails[][]=[];
  numberOfPages:number=0;
  @ViewChild("taskToDo")
  taskToDo: TaskTodoComponent = new TaskTodoComponent;

  topicId:string="Default11";
  topicName:string="java";
  topics:any;

  



  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
    
    this.todayDate =new Date().toLocaleTimeString();
    setInterval( () => {this.todayDate =new Date().toLocaleTimeString();} , 1000)
    
    this.allTask=[
      [new  TaskDetails("approveCC", 1 , " page 1")
      ,new  TaskDetails("approveSR", 2 , " page 1")
      , new  TaskDetails("approveRoleGrant", 3 , " page 1")
      ],
      [new  TaskDetails("approveCC", 1 , " page 2")
      ,new  TaskDetails("approveSR", 2 , " page 2")
      , new  TaskDetails("approveRoleGrant", 3 , " page 2")
      ],
      [new  TaskDetails("approveCC", 21 , " page 3")
      ,new  TaskDetails("approveSR", 22 , " page 3")
      , new  TaskDetails("approveRoleGrant", 23 , " page 3")
      ],
      [new  TaskDetails("approveCC", 11 , " page 4")
      ,new  TaskDetails("approveSR", 12 , " page 4")
      , new  TaskDetails("approveRoleGrant", 33 , " page 4")
      ]]
    ;
    this.numberOfPages=this.allTask.length;
    console.log(" this.numberOfPages+ "+this.numberOfPages);
  }

  addTopic()
  {
    console.log(" id entered =="+this.topicId);
    let obj:Observable=  this.http.post("http://127.0.0.1:8080/topics" ,{
      "id": this.topicId,
      "name": this.topicName,
       "courses": null
  });
  obj.subscribe
  (
    (response:any)=>
   {
     console.log(response);
    });
    
  }

  phoneSection()
  {
    this.phoneCollapsed=!this.phoneCollapsed;
    //this.taskToDo.pageNumberClick(3);
    console.log(" event clicked ") ;
  // let options= {
  //   headers:{"Access-Control-Allow-Origin": '*'}
  // };
  // console.log("options");
  // console.log(options);
  let obj=  this.http.get("http://localhost:8080/topics" );
  obj.subscribe((response:any)=>
   {this.topics=response;
     console.log(response)
    } ,
    (err:any)=> {
       console.log(" error while calling the service ");
       console.log(err);
      });

  }

  markUrgent(i:number)
  {
    this.allTask[this.currentPageNumber][i].isHighestPriority=true;
  }
  updatePageNumber(pagenumber:number)
      {
    this.currentPageNumber=pagenumber;
      }
}
