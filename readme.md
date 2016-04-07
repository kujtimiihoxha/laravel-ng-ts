Laravel Angular Typescript starter.

**WORK IN PROGRESS!!**
## Installation
``` bash
npm install -g yo
npm install -g generator-laravel-ng-ts
 ```
## Create the project 
```bash
mkdir my-project
cd my-project
yo laravel-ng-ts
```
## Using laravel-ng-ts generators
- To se how you can use the generator to auto-generate components, routes, etc. look at
 [kujtimiihoxha/generator-laravel-ng-ts](https://github.com/kujtimiihoxha/generator-laravel-ng-ts).
## Running the app
Open two terminal windows and navigate to the folder where you 
project is saved , than in one terminal window run:
```bash
gulp && gulp watch
```
and the other : 
```bash
php artisan serve
```

after both tasks are running go to 
```
http://localhost:8000
```
## Folder Structure 

#### Backend

- The backend folder structure is the same as the standard laravel folder structure.

#### Frontend

- All the frontend files are in the  ```client/``` , ```gulp``` and ```theme``` folders.

##### Client folder :

```
client/
    |- app/                                      --> source code folder
    |   |- components/                              --> angular components
    |   |- core/                                    --> core files(config,run,core-services etc.)
    |   |   |- config/                                  --> core configurations folder
    |   |   |   |- core.config.ts                           --> some necessary configurations
    |   |   |   |- loading-bar.config.ts                    --> loading bar configurations
    |   |   |   |- satellizer.config.ts                     --> satellizer cofigurations
    |   |   |- constants/                               --> core constants folder
    |   |   |   |- core.constant.ts                         --> some necessary configurations
    |   |   |- models/                                  --> core models folder
    |   |   |   |- auth.model.ts                            --> login and register user models
    |   |   |   |- base.model.ts                            --> base model that all resource models inherit
    |   |   |- resources/                               --> core resources folder
    |   |   |   |- base.resource.ts                         --> base resource that all resources inherit
    |   |   |- run/                                     --> core run configurations folder
    |   |   |   |- core.run.ts                         --> base resource that all resources inherit
    |   |   |- services/                                --> core services
    |   |   |   |- api.service.ts                         --> setup restangular api to work with jwt and our api
    |   |   |   |- auth.service.ts                        --> authentication service to handle user session, login, logout, register
    |   |- models/                                  --> models used by the resources to get objects from the api
    |   |- resources/                               --> resources to comunicate with the api
    |   |- routes/                                  --> app routes
    |   |- services/                                --> app services
    |   |- app.decorators.ts                        --> app decorators
    |   |- app.main.ts                              --> app main file
    |- fonts/                                    -->fonts
    |- images/                                   -->images
```

