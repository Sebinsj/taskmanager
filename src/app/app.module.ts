import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    CreatetaskComponent,
    EdittaskComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
