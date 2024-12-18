Host App:
    serve cmd : ng serve host-app --port 4300


Employee APP:
   serve cmd : ng serve employee-app --port 4201 


Project APP:
    serve cmd : ng serve project-app --port 4200 


Steps followed to create APP:
    1.Command used to create Workspace:
        ng new <workspace_name> --create-application=false 

    2.Create app under workspace:
        ng g application<host-app> --routing --style=css
        ng g application<mfe-app> --routing --style=css

    3.Install Module Federation MFE under each project (host and all microapps)
        ng add @angular-architects/module-federation <host-app / mfe-app> --port 4200

    4. In webpack.config.js (host-app) add the all mfe like below:
        remotes: {
          "employeeApp": "employeeApp@http://localhost:4201/remoteEntry.js",
          "projectApp": "projectApp@http://localhost:4200/remoteEntry.js",
      },

    5. Dont add step 4 in MFE app. Just comment it. Add  the module we need to expose under expose. 
         exposes: {
              './ProjectDetailsModule': './projects/project-app/src/app/components/project-details/project-details.module.ts',
          },

    6. Create modules in each MEF app the MFE project routing under that. for ref check (projects\employee-app\src\app\components\employee-details\employee-details\employee-details.module.ts)

    7. In host app , app-routing.module.ts file add the MFE routing like below
        const routes: Routes = [
                { path: '', redirectTo: '/employee-app', pathMatch: 'full' },
                {
                    path: 'employee-app',
                    loadChildren: () => {
                    return loadRemoteModule({
                        remoteEntry: EMPLOYEE_APP_URL,
                        remoteName: 'employeeApp',
                        exposedModule: './EmployeeDetailsModule',
                    }).then(m => m.EmployeeDetailsModule).catch(err => console.log(err));
                }
        ]

    8. Install Angular material:  
    - Directly install angular material will end up a error like "Bootstrap not call"
    - use the below commands to install angular material
    - ng g @angular-architects/module-federation:boot-async false --project employee-app
    - ng add @angular/material --project employee-app
    - ng g @angular-architects/module-federation:boot-async true --project employee-app
    - the package will get install .We may  get below error
        "Your project is not using the default builders for "build". The Angular Material schematics cannot 
        add a theme to the workspace configuration if the builder has been changed."
    - To resolve the error add the styles under angular.json styles like below 
     "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],

    9. Install Ngrx:
        -npm install @ngrx/store --save
        - In App.module (host-app) add 
            imports: [
            StoreModule.forRoot({})
            ]
        - In MFE app (app.module)
             imports:[
                    StoreModule.forRoot({employeeReducerReg:employeeReducer}),     // registering our employeeReducer with the name of employeeReducerReg. We need to use "employeeReducerReg" in our app to call reducer
            
            ]

Add Redux-devtool extension in chrome - it is used for debugging 

Install ngrx/store devtools package:
    - npm install @ngrx/store-devtools --save

Install ngrx effects:
    -ng add @ngrx/effects@latest

    

Steps to install Leaflet (map) library:
    - referred document
    "https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet"
    "https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-marker-service"
    "https://leafletjs.com/"

    - once  install leaflet run both host app and project app and open below url
         - MAP location marker URL - "http://localhost:4300/project-app/map"
         - MAP routing URL - "http://localhost:4300/project-app/map-routing"