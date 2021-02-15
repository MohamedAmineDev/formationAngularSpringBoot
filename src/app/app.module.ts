import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { crudService } from './services/crudService';
import { Part2Component } from './part2/part2.component';

@NgModule({
  declarations: [
    AppComponent,
    Part2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    crudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
