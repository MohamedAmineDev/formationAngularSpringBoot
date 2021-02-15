import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
personnes:Personne[];
  constructor(private router:Router,private service:PersonneService){

  }

  showDetails(id:any){
    this.router.navigate(['details',id]);
    //this.router.navigateByUrl("/details");
  }
  tab=[1,2,3,4];

  ngOnInit(): void {
    this.personnes=this.service.getPersonnes();
  }
  delete(personne:Personne){
    this.service.deletePersonne(personne.id);
  }
  update(id:number){}
  details(id:number){
     this.router.navigate(['details',id]);
  }

}
