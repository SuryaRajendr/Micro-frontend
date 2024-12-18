import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // BrowserModule,
    RouterModule.forChild([
      {
        path:'',component:EmployeeDetailsComponent
      }
    ])
  ]
})
export class EmployeeDetailsModule { }
