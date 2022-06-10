import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserdataComponent } from './userdata/userdata.component';
import { UserComponent } from './user/user.component';
import { Error404Component } from './error404/error404.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes:Routes=[
  {path:'',redirectTo:"userdata", pathMatch:"full" },
  {path:'userdata', component:UserdataComponent},
  {path:'user', component:UserComponent},
  {path:'userdetails/:id', component:UserdetailsComponent},
  {path:'**', component:Error404Component}
]


@NgModule({

  
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
