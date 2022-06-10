import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  constructor(private userService: UserService) { }

  public users:any = []

  // users:any[]=[
  //   {id:101, name:"John", city:"EKM", salary:100, dob: new Date("12/02/1995")},
  //   {id:101, name:"Ramesh", city:"Delhi", salary:2000, dob: new Date("11/01/1990")},
  //   {id:101, name:"Joe", city:"PLKD", salary:1000, dob: new Date("05/03/1992")},
  //   {id:101, name:"John", city:"EKM", salary:1050, dob: new Date("04/04/1995")}
  // ]

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
