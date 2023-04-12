import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() name: string= '';
  @Input() age: number= 26 ;
  @Input() hobbie: string = 'Jogar basquete';
  @Input() userData!: {email: string, role: string}
  @Input() maritalStatus: string = 'Casada';

}
