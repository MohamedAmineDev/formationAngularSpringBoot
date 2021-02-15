import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { UsersComponent } from './users/users.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsComponent } from './details/details.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';


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
    AjoutEtudiantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
