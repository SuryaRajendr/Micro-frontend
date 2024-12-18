const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "employeeApp",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      // library: { type: "module" },

      // For remotes (please adjust)
      name: "employeeApp",
      filename: "remoteEntry.js",
      exposes: {
        './EmployeeDetailsModule': './projects/employee-app/src/app/components/employee-details/employee-details/employee-details.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "hostApp": "http://localhost:4200/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
       
        "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // "@angular/platform-browser": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // "@angular/cdk": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      
        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
