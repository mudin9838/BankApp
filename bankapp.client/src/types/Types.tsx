export type Tag = {
  map(
    arg0: (tag: any) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
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

export enum PageEnum {
  list,
  add
}
