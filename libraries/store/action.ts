import { createAction, props } from "@ngrx/store";
import { AssignProjectModel, EmployeeAppModel, ProjectAppModel } from "./model";

export const ADD_EMPLOYEE_Detail =  createAction(
    'ADD_EMPLOYEE_Detail',
    props<{addEmployee: EmployeeAppModel}>()

)

export const ADD_PROJECT_Detail =  createAction(
    'ADD_PROJECT_Detail',
    props<{addProject:ProjectAppModel }>()

)

export const ASSIGN_PROJECT_Detail =  createAction(
    'ASSIGN_PROJECT_Detail',
    props<{assignProject: AssignProjectModel}>()

)

export const apiCallSuccess = createAction('API SUCCESS');

export const apiCallFail = createAction('API FAIL');