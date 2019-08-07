import { Component, OnInit } from '@angular/core';
import browser from 'browser-detect';

@Component({
  selector: 'app-page-not-found',
  templateUrl:'./page-not-found.component.html',
  styles: []
})
export class PageNotFoundComponent implements OnInit {
  result = browser();
  show = true;
  supportedVersion = 11;
  constructor() { }
      ngOnInit() {
        if(this.result.versionNumber >= this.supportedVersion && this.result.version == 'IE')
        {
          this.show= true; 
          
        }
        else {
           this.show = false;
           console.log(this.result.versionNumber);
        }
  }

}
