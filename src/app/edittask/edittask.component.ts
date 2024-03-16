import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrl: './edittask.component.css'
})
export class EdittaskComponent implements OnInit{
  taskFormEdit:FormGroup;
  selectedTaskId:string=''
  allTasks: any;
  ngOnInit(){
    this.taskFormEdit=new FormGroup({
    newtitle:new FormControl(null,Validators.required),
    newdesc:new FormControl(null,Validators.required),
  })

  }
  // onEditTask(id:string){
  //   this.allTasks.find()

  // }

}
