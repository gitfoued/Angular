import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { receip } from '../receip.model';

@Component({
  selector: 'app-receip-list',
  templateUrl: './receip-list.component.html',
  styleUrls: ['./receip-list.component.css']
})
export class ReceipListComponent implements OnInit{

@Output() receipeWasSelected=new EventEmitter<receip>();
  receips: receip[] = [
    new receip("ingredient", "this is the better ingredient ever", "https://www.istockphoto.com/photo/blank-recipe-card-mockup-on-white-wooden-table-gm1973211564-558570090?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Ffr%2Fs%2Fphotos%2Frecipe&utm_medium=affiliate&utm_source=unsplash&utm_term=recipe%3A%3A%3A"),

    new receip("ingredient", "this is the better ingredient ever", "https://www.istockphoto.com/photo/blank-recipe-card-mockup-on-white-wooden-table-gm1973211564-558570090?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Ffr%2Fs%2Fphotos%2Frecipe&utm_medium=affiliate&utm_source=unsplash&utm_term=recipe%3A%3A%3A"),
  ];
constructor(){

}

onreceipeSelected(recipe:receip) {
  this.receipeWasSelected.emit(recipe);
  }
ngOnInit(): void {
  
}


}
