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

public search(status:string):any{
 if(status!="" ){
  let listAppareil:any=this.appareils.filter(x=>x.status==status);
  return listAppareil;
 }
 else{
  return this.appareils;
 }

}

public trouverApp(id:number):Appareil{
  let appareil=this.appareils.find(x=>x.id=id);
  return appareil;
}
public updateApp(id:number,appareil:Appareil):boolean{
let test:boolean=false;
this.appareils[id-1]=appareil;
if(this.appareils[id-1]==appareil){
  test=true;
}
return test;
}
}
