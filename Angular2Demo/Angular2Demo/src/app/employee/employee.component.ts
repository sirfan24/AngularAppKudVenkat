﻿import { Component } from '@angular/core'


@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    firstName: string = 'Jerry';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    showDetails: boolean = false;

    toggleDetails(): void {

        this.showDetails = !this.showDetails;
    }
    
}