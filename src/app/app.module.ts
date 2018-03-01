import { DatePipe } from './pipes/date.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule, routedComponents } from "./app.routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { TaskService } from './services/task.service';
import { HttpModule } from '@angular/http';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    AddTaskComponent,
    EditTaskComponent,
    DatePipe
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    routedComponents,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
