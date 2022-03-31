export class IAccount {
  ACCOUNT_COIN!: {ACCOUNT_NUMBER: string, BALANCE: number, ID: string, NAME: string};
  ACCOUNT_TYPE!: string;
  BALANCE!: number;
  BANK_OWNER!: {ACCOUNT_BALANCE: number, ACCOUNT_NUMBER: string, DESCRIPTION: string, ID: string, NAME: string}
  ID!: string;
  OWNER!: {CUSTOMER_INFO: {FIRST_NAME:string, ID: string, IDTYPE: string, LAST_NAME: string }, DIRECTION: {DESCRIPTION: string, HOUSE_NUMBER: string, ID: number, NEIGHBOORHOOD: string, STREET: string}, NATIONALITY: string};
  USE_MODE!: string
}
