import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../Services/task.service';
import { Task } from '../Model/task.model';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrl: './edittask.component.css'
})
export class EdittaskComponent implements OnInit{
  constructor(private route:ActivatedRoute,private taskService:TaskService){}
  taskFormEdit:FormGroup;
  selectedTaskId:string=''
  allTasks: any;
  taskId:string=''
  ngOnInit(){
    this.taskFormEdit=new FormGroup({
      newtitle:new FormControl(null,Validators.required),
      newdesc:new FormControl(null,Validators.required),
    })


    this.taskId=this.route.snapshot.paramMap.get('id');
    console.log(this.taskId);
    if(this.taskId){
      this.taskService.getTaskbyId(this.taskId).subscribe((task:Task)=>{
        this.allTasks=task
        console.log(this.allTasks);
        
        this.taskFormEdit.patchValue({
          newtitle:this.allTasks.title,
          newdesc:this.allTasks.desc,
        })


      })
    }
    

  }
  // onEditTask(id:string){
  //   this.allTasks.find()

  // }

}
