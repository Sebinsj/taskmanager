import { Component,NgModule, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Task } from '../Model/task.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{
  allTasks:Task[]=[];
  isFetching:boolean=false;
  
  constructor(private taskService:TaskService,private http :HttpClient,private route:Router){}
  ngOnInit(){
    this.fetchTasks();
   
    }
  private fetchTasks(){
    this.isFetching=true
    this.taskService.getTasks().subscribe((tasks)=>{
      this.allTasks=tasks
      console.log(this.allTasks);
      
      this.isFetching=false
      
    })
    
  }
  onDeleteTask(id:string){
    this.taskService.deleteTask(id).subscribe(()=>{
      this.fetchTasks()
    })

  }
 
  onEditTask(id:string){
   this.route.navigate(['EditTask',id])
   
    
  }
  onViewTask(id:string){
    this.route.navigate(['ViewTask',id])

  }
    
  }
  

