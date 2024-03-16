import { HttpClientModule,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../Model/task.model";
import { map } from "rxjs";

@Injectable({providedIn:"root"})
export class TaskService{
    constructor(private http:HttpClient){    }

    ngOnInit(){}

    createTask(task){
        // console.log(task);
        this.http.post('https://tasktrackerbyssj-default-rtdb.firebaseio.com/tasks.json',task).subscribe((res)=>{
            console.log(res);
            
        })
    }

    getTasks(){
     return this.http.get <{[key:string]:Task}>('https://tasktrackerbyssj-default-rtdb.firebaseio.com/tasks.json')
    .pipe(map((res)=>{
    const tasks=[];  
    for(const key in res){
      if(res.hasOwnProperty(key)){
        tasks.push({...res[key],id:key})
      }
      }
      return tasks
    }))
    
        
    }


    editTask(){
    
    }



    deleteTask(){

    }

}