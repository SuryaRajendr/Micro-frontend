import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmployeeAppModel } from 'libraries/store/model';
import { getEmployeeList } from 'libraries/store/selector';
import { AppState } from 'libraries/store/app.state';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {

  displayedColumns: string[] = ['employeeId', 'firstName', 'lastName', 'email', 'mobile', 'address'];
  getEmployeeList$!: Observable<EmployeeAppModel[]>;
  employeeList : any;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>
  ) { }
  ngOnInit() {
    this.getEmployeeList$ = this.store.select(getEmployeeList)
    this.employeeList = this.getEmployeeList$
   
  }
  searchByName(name: string) {
    this.getEmployeeList$.subscribe((data)=>{
      console.log("data",data);
      this.employeeList= data.filter(list=> list.firstName.includes(name))
    })
  }
}

