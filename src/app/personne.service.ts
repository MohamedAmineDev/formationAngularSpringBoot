import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
 private  personnes = [
    new Personne(1, "Ahmed"),
    new Personne(2, "Salah"),
    new Personne(3, "Malek"),
    new Personne(4, "Mahdi")
    , new Personne(5, "Mohamed Ali")
  ];
  addPersonne(p: Personne) {
    this.personnes.push(p);
    console.log("personne ajouté !");
  }
  deletePersonne(id: number) {
    this.personnes.splice(id, 1);
    console.log("la personne " + id + " est supprimée !");
  }
  updatePersonne(id: number, personne: Personne) {
    this.personnes.splice(id, 1, personne)
    console.log("la personne " + id + " est mise à jour !");
  }
  searchPersonne(nom: String) {
    return this.personnes.filter(x => x.nom == nom);
  }
  getPersonnes(){
    return this.personnes;
  }
  getPersonne(id:number):Personne{
    return this.personnes.find(x=>x.id=id);
  }

  constructor() { }
}
