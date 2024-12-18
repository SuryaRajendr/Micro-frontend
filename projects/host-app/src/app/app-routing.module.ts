import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const EMPLOYEE_APP_URL = 'http://localhost:4201/remoteEntry.js';
const PROJECT_APP_URL  = 'http://localhost:4200/remoteEntry.js';

const routes: Routes = [
  { path: '', redirectTo: '/employee-app', pathMatch: 'full' },
  {
    path: 'employee-app',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: EMPLOYEE_APP_URL,
        remoteName: 'employeeApp',
        exposedModule: './EmployeeDetailsModule',
      }).then(m => m.EmployeeDetailsModule).catch(err => console.log(err));
    }

  },
  {
    path: 'project-app',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: PROJECT_APP_URL,
        remoteName: 'projectApp',
        exposedModule: './ProjectDetailsModule',
      }).then(m => m.ProjectDetailsModule).catch(err => console.log(err));
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
