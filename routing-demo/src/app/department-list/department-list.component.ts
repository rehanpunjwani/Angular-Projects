import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {InternetConnectivityComponent} from '../internet-connectivity/internet-connectivity.component';
@Component({
  selector: 'app-department-list',
  template: `
  <h3>
  department-list {{status}}
</h3>
<ul class="items">
  <li (click)="onSelect(departments)" [class.selected]="isSelected(departments)" *ngFor="let departments of department"> 
    <span class="badge">{{departments.id}}</span> {{departments.name}}
  </li> 
</ul>

  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

 public department =[
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongoDB"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"}
  ];
  constructor(private router: Router , private route: ActivatedRoute) { }
  onSelect(departments){
   // this.router.navigate(['/departments',departments.id]);
   this.router.navigate([departments.id], {relativeTo:this.route});
  }
  isSelected(departments){
    return departments.id === this.selectedId;

  }
  
  public selectedId;
  ngOnInit() {
    // this.INC.ngOnInit();
    // let status = this.INC.Connection.status;
    let id = this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
  });

 
  }

}
