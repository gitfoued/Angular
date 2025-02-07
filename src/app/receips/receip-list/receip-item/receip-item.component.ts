import { Component, EventEmitter, Input, Output } from '@angular/core';
import { receip } from '../../receip.model';

@Component({
  selector: 'app-receip-item',
  templateUrl: './receip-item.component.html',
  styleUrls: ['./receip-item.component.css']
})
export class ReceipItemComponent {

  @Input() receip!: receip;
  @Output() recipeSelected=new EventEmitter<void>();
  constructor(){
  }
  onDeclenche() {
    this.recipeSelected.emit();
    }
}
