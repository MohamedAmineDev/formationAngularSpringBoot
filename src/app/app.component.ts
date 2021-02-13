import { Component } from '@angular/core';
import { Appareil } from './model/appareil';
import { crudService } from './services/crudService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apps;
  modeAf: string = "true";
  // affichage :
  mode: number = 0;
  verbe: string = "afficher";
  constructor(private service: crudService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apps = this.service.getAppareil();

  }
  title = 'tuto';
  nom: string = "amine";
  noms = ["Amine", "Amani", "Yassmine", "Boubaker"];
  a = 15;
  b = 14;
  connected = true;
  findT() {
    // this.remplirTab();

    //console.log(this.nom);
    //let name=document.getElementById("v").textContent;
    console.log(this.nom);
    this.noms.push(this.nom);
    // console.log(this.noms[i]);
    // alert(this.nom);
    // this.connected=false;
  }
  findById() {
    let name = document.getElementById('t');
    //name.innerHTML="Hey guys !";
    console.log(name.innerText);
  }
  remplirTab() {
    let i = this.noms.length;
    let l = i + 21;
    while (i < l) {
      this.noms.push("etudiant " + i);
      i++;
    }
  }
  hey(id: number) {
    console.log(this.noms[id]);
  }
  delete(id: number) {
    this.noms.splice(id, 1);
    //this.noms.pop(id);
  }

  updateT() {
    console.log("Update table !");
  }

  modeAffichage() {
    if (this.mode == 0) {
      this.mode = 1;
      this.verbe = "masquer";

    }
    else {
      this.mode = 0;
      this.verbe = "afficher";
    }
  }

  switchTo() {
    this.modeAf = "true";
  }
  navigateTo() {
    this.modeAf = "false";
  }
  id: number;
  name: string = "";
  statut: string = "";
  ajouter() {
    let appareil: Appareil = new Appareil(this.id, this.name, this.statut);
    this.service.ajoutAppareil(appareil);
    alert("Ajout affecuté avec succès !");
    this.switchTo();
    this.filtrer();
  }


  /**
   * controle de la couleur
   */
  getColor(): string {
    if (this.name.length < 5) {
      return "red";
    }
    else {
      return "green";
    }

  }
  getvisible(): string {
    return "true";
  }
  put: boolean = true;
  filtrer(): void {
    let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(tab.filter(x => x > 3));
  }
  toSearch: boolean = false;
  search() {
    if (this.toSearch == false) {
      this.toSearch = true;
    }
  }
  trouver: string;
  find() {
    this.apps = this.service.search(this.trouver);
  }

  appareil: Appareil = new Appareil(0, "", "");
  indice: number;
  beforeUpdate(item: Appareil, i: number) {
    this.appareil = item;
    //this.updating(id);
    this.indice = i;
  }
  updating() {
    let test: boolean = this.service.updateApp(this.indice, this.appareil);
    if (test) {
      alert("Update effecuté !");
    }
    else {
      alert("Update non effectué !");
    }
  }
  test: boolean = false;

  controler(): boolean {
    if (this.id == 0 || this.name == '' || this.statut == '') {
      return true;
    }
    else {
      return false;
    }
  }

}
