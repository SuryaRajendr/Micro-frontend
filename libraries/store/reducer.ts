import { createReducer,on } from "@ngrx/store";
import { ADD_EMPLOYEE_Detail, ADD_PROJECT_Detail, ASSIGN_PROJECT_Detail } from "./action";
import {  assignprojectList, employeeList, projectList } from "./state";

/**
 * Employee App Reducer
 */
const EmployeeAppReducer = createReducer(
    employeeList,
  
    on(ADD_EMPLOYEE_Detail,(state,payload)=>{
        let data = { ...payload.addEmployee };
       return{
          ...state,
          addEmployee: [...state.addEmployee,data]
       }
    })
)
export function employeeReducer(state: any, action: any) {
    return (EmployeeAppReducer(state, action))
}

/**
 * Project App Reducer
 */

const ProjectAppReducer = createReducer(
    projectList,
  
    on(ADD_PROJECT_Detail,(state,payload)=>{
        let data = { ...payload.addProject };
       return{
          ...state,
          addProject: [...state.addProject,data]
       }
    })
)
export function ProjectReducer(state: any, action: any) {
    return (ProjectAppReducer(state, action))
}

/**
 * Assign Project  Reducer
 */

const AssignProjectReducer = createReducer(
    assignprojectList,
  
    on(ASSIGN_PROJECT_Detail,(state,payload)=>{
        let data = { ...payload.assignProject };
       return{
          ...state,
          assignProject: [...state.assignProject,data]
       }
    })
)
export function AssignReducer(state: any, action: any) {
    return (AssignProjectReducer(state, action))
}