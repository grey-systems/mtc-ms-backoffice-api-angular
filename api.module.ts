import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { MtcAgentControllerService } from './api/mtcAgentController.service';
import { MtcCustomerControllerService } from './api/mtcCustomerController.service';
import { MtcNotesControllerService } from './api/mtcNotesController.service';
import { MtcTransferServiceControllerService } from './api/mtcTransferServiceController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    MtcAgentControllerService,
    MtcCustomerControllerService,
    MtcNotesControllerService,
    MtcTransferServiceControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
