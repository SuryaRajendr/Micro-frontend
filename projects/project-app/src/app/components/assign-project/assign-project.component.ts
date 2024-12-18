import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable, Subscription, filter } from 'rxjs';
import { AssignProjectModel, EmployeeAppModel, ProjectAppModel } from 'libraries/store/model';
import { AppState } from 'libraries/store/app.state';
import { getEmployeeList, getProjectList } from 'libraries/store/selector';
import { ASSIGN_PROJECT_Detail } from 'libraries/store/action';

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css']
})
export class AssignProjectComponent {

  assignForm: any;
  submitted = false;
  selectedValue: string = '';
  getProjectList$!: Observable<ProjectAppModel[]>;
  getEmployeeList$!: Observable<EmployeeAppModel[]>;
  projectList:any;
  employeeList : any;
  employeeDetails:any;
  projectDetails:any;

  constructor(private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) { }
  ngOnInit() {
    this.assignForm = this.formBuilder.group({
      projectId: ['', Validators.required],
      employeeId: ['', Validators.required]
    });

    this.getProjectDetails();
    this.getEmployeeDetails();

  }

  /**
   * Get Project Details
   */
  getProjectDetails() {
    this.getProjectList$ = this.store.select(getProjectList)    
  }

  /**
   * Get Employee Details
   */
  getEmployeeDetails() {
    this.getEmployeeList$ = this.store.select(getEmployeeList)
  }
  /**
 * 
 * Assign Project
 */
  assignProject() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.assignForm.invalid) {
      return;
    }
    this.getProjectList$.subscribe((data)=>{
      this.projectDetails =  data.filter(list=>list.projectId === this.assignForm.value.projectId)
    })

    this.getEmployeeList$.subscribe((data)=>{
      this.employeeDetails= data.filter(list=> list.employeeId=== this.assignForm.value.employeeId)
    })
    const assignProject: AssignProjectModel = {
      employeeId: this.employeeDetails[0].employeeId,
      firstName: this.employeeDetails[0].firstName,
      lastName: this.employeeDetails[0].lastName,
      email: this.employeeDetails[0].email,
      mobile: this.employeeDetails[0].mobile,
      address: this.employeeDetails[0].address,
      projectId: this.projectDetails[0].projectId,
      projectName: this.projectDetails[0].projectName,
      description: this.projectDetails[0].description,

    }
    this.store.dispatch(ASSIGN_PROJECT_Detail({assignProject}))// dispatching ADD_EMPLOYEE() action
  }
}