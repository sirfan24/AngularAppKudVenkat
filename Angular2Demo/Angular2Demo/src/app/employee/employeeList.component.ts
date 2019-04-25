import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'list-employee' ,
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[]

    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading data.Please wait...';

    constructor(private _employeeService: EmployeeService) {

        

    }

    ngOnInit() {

        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) => {
                this.statusMessage = 'Problem with the service. please try again later.'
                console.error(error);
            });
    }

    onEmployeeCountButtonChange(selectRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectRadioButtonValue;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    //getEmployees(): void {
    //    this.employees = [{ code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '09/06/1998' },
    //    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '05/24/199' },
    //    { code: 'emp103', name: 'Nancy', gender: 'Female', annualSalary: 8700, dateOfBirth: '07/18/1987' }]

    //}
    trackByEmpCode(index: number, employee: any) : string
    {
        return employee.code;
    }

}