import { Injectable } from '@angular/core';
import {ConnectionService } from 'ng-connection-service';
@Injectable({
  providedIn: 'root'
})
export class ConnectivityService{

  Connection = true;
  constructor(private connectionSer: ConnectionService) {  

}

testing() : boolean{
  let status = true;
  this.connectionSer.monitor().subscribe(isConnected=> {
    if(isConnected) {
        this.Connection = true;
    }
    else
     { this.Connection = false;
     }
      status = this.Connection;
  });
  return status; 
}

}