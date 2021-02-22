import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule,FormBuilder } from "@angular/forms";
import { UsersComponent } from './users/users.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsComponent } from './details/details.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { FormTypeComponent } from './form-type/form-type.component';
import { CommonModule } from '@angular/common';


const routes:Routes=[
  {path:'users',component:UsersComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'details/:id',component:DetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AccueilComponent,
    DetailsComponent,
    AjoutEtudiantComponent,
    Com1Component,
    Com2Component,
    FormTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
