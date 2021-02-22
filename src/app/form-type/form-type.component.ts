import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-form-type',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.css']
})
export class FormTypeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    debugger;
  }
  /* registerForm:FormGroup=this.formWilder.group({
     id:[],
     nom:[''],
     cin:['']
   });*/
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  appareil: any;
  index: number;
  modifiable: boolean = false;
  update(i: number, appareil: any) {
    this.modifiable = true;
    this.appareil = appareil;
    this.index = i;
  }
  doUpdate() {
    this.appareils.splice(this.index, 1, this.appareil);
    alert("Update done with success !");
  }
  delete(indice: number) {
    if (confirm("Do you want really to delete this content ?")) {
      this.appareils.splice(indice, 1);
    }
    else {
      return;
    }
  }
  ajouter() { }
  parcourir() {
    this.appareils.forEach(element => console.log(element));
  }

}
