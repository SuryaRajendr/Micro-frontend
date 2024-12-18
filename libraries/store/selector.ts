import { createFeatureSelector, createSelector } from "@ngrx/store"
import { assignprojectListArray, employeeListArray, projectListArray } from "./state"


const getAllEmployeeState = createFeatureSelector<employeeListArray>('addEmployee');

export const getEmployeeList = createSelector(getAllEmployeeState, (state) => {
  return state.addEmployee;
});


const getAllProjectState = createFeatureSelector<projectListArray>('addProject');

export const getProjectList = createSelector(getAllProjectState, (state) => {
  return state.addProject;
});

const getAllAssignedProjectState = createFeatureSelector<assignprojectListArray>('assignProject');

export const getAssignProjectList = createSelector(getAllAssignedProjectState, (state) => {
  return state.assignProject;
});