export class IAssociated {
    ASSOCIATED_INFO!: {FIRST_NAME:string, ID: string, IDTYPE: string, LAST_NAME: string }
    ACCOUNT_NUMBER!: string;
    CUSTOMER_ASSOCIATED!: {CUSTOMER_INFO: {FIRST_NAME:string, ID: string, IDTYPE: string, LAST_NAME: string }, DIRECTION: {DESCRIPTION: string, HOUSE_NUMBER: string, ID: number, NEIGHBOORHOOD: string, STREET: string}, NATIONALITY: string};
  }
  