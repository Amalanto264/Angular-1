import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  public users:any = []

  ngOnInit(): void {
    this.users = this.userService.getData();
  }

}

//create the service 
//register the service
//inject theservice in the componentRef
