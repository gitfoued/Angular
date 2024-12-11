import { Component } from "@angular/core";

@Component({
    selector : 'app-warning',
    template: `
    <p> oops ur in danger bro </p>
    `,
    styles : [
        `
        p {
        padding: 20px;
        background-color: red;
        border : 1px solid black
        }
        `
    
    ]
})
export class WarningAlert{

}