import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  name = "Rebecca";
  age = 26;
  job = "Programadora"
  hobbie = ["Jogar basquete","jogar futebol", "surfar"]
  car = {
    name: 'Lamborghini',
    year:2023

  }

  career = "Em uma roda de amigos, todos eram menos eu e aí me mostraram os códigos. Desde então, sou fascinada"


  constructor(){  }
  ngOnInit(): void {
      
  }

}
