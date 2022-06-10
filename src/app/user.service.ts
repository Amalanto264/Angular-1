import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    return[
      {id:101, name:"John", city:"EKM", salary:100},
      {id:101, name:"Ramesh", city:"Delhi", salary:2000},
      {id:101, name:"Joe", city:"PLKD", salary:1000},
      {id:101, name:"John", city:"EKM", salary:1050}
    ]}
  
  getData(){
    return[
      {id:101, name:"John", city:"EKM", salary:100, dob: new Date("12/02/1995")},
      {id:101, name:"Ramesh", city:"Delhi", salary:2000, dob: new Date("11/01/1990")},
     {id:101, name:"Joe", city:"PLKD", salary:1000, dob: new Date("05/03/1992")},
     {id:101, name:"John", city:"EKM", salary:1050, dob: new Date("04/04/1995")}

    ]
  }
}
