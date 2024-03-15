import { HttpClientModule,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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

    // getTasks(){
    //     return this.http.get('https://tasktrackerbyssj-default-rtdb.firebaseio.com/tasks.json')
        
    // }


    editTask(){
    
    }



    deleteTask(){

    }

}