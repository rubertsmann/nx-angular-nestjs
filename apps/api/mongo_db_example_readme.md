# How to I created this example. nx angular nestjs mongo db

1. Searched for examples and libs
2. Decided between typeorm or mongoose implementation. I chose typeorm, to be more flexible when changing db's. ( In Java/Spring world this is close to jpa/hibernate)
3. Then I looked into this project https://github.com/nestjs/nest/tree/master/sample/13-mongo-typeorm I used all package.json relevant to typeorm and mongo and copied src/photo over. Which contains all 'repository pattern' files
4. Then in the frontend project I implemented the newly created @Get() Endpoint.
5. After that I created a post()/save endpoint and extracted then created model/entity/interface in the frontend/backend shared lib libs/api-interfaces/src/lib/api-interfaces.
6. Then in visual studio code - command + shift + p -> create .devcontainer -> then i chose node.js & mongo db default image -> https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node-mongo/.devcontainer/docker-compose.yml
7. .devcontainer -> add -> "postConstruct: "npm install"
8. in package.json I added "start:full": "nx run-many --target=serve --projects=api,basic-project --parallel=2" for easier startup
9. In VsCode I started the project in a .devcontainer with ctrl + shift + p -> reopen in devcontainer without cache.