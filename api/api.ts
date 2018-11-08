export * from './mtcAgentController.service';
import { MtcAgentControllerService } from './mtcAgentController.service';
export * from './mtcCustomerController.service';
import { MtcCustomerControllerService } from './mtcCustomerController.service';
export * from './mtcNotesController.service';
import { MtcNotesControllerService } from './mtcNotesController.service';
export * from './mtcTransferServiceController.service';
import { MtcTransferServiceControllerService } from './mtcTransferServiceController.service';
export const APIS = [MtcAgentControllerService, MtcCustomerControllerService, MtcNotesControllerService, MtcTransferServiceControllerService];
