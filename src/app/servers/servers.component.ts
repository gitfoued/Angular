import { Component } from '@angular/core';

@Component({
   selector: 'app-servers',
  // selector: '[app-servers]',//le selecteur est un attribut dans ce cas
  // selector: '.app-servers',dans ce cas le selecteur est une classe 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
serverCreationStatus: string =  "No server was created";
SererUpdateResult: string ="";
serverCreated: boolean= false;
allownewserver: boolean=false;
servers=['testserver','testserver 2'];

constructor(){
  setTimeout(()=>{
    this.allownewserver=true;
  } ,2000)
}
onCreateServer() {
  this.serverCreationStatus="server was created";
  this.servers.push(this.SererUpdateResult);
  }
onUpdateServer(event:Event){
  this.SererUpdateResult=(<HTMLInputElement>event.target).value;
  console.log(event);
  this.serverCreated=true;
  }

}
