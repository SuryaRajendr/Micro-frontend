import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeeService } from "projects/employee-app/src/app/service/employee.service";
import { ADD_EMPLOYEE_Detail, ADD_PROJECT_Detail, ASSIGN_PROJECT_Detail, apiCallFail, apiCallSuccess } from "./action";
import { exhaustMap, map, mergeMap } from "rxjs/operators";
import { ProjectService } from "projects/project-app/src/app/service/project.service";


@Injectable()
export class Effects {
    constructor(private actions$: Actions, private employeeService: EmployeeService, private projectService: ProjectService) { }

    addEmployee$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ADD_EMPLOYEE_Detail), //ofType is a filter in ngrx. Used to filter an Observables of the required actions
            mergeMap((action) => {
                return this.employeeService.addEmployee(action).pipe(
                    map((data) => {
                        return apiCallSuccess();
                    })
                );
            })
        );
    });

    addProject$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ADD_PROJECT_Detail), //ofType is a filter in ngrx. Used to filter an Observables of the required actions
            mergeMap((action) => {
                return this.projectService.addProject(action).pipe(
                    map((data) => {
                        return apiCallSuccess();
                    })
                );
            })
        );
    });

    assignProject$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ASSIGN_PROJECT_Detail), //ofType is a filter in ngrx. Used to filter an Observables of the required actions
            mergeMap((action) => {
                return this.projectService.assignProject(action).pipe(
                    map((data) => {
                        return apiCallSuccess();
                    })
                );
            })
        );
    });

}