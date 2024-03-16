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
  constructor(private route:ActivatedRoute,private taskService:TaskService,private router:Router){}
  taskFormEdit:FormGroup;
  selectedTaskId:string=''
  selectedTask: any;
  taskId:string='';

  ngOnInit(){
    this.taskFormEdit=new FormGroup({
      title:new FormControl(null,Validators.required),
      desc:new FormControl(null,Validators.required),
    })


    this.taskId=this.route.snapshot.paramMap.get('id');
    console.log(this.taskId);
    if(this.taskId){
      this.taskService.getTaskbyId(this.taskId).subscribe((res)=>{
        this.selectedTask=res
        console.log(this.selectedTask);
        this.selectedTaskId=this.taskId,
        
        this.taskFormEdit.patchValue({
          
          title:this.selectedTask.title,
          desc:this.selectedTask.desc,
        })


      })
    }
    

  }
  onEditTask(){
    
    this.taskService.editTask(this.taskId,this.taskFormEdit.value).subscribe(()=>{
      this.router.navigate(['/'])

    })

  }

}
