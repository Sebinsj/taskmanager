import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.css'
})
export class CreatetaskComponent {
  constructor(private taskService:TaskService){

  }
  taskForm:FormGroup;

  ngOnInit(){
    this.taskForm=new FormGroup({
      title:new FormControl(null,Validators.required),
      desc:new FormControl(null,Validators.required),
    })
  }
  onAddTask(task:{title:string,desc:string}){
    // console.log(this.taskForm);
    // console.log(task);
    this.taskService.createTask(task)
    
    
    
  }
}
