import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from '../model/personne';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

personne:Personne;
  constructor(private route:ActivatedRoute,private service:PersonneService ) {
   }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.personne=this.service.getPersonne(id);
  }

}
