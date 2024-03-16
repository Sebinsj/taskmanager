import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLinkActive } from '@angular/router';
import { TaskService } from '../Services/task.service';
import { Task } from '../Model/task.model';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrl: './viewtask.component.css'
})
export class ViewtaskComponent  implements OnInit{
  selectedTaskId:string='';
  selectedTask:any;
constructor(private route:ActivatedRoute,private taskService:TaskService, private router:Router){}
  ngOnInit(){
    this.selectedTaskId=this.route.snapshot.paramMap.get('id');
    if(this.selectedTaskId){
      this.taskService.getTaskbyId(this.selectedTaskId).subscribe((res)=>{
        this.selectedTask=res

      })
    }
  }
  viewEdit(){
    this.router.navigate(['EditTask',this.selectedTaskId])

  }

}
