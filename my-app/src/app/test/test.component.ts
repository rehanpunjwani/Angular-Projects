import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: /*`
  <h2> Welcome {{name}}</h2>
  <h2 class='text-success'>CodeEvolution</h2> 
  <h2 [class]='successClass'>CodeEvolution</h2> 
  <h2 class='text-special' [class]='successClass'>CodeEvolution</h2> 
  <h2 [class.text-danger]="hasError">CodeEvolution</h2> 
  <h2 [ngClass]="messageClass">CodeEvolution</h2> 
 ` /* Style Binding*/
  /*`<h2 [style.color]="orange">Hello {{greeting}}</h2> 
  <h2 [style.color]="hasError ?'red': 'green'">CodeEvolution</h2>   
  <input  type="text" value="Rehan" > 
  <h2 [style.color]="prop">CodeEvolution</h2>
  <h2 [ngStyle]="styleClass">CodeEvolution {{greeting}}</h2>  
  <button (click)="onClick()">Greet </button>
  {{greeting}}
  <button (click)="onClick1($event)">Greet </button>
  <button (click)="greeting='Welcome Boy'" >Greet </button>
  <br>
<input #myvalue type="text" >
<button (click)="PassMessage(myvalue.value)">Log</button> 
<br>
<br>
<input [(ngModel)]="name" type="text">
{{name}}
*/
// `
// <div *ngIf="displayName; then thenBlock; else elseBlock" > </div>

        
// <ng-template #thenBlock> 
// <h2>
//   Name is shown
// </h2>
// </ng-template>

// <ng-template #elseBlock> 
//   <h2>
//     Name is hidden
//   </h2>
// </ng-template>
  
//   `
  // <div [ngSwitch]="color">
  //   <div *ngSwitchCase= "'red'"> Red </div>
  //   <div *ngSwitchCase= "'blue'"> Blue</div>
  //   <div *ngSwitchCase= "'green'"> Green</div>
  //    <div *ngSwitchDefault>Pick again </div>
  // </div>

  // `
  //   <div *ngFor = "let color of colors; index as i; first as f; last as l; odd as o">
  //   <h2>{{f}} {{l}} {{i}} {{color}} {{o}}</h2>
  //   </div>
  //  `
    // <h2>{{parentData}} </h2>
    // `
    // <h2>{{name}} </h2>
    // <h2>{{name | lowercase}} </h2>
    // <h2>{{name | uppercase}} </h2>
    // <h2>{{message | titlecase}} </h2>
    // <h2>{{name | slice:3}} </h2>
    // <h2>{{styleClass | json}} </h2>
    // <h2> {{5.678 | number:'1.2-3'}} </h2>
    // <h2> {{5.678 | number:'3.4-5'}} </h2>
    // <h2> {{5.678 | number:'2.1-2'}} </h2>
    // <h2> {{5.678 | number:'1.2-3'}} </h2>
    // <h2> {{5.678 |currency: 'INR'}} </h2>
    // <h2> {{5.678 |currency: 'INR':'code'}} </h2>
    // <h2> {{date| date :'short'}} </h2>
    // <h2> {{date| date :'shortDate'}} </h2>
    // <h2> {{date| date :'shortTime'}} </h2>
    // <h2> {{date| date :'medium'}} </h2>
    
    `
    <button (click)="fireEvent()"> Press me</button>
       ` 

  ,styles: [
    `
      .text-success{
        color: green;
      }
      .text-danger {
        color : red;
      }
      .text-special{
        font-style:  italic;
      }
    `
  ]
})
export class TestComponent implements OnInit {
//you cannot do aasignments and document function
//PROPERTY VS ATTRIBUTE
//property binding works with only string
//use attribute binding like [id]='3'

  //@Input() public parentData;
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  //childEvent to be passed to test
  public colors = [ "red", 'yellow', 'blue', 'orange'];
   //public color = "yellow";
  public displayName=true;
  public name2 = "John";
  public date = new Date();
  public successClass="text-success";
  public hasError=true;
  public isSpecial= true;
  public greeting ="";
  public messageClass ={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special":this.isSpecial
  }
  public prop="orange";
  public fireEvent(){
    this.childEvent.emit('Hey Codeevolution');
  }
  public styleClass= {

    fontStyle :"italic",
    color :"blue"
  }
  constructor() { }

  public onClick(){
    alert("Hello ");
    this.greeting = "Welcome back";
  }
  
  public onClick1(event){
    alert(event.type);
    
  }
  /**
   * PassMessage
value   
*/

public message= "Hello bro Say no to internship";
  public PassMessage(value) {

    console.log(value);
  }
public hell=  window.location.href;
  ngOnInit() {
  }

}
