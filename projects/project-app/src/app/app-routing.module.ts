import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignProjectComponent } from './components/assign-project/assign-project.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
