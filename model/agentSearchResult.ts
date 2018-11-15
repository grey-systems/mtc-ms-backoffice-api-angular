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


export interface AgentSearchResult { 
    /**
     * The agent's address
     */
    address?: string;
    /**
     * The agent's code
     */
    code?: string;
    /**
     * The agent's id
     */
    id?: number;
    /**
     * The agent's city corp id
     */
    idCity?: number;
    /**
     * The agent's mobile phone
     */
    mobilePhone?: string;
    /**
     * The agent's display name
     */
    name?: string;
    /**
     * Agent belongs to an owned company
     */
    ownedOffice?: boolean;
    /**
     * The agent's phone
     */
    phone?: string;
    /**
     * The agent's postal code
     */
    postalCode?: string;
    /**
     * The agent's status
     */
    status?: AgentSearchResult.StatusEnum;
}
export namespace AgentSearchResult {
    export type StatusEnum = 'Active' | 'Inactive' | 'Sign_Out' | 'Pending';
    export const StatusEnum = {
        Active: 'Active' as StatusEnum,
        Inactive: 'Inactive' as StatusEnum,
        SignOut: 'Sign_Out' as StatusEnum,
        Pending: 'Pending' as StatusEnum
    };
}
