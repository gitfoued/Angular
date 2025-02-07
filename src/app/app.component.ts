import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigate:string='receip';
onNavigate(feature: string) {
this.navigate=feature;
}
}
