import { AssignProjectModel, EmployeeAppModel, ProjectAppModel } from "./model"

export interface employeeListArray {
    addEmployee: EmployeeAppModel[];
  }

export const employeeList:employeeListArray={
    addEmployee:[]

}

export interface projectListArray {
  addProject: ProjectAppModel[];
}

export const projectList:projectListArray={
  addProject:[]
}

export interface assignprojectListArray {
  assignProject: AssignProjectModel[];
}

export const assignprojectList:assignprojectListArray={
  assignProject:[]
}







