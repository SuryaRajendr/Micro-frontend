import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ADD_PROJECT_Detail } from 'libraries/store/action';
import { AppState } from 'libraries/store/app.state';
import { ProjectAppModel } from 'libraries/store/model';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  registerForm: any;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>
   ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      projectId: ['', Validators.required],
      projectName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addProject() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const addProject: ProjectAppModel = {
      projectId: this.registerForm.value.projectId,
      projectName: this.registerForm.value.projectName,
      description: this.registerForm.value.description,
    }
    this.store.dispatch(ADD_PROJECT_Detail({addProject})) // dispatching ADD_PROJECT_Detail() action
  }
}

