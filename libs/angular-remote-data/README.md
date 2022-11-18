# angular-remote-data

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test angular-remote-data` to execute the unit tests.

## Create a publishable library

1. Execute `npx ng g @nrwl/angular:lib angular-remote-data --publishable --importPath @betcha/angular-remote-data`
2. Add source code to the generated library
3. Add build script `"build:angular-remote-data": "nx run angular-remote-data:build --configuration production && cd dist/libs/angular-remote-data && npm pack"` to package.json
4. Execute build script
