import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'libraries/store/app.state';
import { AssignProjectModel } from 'libraries/store/model';
import { getAssignProjectList } from 'libraries/store/selector';
import { assignprojectListArray } from 'libraries/store/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assign-project-list',
  templateUrl: './assign-project-list.component.html',
  styleUrls: ['./assign-project-list.component.css']
})
export class AssignProjectListComponent {
  displayedColumns: string[] = ['employeeId', 'firstName', 'lastName', 'email','projectId', 'projectName'];
  getassignProjectList$!: Observable<AssignProjectModel[]>;
  assignprojectList:any;
  constructor(private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) { }
  ngOnInit() {
    this.getassignProjectList$ = this.store.select(getAssignProjectList)
    this.assignprojectList = this.getassignProjectList$
    
  }
  searchByName(name: string) {
    this.getassignProjectList$.subscribe((data)=>{
      console.log("data",data);
      this.assignprojectList= data.filter(list=> list.projectName.includes(name))
    })
  }
}
