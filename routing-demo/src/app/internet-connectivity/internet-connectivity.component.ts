import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import {ConnectionService } from 'ng-connection-service';
@Component({
  selector: 'app-internet-connectivity',
  templateUrl: './internet-connectivity.component.html',
  styleUrls: ['./internet-connectivity.component.css']
})
export class InternetConnectivityComponent implements OnInit {
  @Output() connecChanges: EventEmitter<boolean> =   new EventEmitter();
  @Input() status: boolean;
  Connection = {
    status: true
  }
  constructor(private connectionSer : ConnectionService){}
  ngOnInit(){

  // testing(){
   this.connectionSer.monitor().subscribe(isConnected=> {
    if(isConnected) {
        this.Connection.status=true;
        this.status = this.Connection.status;
    }
    else{ 
      this.Connection.status =false;
      this.status = this.Connection.status;
   } 
   this.connecChanges.emit(this.status);
  }); 
   }
  

  

}
