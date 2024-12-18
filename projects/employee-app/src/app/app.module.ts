import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSort, MatSortModule} from '@angular/material/sort';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeDetailsModule } from './components/employee-details/employee-details/employee-details.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from 'libraries/store/app.state';
import { HttpClientModule } from '@angular/common/http';
import { Effects } from 'libraries/store/effect';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeDetailsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatCardModule,
    MatTableModule, MatIconModule,
    MatPaginatorModule,MatSortModule,
    EffectsModule.forRoot([Effects]), // register effects.
    StoreModule.forRoot(appReducer),// registering our employeeReducer with the name of employeeReducerReg. We need to use "employeeReducerReg" in our app to call reducer
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
