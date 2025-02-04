import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl :'./server.component.html',
    styles :[`
    .offline{
        color : white;
    }
    `]
})
export class ServerComponent{
serverId:number =10;
serverStatus:string ='offline';

constructor(){
    this.serverStatus = Math.random()>0.5 ? 'online':'offline';

}
getserverstatus(){
    return this.serverStatus;
}
onColor(){
    return this.serverStatus === 'offline' ? 'red' : 'green';
}
}
