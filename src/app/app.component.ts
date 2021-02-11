import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuto';
  nom:string="amine";
  noms=["Amine","Amani","Yassmine","Boubaker"];
  a=15;
  b=14;
  connected=true;
  findT(){
   // this.remplirTab();

    //console.log(this.nom);
    //let name=document.getElementById("v").textContent;
    console.log(this.nom);
    this.noms.push(this.nom);
   // console.log(this.noms[i]);
   // alert(this.nom);
   // this.connected=false;
  }
  findById(){
    let name=document.getElementById('t');
    //name.innerHTML="Hey guys !";
    console.log(name.innerText);
  }
  remplirTab(){
    let i=this.noms.length;
    let l=i+21;
    while(i<l){
      this.noms.push("etudiant "+i);
      i++;
    }
  }
  hey(id:number){
    console.log(this.noms[id]);
  }
  delete(id:number){
    this.noms.splice(id,1);
    //this.noms.pop(id);
  }
}
