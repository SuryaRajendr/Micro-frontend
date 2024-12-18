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
    uniqueName: "projectApp",
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
      name: "projectApp",
      filename: "remoteEntry.js",
      exposes: {
        './ProjectDetailsModule': './projects/project-app/src/app/components/project-details/project-details.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "employeeApp": "http://localhost:4201/remoteEntry.js",

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
