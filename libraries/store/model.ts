export interface EmployeeAppModel{
    employeeId:string,
    address: string,
    email: string,
    firstName: string,
    lastName: string,
    mobile: string
}

// Project app
export interface ProjectAppModel  {
    projectId: string,
    projectName: string,
    description: string,
    
}

// Assign Project
export interface AssignProjectModel {
    employeeId:string,
    address: string,
    email: string,
    firstName: string,
    lastName: string,
    mobile: string,
    projectId: string,
    projectName: string,
    description: string,
}