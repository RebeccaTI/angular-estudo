import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
userName = "Rebecca de Moura Coelho Rangel";
userData = {
  email: 'rebecca.mcrangel@gmail.com',
  role:'Desenvolvedora'
  }
  title = 'estudo-angular';
}
