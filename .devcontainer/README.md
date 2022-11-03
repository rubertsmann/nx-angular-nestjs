# Developing inside a Container

 Use a Docker container as your development environment using vscode.
 This setup will install all necessary tools and IDE extensions you need to develop, run and debug the Angular-Frontend.

 ## Environment Setup
A detailed "Getting started" guide can be found [here](https://code.visualstudio.com/docs/remote/containers#_getting-starteds).

**Note:** It is recommended to use `Remote-Containers: Clone Repository in Container Volume` when cloning the repository.

 ## Project Specific Setup
 * open integrated terminal in vscode: open Command Palette `Ctrl+Shift+P` -> `create new Terminal` (opens a terminal connected to your container)
 * navigate to `frontend` folder using `cd frontend`
 * In order to install aviatar specific npm packages you first need to run `npm login` and enter your [artifactory](https://lht.app.lufthansa.com/artifactory/webapp/#/home) credentials.
 * install npm packages `npm install`
 * run `npm run generate:apis`
 * start the project using `npm run start:remotedev`

 ## Further reading
 * Docs for Visual Studio Code [Remote - Containers](https://code.visualstudio.com/docs/remote/containers)