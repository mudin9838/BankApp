export type Tag = {
  id: string;
  name: string;
};

export type Account = {
  id: string;
  number: number;
  name: string;
  balance: number;
  accountType: string;
};

export type Transaction = {
  id: string;
  amount: number;
  transactionType: string;
  dateTime: string;
};
