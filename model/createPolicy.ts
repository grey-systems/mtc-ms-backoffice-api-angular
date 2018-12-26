/**
 * mtc-backoffice-api
 * MTC Backoffice Composite Api
 *
 * OpenAPI spec version: 0.1.0-SNAPSHOT
 * Contact: developers@greysystems.eu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Range } from './range';


export interface CreatePolicy { 
    description?: string;
    ranges?: Array<Range>;
    dateFrom?: string;
    dateTo?: string;
    priority?: number;
}
