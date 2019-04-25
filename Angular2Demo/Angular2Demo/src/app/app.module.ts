import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component'; 
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/emplyeeCount.component';
import { SimpleComponent } from './Others/simple.component';
import { EmployeeService } from './employee/employee.service';
import { HomeComponent } from './home/home.component';
import { NibrsComponent } from './NCSX/nibrs.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
];
 

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [NibrsComponent, AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe,
        EmployeeCountComponent, SimpleComponent, HomeComponent, PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers:[EmployeeService]
    
      
})
export class AppModule { }
