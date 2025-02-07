import { Component, Input } from '@angular/core';
import { receip } from '../receip.model';

@Component({
  selector: 'app-receip-detail',
  templateUrl: './receip-detail.component.html',
  styleUrls: ['./receip-detail.component.css']
})
export class ReceipDetailComponent {
@Input()  recipe!:receip
}
