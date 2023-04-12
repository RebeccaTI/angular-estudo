import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  name = "Rebecca de Moura Coelho Rangel";

  
  age = 26;
  demand = ["Desenvolver front da aplicação","Corrigir bugs", "Desenvolver back e testes"]
  squad = {
    name: 'Um sonho de liberdade',
    year:2022

  }
  xp = "Quase três anos em empresa de tecnologia, utilizando diversas stacks"
  role = "Desenvolvedora Jr"
  skill = ["Javascript","Angular", ".Net", "React"]
  career = "Em uma roda de amigos, me contaram o quanto era legal ser dev, decidi estudar e me aprofundar. Desde então, sou fascinada e formada"

  constructor(){  }
  ngOnInit(): void {
      
  }

}
