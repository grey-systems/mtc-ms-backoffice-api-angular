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


export interface Agent { 
    /**
     * The agent's address
     */
    address?: string;
    /**
     * The agent's code
     */
    code?: string;
    /**
     * The agent's creation date
     */
    creationDate?: Date;
    /**
     * The agent's email
     */
    email?: string;
    /**
     * The agent's fax
     */
    fax?: string;
    /**
     * Agent belongs to a head office
     */
    headOffice?: boolean;
    /**
     * The agent's id
     */
    id?: number;
    /**
     * The agent's city corp id
     */
    idCity?: number;
    /**
     * The agent's company id
     */
    idCompany?: number;
    /**
     * The agent's mobile phone
     */
    mobilePhone?: string;
    /**
     * The agent's display name
     */
    name?: string;
    /**
     * The agent's network code
     */
    networkCode?: string;
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
    receiver?: boolean;
    /**
     * Agent can scan documents
     */
    scanDocuments?: boolean;
    /**
     * The agent's search type
     */
    searchType?: string;
    sender?: boolean;
    /**
     * The agent's status
     */
    status?: Agent.StatusEnum;
    /**
     * The agent's sub-status
     */
    subStatus?: Agent.SubStatusEnum;
}
export namespace Agent {
    export type StatusEnum = 'Active' | 'Inactive' | 'Sign_Out' | 'Pending';
    export const StatusEnum = {
        Active: 'Active' as StatusEnum,
        Inactive: 'Inactive' as StatusEnum,
        SignOut: 'Sign_Out' as StatusEnum,
        Pending: 'Pending' as StatusEnum
    };
    export type SubStatusEnum = 'Debt' | 'Not_Working' | 'Compliance';
    export const SubStatusEnum = {
        Debt: 'Debt' as SubStatusEnum,
        NotWorking: 'Not_Working' as SubStatusEnum,
        Compliance: 'Compliance' as SubStatusEnum
    };
}
