import { Routes } from '@angular/router';
//import{Homecomponent } from './';
//import { TablePaginationExample } from '../pagination/pagination.component';
//import { ModelFormDemo } from '../country/country.component';

//import { HomeComponent } from '../Home/home.component';
//import { EmpComponent } from '../Employee/Employee.component';
//import { EmployeeInfocomponent } from '../Employee/Employeeinfo.component';
import { LoginComponent } from '../Login/login.component';
import { dashboardComponent } from '../Dashboard/dashboard.component';

export const myroute: Routes = [

    { path: '', component: LoginComponent },
    { path: 'dashboard', component: dashboardComponent }
   
];