Laravel Angular Typescript starter.

**WORK IN PROGRESS!!**
## Installation
``` 
npm install -g yo
npm install -g generator-laravel-ng-ts
 ```
## Create the project 
```
mkdir my-project
cd my-project
yo laravel-ng-ts
```
## Running the app
Open two commandline  windows and in one run:
```
gulp && gulp watch
```
and the other : 
```
php artisan serve
```

after both tasks are running go to 
```
http://localhost:8000
```

## Create Components
```
yo laravel-ng-ts:component [component-name]
```
- component-name : Can be 'camelCase' or 'kebab-case'

Example:
```
yo laravel-ng-ts my-custom-component
```

will create the following folders/files
```
-->client
------>app
--------->components
------------->my-custom-component
------------------>my-custom-component.template.html
------------------>my-custom-component.component.ts
------------------>my-custom-component.scss
```

## Create Routes
```
yo laravel-ng-ts:route [state] [route-url] [route-name] [path](optional)
```
- state : the route state ex. ```public.home```
- route-url: the browser url  ex. ```/home```
- route-name: the name of the route ex. ```home```
- path: the path in which the route files will be stored ex. ```layout-public/``` this will 
tell the generator to save the files under ```client/app/routes/layout-public/[route-name]```, by default all routes 
will be saved under ```client/app/routes/[route-name]```

Example:

```
yo laravel-ng-ts:route  public.home /home home /layout-public/
```
will create the following folders/files

```
-->client
------>app
--------->routes
------------->layout-public
------------------>home
---------------------->home.route.ts
---------------------->home.template.html
```
