## @greysystems-angular/mtc-mtc-ms-backoffice-api

[![Build Status](https://travis-ci.org/grey-systems/mtc-ms-backoffice-api-angular.svg?branch=develop)](https://travis-ci.org/grey-systems/mtc-ms-backoffice-api-angular)

### Generate Code from swagger definitions

This project contains an usefull script to update the angular code using the swagger json definition published in an endpoint.

Currently supports only generate code from `vader` integration server using the script `./refresh-api-vader.sh` contained in the root of the project

### Building

To install the required dependencies and to build the typescript sources run:

```
npm install
npm run build
```

### Publishing

The project is published by travis.ci

### consuming

Navigate to the folder of your consuming project and run one of next commands.

_published:_

```
npm install @greysystems-angular/mtc-mtc-ms-backoffice-api@{version} --save
```

#### General usage

In your Angular project:

```
// without configuring providers
import { ApiModule } from '@greysystems-angular/mtc-mtc-ms-backoffice-api';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        ApiModule,
        // make sure to import the HttpClientModule in the AppModule only,
        // see https://github.com/angular/angular/issues/20575
        HttpClientModule
    ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
// configuring providers
import { ApiModule, Configuration, ConfigurationParameters } from '@greysystems-angular/mtc-mtc-ms-backoffice-api';

export function apiConfigFactory (): Configuration => {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
  }
  return new Configuration(params);
}

@NgModule({
    imports: [ ApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
import { DefaultApi } from '@greysystems-angular/mtc-mtc-ms-backoffice-api';

export class AppComponent {
	 constructor(private apiGateway: DefaultApi) { }
}
```

Note: The ApiModule is restricted to being instantiated once app wide.
This is to ensure that all services are treated as singletons.

#### Using multiple swagger files / APIs / ApiModules

In order to use multiple `ApiModules` generated from different swagger files,
you can create an alias name when importing the modules
in order to avoid naming conflicts:

```
import { ApiModule } from 'my-api-path';
import { ApiModule as OtherApiModule } from 'my-other-api-path';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    ApiModule,
    OtherApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule
  ]
})
export class AppModule {

}
```

### Set service base path

If different than the generated base path, during app bootstrap, you can provide the base path to your service.

```
import { BASE_PATH } from '@greysystems-angular/mtc-mtc-ms-backoffice-api';

bootstrap(AppComponent, [
    { provide: BASE_PATH, useValue: 'https://your-web-service.com' },
]);
```

or

```
import { BASE_PATH } from '@greysystems-angular/mtc-mtc-ms-backoffice-api';

@NgModule({
    imports: [],
    declarations: [ AppComponent ],
    providers: [ provide: BASE_PATH, useValue: 'https://your-web-service.com' ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

#### Using @angular/cli

First extend your `src/environments/*.ts` files by adding the corresponding base path:

```
export const environment = {
  production: false,
  API_BASE_PATH: 'http://127.0.0.1:8080'
};
```

In the src/app/app.module.ts:

```
import { BASE_PATH } from '@greysystems-angular/mtc-mtc-ms-backoffice-api';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```
