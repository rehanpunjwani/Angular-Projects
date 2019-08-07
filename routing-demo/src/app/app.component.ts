import { Component, OnInit } from '@angular/core';
import {ConnectionService} from 'ng-connection-service';
import {ConnectivityService} from './connectivity.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  Connection = {
      status: true
  };

  constructor(private connectionSer: ConnectionService, private Cs : ConnectivityService) {


   
   this.Connection.status = this.Cs.testing();
   console.log(this.Connection.status);
    } 
    
//    this.connectionSer.monitor().subscribe(isConnected=> {
//     if(isConnected) {
//         this.Connection.status=true;
//     }
//     else{ 
//       this.Connection.status =false;
//    } 
//   }); 
// }

  


  title = 'routing-demo';
}
