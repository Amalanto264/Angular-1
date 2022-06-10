import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  myname="Amal Anto";

  testid = "idname";
  isDisabled = true;

  obj = {
    name: "Amal",
    age:31
  }

  arr = ["Rani "," Amal "," Ajish"]

  constructor() { }

  ngOnInit(): void {
  }

  getName(){
    return this.myname;
  }

  onclick(){
    this.isDisabled = !this.isDisabled;
    
  }

}
