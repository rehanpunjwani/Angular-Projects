import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http : HttpClient) { }
//define service function
private _url : string ="/assets/data/employee.json" ;
 
  getEmployee():Observable<IEmployee[]>{

         return this.http.get<IEmployee []>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Timeout")
  }
}
