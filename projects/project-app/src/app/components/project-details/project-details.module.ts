import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';
import { AssignProjectComponent } from '../assign-project/assign-project.component';
import { MapsComponent } from '../maps/maps.component';
import { MapsRoutingComponent } from '../maps/maps-routing/maps-routing.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MatSelectModule,
    RouterModule.forChild([
      {
        path:'',component:ProjectDetailsComponent
      },
      {
        path:'assign-project',component:AssignProjectComponent
      },
      {
        path:'map',component:MapsComponent
      },
      {
        path:'map-routing',component:MapsRoutingComponent
      }
    ])
  ]
})
export class ProjectDetailsModule { }
