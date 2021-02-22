import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {

  constructor(private service:PersonneService,private router:Router) { }

  ngOnInit(): void {
  }
  ajouter(f:NgForm){
    console.log(f);
    this.service.addPersonne(new Personne(f.value.id,f.value.nom));

  }

}
