import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  name = "Rebecca";
  age = 26;
  job = "Programador"
  hobbie = ["Jogar basquete","jogar futebol", "surfar"]
  car = {
    name: 'lamborghini',
    year:2023

  }

  constructor(){  }
  ngOnInit(): void {
      
  }

}
