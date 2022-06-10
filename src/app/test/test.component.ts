import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html', 
//   `<h1>this is a test page</h1>
//   <br />
//   <input [(ngModel)]="name" type="text">
//   <br />
//   {{name}}
//   <br />
//   <div *ngIf = "displaycontent; then thenblock; else elseblock">
//   </div>
//   <ng-template #thenblock>
//   <h2> if new testing </h2>
//   </ng-template>
//   <ng-template #elseblock>
//   <h2> testing is removed </h2>
//   </ng-template>
  
//   <div *ngFor="let fruit of fruits; index as i; odd as o "> 
//   <h2> {{o}} {{i+1}} {{fruit}} </h2>
//   </div>

//   <input type="text" [(ngModel)] = num >
// {{num}}

//   <div [ngSwitch] = "num"> 
//       <div *ngSwitchCase="'1'">ONE</div>
//       <div *ngSwitchCase="'2'">TWO</div>
//       <div *ngSwitchCase="'3'">THREE</div>
//       <div *ngSwitchCase="'4'">FOUR</div>
//       <div *ngSwitchDefault>Invalid Number</div>
//   </div >


//   `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name:string ="";

  public displaycontent = true;

  @Input() parentData:any;

  @Output() public childEvent = new EventEmitter();

  public num:number = 0;

  public fruits = ["Apple","Orange","Grape"]

  constructor() { }

  ngOnInit(): void {
  }

  fireMe(){
    this.childEvent.emit('Hello Angular')
  }

}
