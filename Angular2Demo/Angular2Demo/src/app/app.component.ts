//import { Component } from '@angular/core';

//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular 2'; }


import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `
                    <div style="padding:5px">
                        <ul class="nav nav-tabs">
                            <li routerLinkActive= "active"> <a routerLink="home">Home</a> </li>
                            <li routerLinkActive= "active"> <a routerLink="employees">Employees</a> </li>
                        </ul>
                        <br>
                        <router-outlet></router-outlet>
                    </div>
              `
})
export class AppComponent {

    userText: string = 'pragim';
    }
   


