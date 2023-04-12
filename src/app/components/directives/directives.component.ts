import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  size = 25;
  font = 'Arial';
  color = 'violet';

  classes = ['violet-title', 'small-title'];
  degree = 'Análise e desenvolvimento de sistemas';
  extracurricular = 'Formada pela Residência de Software - primeira edição'
  underline = 'underline-title';
}
