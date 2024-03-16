import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewtaskComponent } from './viewtask/viewtask.component';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    CreatetaskComponent,
    EdittaskComponent,
    ErrorComponent,
    ViewtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
