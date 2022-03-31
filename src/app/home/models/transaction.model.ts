export class ITransaction {
    ID!: string;
    AMOUNT!: string;
    STATE!: string;
    COMMISSION!: number;
    AMOUNT_LIMIT!: number;
    TRANSACTION_COIN!: {ACCOUNT_NUMBER: string, BALANCE: number, ID: string, NAME: string};
    ACCOUNT_TYPE!: string;
    BALANCE!: number;
    BANK_OWNER!: {ACCOUNT_BALANCE: number, ACCOUNT_NUMBER: string, DESCRIPTION: string, ID: string, NAME: string};
    ORIGIN_ACCOUNT!: {ID:string,owner:{CUSTOMER_INFO: {FIRST_NAME:string, ID: string, IDTYPE: string, LAST_NAME: string }, DIRECTION: {DESCRIPTION: string, HOUSE_NUMBER: string, ID: number, NEIGHBOORHOOD: string, STREET: string}, NATIONALITY: string},ACCOUNT_TYPE:string,ACCCOUNT_COIN:{ACCOUNT_NUMBER: string, BALANCE: number, ID: string, NAME: string},BALANCE:number,USE_MODE:string,BANK_OWNER:{ACCOUNT_BALANCE: number, ACCOUNT_NUMBER: string, DESCRIPTION: string, ID: string, NAME: string}};
    TARGET_ACCOUNT!: {ID:string,owner:{CUSTOMER_INFO: {FIRST_NAME:string, ID: string, IDTYPE: string, LAST_NAME: string }, DIRECTION: {DESCRIPTION: string, HOUSE_NUMBER: string, ID: number, NEIGHBOORHOOD: string, STREET: string}, NATIONALITY: string},ACCOUNT_TYPE:string,ACCCOUNT_COIN:{ACCOUNT_NUMBER: string, BALANCE: number, ID: string, NAME: string},BALANCE:number,USE_MODE:string,BANK_OWNER:{ACCOUNT_BALANCE: number, ACCOUNT_NUMBER: string, DESCRIPTION: string, ID: string, NAME: string}};
  }
  