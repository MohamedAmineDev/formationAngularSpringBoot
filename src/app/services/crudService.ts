import { Injectable } from "@angular/core";
import { Appareil } from "../model/appareil";

@Injectable()
export class crudService{
  appareils:Appareil[] = [
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
public constructor(){}
public getAppareil():any{
  return this.appareils;
}
public  ajoutAppareil(appareil:Appareil):void{
  this.appareils.push(appareil);
}
}
