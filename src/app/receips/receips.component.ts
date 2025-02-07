import { Component } from '@angular/core';
import { receip } from './receip.model';

@Component({
  selector: 'app-receips',
  templateUrl: './receips.component.html',
  styleUrls: ['./receips.component.css']
})
export class ReceipsComponent {
selectedReceipe!: receip;
}
