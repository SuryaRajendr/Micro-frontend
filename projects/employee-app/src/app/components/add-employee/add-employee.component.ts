import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {  ADD_EMPLOYEE_Detail } from 'libraries/store/action';
import { AppState } from 'libraries/store/app.state';
import { EmployeeAppModel } from 'libraries/store/model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  registerForm: any;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      address: ['', Validators.required]
    });
  }

  /*
  ** Mobile number key press
  */

  keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  /**
   * 
   * Add employee 
   */
  addEmployee() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const addEmployee: EmployeeAppModel = {
      employeeId: this.registerForm.value.employeeId,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      mobile: this.registerForm.value.mobile,
      address: this.registerForm.value.address
    }
    this.store.dispatch(ADD_EMPLOYEE_Detail({addEmployee}))// dispatching ADD_EMPLOYEE() action
  }
}
