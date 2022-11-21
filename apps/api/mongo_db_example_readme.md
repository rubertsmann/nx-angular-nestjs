# How to I created this example. nx angular nestjs mongo db

Why I decided to use Typeorm with Mongo.
-> Typeorm or mongoose
I decided to go with Typeorm because it supports mssql/mysql/mongodb. This approach is more flexible.
Typeorm with the repository pattern is very close to spring with jpa/hibernate.

## Documentation and Resources
1. Typeorm: https://docs.nestjs.com/techniques/database
2. NestJs Example Projects: https://github.com/nestjs/nest/tree/master/sample/13-mongo-typeorm
3. https://nx.dev/angular-tutorial/01-create-application
4. https://nx.dev/packages/angular
5. https://nx.dev/nx/run-many

## Setting Up the Environment

### Devcontainer
Requirements:
1. Git installed
2. Visual Studio Code Installed with RemoteDevContainer 
3. Docker installed


1. Create folder
2. git init
3. cd into folder


1. Open Visual Studio Code
3. open command window -> type -> create devcontainer -> chose node.js & mongo db default image (14-bullseye). https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node-mongo/.devcontainer/docker-compose.yml -> enter -> visual code now opens the newly created .devcontainer project.

### NX < 15.0.0
1. terminal
2. npx create-nx-workspace@14.0.0 -> choose 'angular-nest'

### NX >= 15.0.0 angular nestjs project
Requirement:
- setup devcontainer, open decontainer in visual studio code.
1. terminal
2. npm i nx -g
3. new terminal
4. npx create-nx-workspace my-workspace --preset=angular -> package-based -> choose repository customname -> npm install -D @nrwl/angular -> nx g @nrwl/angular:app appName

Preparing the generated Projects:
1. open package.json
2. add to "scripts" ->
 ``` "start:full": "nx run-many --target=serve --projects=* --parallel=2" ```
4. open terminal -> 
    ``` npm run start:full ```
5. Open app.component.html -> add the line "<div>Message: {{ hello$ | async | json }}</div>"
6. Open app.component.ts -> add the line "hello$ = this.http.get<any>('/api/hello');" below export. -> add "constructor(private http: HttpClient) { }" Resolve imports
7. Open app.module.ts -> add "HttpClientModule" to the import.
8. Create new file "proxy.conf.json" in "frontend basefolder" and add ->
``` 
  {
    "/api": {
      "target": "http://localhost:3333",
      "secure": false
    }
  }
```
  
8. Open project.json and add 
```
      "options": {
        "proxyConfig": "apps/app-name/proxy.conf.json"
      },
```
  to "serve"
9. Open localhost:4200 -> Should now display Message: { "message": "Welcome to nestapp!" }

### Adding Mongo and Typeorm Support
1. open package.json -> add
```
  depdencies -> 
  "@nestjs/typeorm": "9.0.0",
    "mongodb": "3.6.0",
    "rimraf": "3.0.2",
    "typeorm": "0.3.7"
```
2. Copy the Repository Folder from this project https://github.com/nestjs/nest/tree/master/sample/13-mongo-typeorm
3. Create a post()/get() similar to the default one, but connect it to the repository.
4. Open app.module.ts and add
  ```    
  TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test',
      entities: [Photo],
      synchronize: true,
    }),
    PhotoModule,
```
  to the imports.
5. Open the app.compontent.html and duplicate the get logic to point to the newly created endpoints.
6. Now you have a crud ready app.
