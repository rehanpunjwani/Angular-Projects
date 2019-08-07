import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You selected department with id = {{departmentId  }}
    <br>  
      <button (click)="goOverview()">Overview </button>
      <button (click)="goContact()">Contact</button>
    </p>
    
    <p>
    <button (click)="goPrevious()">Previous </button>
    <button (click)= "goNext()"> Next</button>
    </p>
    <router-outlet></router-outlet>
  <div> 
  <button (click)="goBack()">Back </button>
  </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private router : ActivatedRoute, private route: Router) { }

  ngOnInit() {
    // let id = parseInt(this.router.snapshot.paramMap.get('id'));
    // this.departmentId=id;

    let id = this.router.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.departmentId = id;
    });
  }
goPrevious(){
  let previousId = this.departmentId - 1;
  this.route.navigate(['/departments-list', previousId],{relativeTo:this.router});
}
goNext(){
  let nextId = this.departmentId + 1;
  this.route.navigate(['/departments-list', nextId],{relativeTo: this.router});  
}
goBack(){
  let selectedId = this.departmentId ? this.departmentId : null ; 
  //this.route.navigate(['/departments', {id: selectedId}]);
  
  this.route.navigate(['../',{id:selectedId}], { relativeTo: this.router});
}
goOverview(){
  this.route.navigate(['overview'],{ relativeTo :this.router});
}
goContact(){
  this.route.navigate(['contact'],{relativeTo: this.router});
}
}
