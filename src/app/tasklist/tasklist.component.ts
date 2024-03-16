import { Component,NgModule, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Task } from '../Model/task.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{
  allTasks:Task[]=[];
  isFetching:boolean=false;
  constructor(private taskService:TaskService,private http :HttpClient){}
  ngOnInit(){
    this.fetchTasks();
   
    }
  private fetchTasks(){
    this.isFetching=true
    this.taskService.getTasks().subscribe((tasks)=>{
      console.log(tasks);
      this.allTasks=tasks
      this.isFetching=false
      
    })
    
  }
  onDeleteTask(id:string){
    this.taskService.deleteTask(id).subscribe()

  }
 
  onEditTask(id:string){
   let currentTask= this.allTasks.find((p)=>{return p.id===id})
   console.log(currentTask);
   
    
  }
    
  }
  

