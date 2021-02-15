import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
ajouter(f:NgForm){

console.log(f)
}
clear(f:NgForm){
f.value.cin=0;
f.value.nom=0;
f.value.age=0;
}

}
