import { Component, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template:`
    <h2>Employee list </h2>
    <h3> {{errorMsg}} </h3>
    <ul *ngFor="let employee of employees">
      <li> {{employee.name}}</li>
    </ul>
  
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[];
  public errorMsg;
  constructor( private _employeeService : EmployeeServiceService) { }

  ngOnInit()  {
   this._employeeService.getEmployee().subscribe(data=> this.employees= data, error=>this.errorMsg=error);
  }

}
