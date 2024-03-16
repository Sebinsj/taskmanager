import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:TasklistComponent},
  {path:'Home',component:TasklistComponent},
  {path:'CreateTask',component:CreatetaskComponent},
  {path:'EditTask/:id',component:EdittaskComponent},
  {path:'**',component:ErrorComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
