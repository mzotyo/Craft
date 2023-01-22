import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './task/framework/components/header/header.component';
import { TasksComponent } from './task/framework/components/tasks/tasks.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TasksComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
