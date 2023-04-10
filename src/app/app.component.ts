import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
userName = "Gabriela";
userData = {
  email: 'gabriela@hotmail.com',
  role:'Developer'
}
  title = 'estudo-angular';
}
