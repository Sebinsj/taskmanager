import { Component,NgModule, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Task } from '../Model/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{
  allTasks:Task[]=[];
  constructor(private taskService:TaskService,private http :HttpClient){}
  ngOnInit(){
    this.fetchTasks();

    
    //   this.taskService.getTasks()
    //   .subscribe((res)=>{

    //     this.datas.push(res)

    //     console.log(this.datas);
        

    // })
    }
  private fetchTasks(){
    this.http.get <{[key:string]:Task}>('https://tasktrackerbyssj-default-rtdb.firebaseio.com/tasks.json')
    .pipe(map((res)=>{
    const tasks=[];  
    for(const key in res){
      if(res.hasOwnProperty(key)){
        tasks.push({...res[key],id:key})
      }
      }
      return tasks
    }))
    .subscribe((tasks)=>{
      console.log(tasks);
      this.allTasks=tasks;
    })
  }

    
  }
  

