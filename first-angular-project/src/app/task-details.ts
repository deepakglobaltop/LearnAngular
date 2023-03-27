export class TaskDetails {
    name: String="";
    priority: number=1;
    desc:string="";
    isHighestPriority:boolean=false;

    constructor(name: String, priority: number , desc:string )
    {
        this.name=name;
        this.priority=priority;
        this.desc=desc;

    }  
}
