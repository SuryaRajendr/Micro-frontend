import { assignprojectListArray, employeeListArray, projectListArray } from "./state";

import {AssignReducer, ProjectReducer, employeeReducer  } from "./reducer";

export interface AppState{
    addEmployee:employeeListArray,
    addProject : projectListArray
    assignProject: assignprojectListArray
}

export const appReducer = {
    addEmployee: employeeReducer,
    addProject: ProjectReducer,
    assignProject:AssignReducer
}