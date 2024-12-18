import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectDetailsModule } from './components/project-details/project-details.module';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AssignProjectComponent } from './components/assign-project/assign-project.component';
import { StoreModule } from '@ngrx/store';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { appReducer } from 'libraries/store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AssignProjectListComponent } from './components/assign-project-list/assign-project-list.component';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from 'libraries/store/effect';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { MapsComponent } from './components/maps/maps.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LocationMarkerService } from './service/location-marker.service';
import { MapsRoutingComponent } from './components/maps/maps-routing/maps-routing.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    AddProjectComponent,
    AssignProjectComponent,
    ListProjectComponent,
    AssignProjectListComponent,
    MapsComponent,
    MapsRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectDetailsModule,
    BrowserAnimationsModule, 
    HttpClientModule,   
    MatInputModule, ReactiveFormsModule,
    MatTableModule,FormsModule,
    MatPaginatorModule,MatSortModule,MatSelectModule,
    MatAutocompleteModule,MatDialogModule,MatMenuModule,
    MatCardModule, 
    MatFormFieldModule,
    MatGridListModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    // ===================
    EffectsModule.forRoot([Effects]), // register effects.
    StoreModule.forRoot(appReducer), // register the reducer
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode, // Restrict extension to log-only mode
    }),

    // CRST requirement
    // NgxEchartsModule.forRoot({
    //   echarts: () => import('echarts')
    // }),
    // Maps
    // LeafletModule
    
   

  ],
  providers: [LocationMarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
