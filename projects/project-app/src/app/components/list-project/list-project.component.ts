import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ProjectAppModel } from 'libraries/store/model';
import { getProjectList } from 'libraries/store/selector';
import { AppState } from 'libraries/store/app.state';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  displayedColumns: string[] = ['projectId', 'projectName', 'description'];
  getProjectList$!: Observable<ProjectAppModel[]>;
  projectList:any;

  constructor(private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) { }
  ngOnInit() {
    this.getProjectList$ = this.store.select(getProjectList)
    this.projectList = this.getProjectList$
    
  }
  searchByName(name: string) {
    this.getProjectList$.subscribe((data)=>{
      console.log("data",data);
      this.projectList= data.filter(list=> list.projectName.includes(name))
    })
  }
  
}
