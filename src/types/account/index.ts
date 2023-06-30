export type IAccountResponse = {
  _id: string;
  id: number;
  name: string;
  default: boolean;
  funds: number;
  profitLoss: number;
  accountType: string;
  isDemo: boolean;
  currency: string;
};

export type IAccountTypeResponse = {
  _id: string;
  id: string;
  title: string;
};

export type IAccount = Omit<IAccountResponse, '_id'>;
export type IAccountType = Omit<IAccountTypeResponse, '_id'>;
