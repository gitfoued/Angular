import { Component } from '@angular/core';

@Component({
   selector: 'app-servers',
  // selector: '[app-servers]',//le selecteur est un attribut dans ce cas
  // selector: '.app-servers',dans ce cas le selecteur est une classe 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
allownewserver: boolean=false;
constructor(){
  setTimeout(()=>{
    this.allownewserver=true;
  } ,2000)
}

}
