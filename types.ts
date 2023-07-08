export interface IVault {
  id: string;
  name: string;
  owners: number;
  balance: number;
  avatar?: string;
  currency: string;
}

export type ITransactionBase = {
  id: string;
  createdAt: string;
  amount: number;
  currency: string;
  author: string;
  vaultId: string;
  to: string;
  signers: string[];
  status: ITransactionStatus;
  rejectedBy: string[];
};

export type IPendingOrFailedTransaction = ITransactionBase & {
  status: ITransactionStatus.Failed | ITransactionStatus.Pending;
};

export type ICompletedTransaction = ITransactionBase & {
  status: ITransactionStatus.Completed;
  executedAt: string;
};

export type ITransaction = IPendingOrFailedTransaction | ICompletedTransaction;

// Use this transaction type and extend it to support a status Completed which has an additional field
// called executedAt

// export type ITransaction = {
//   id: string;
//   createdAt: string;
//   amount: number;
//   currency: string;
//   author: string;
//   vaultId: string;
//   to: string;
//   signers: string[];
//   status: ITransactionStatus.Failed | ITransactionStatus.Pending | ITransactionStatus.Completed;
//   executedAt?: string;
// }

export interface ITransactionForm {
  amount: number;
  currency: string;
  to: string;
}

export enum Routes {
  Home = '/',
  Vaults = '/vaults',
  VaultDashboard = '/vaults/:id',
  VaultTransactions = '/vaults/:id/transactions',
  VaultOwners = '/vaults/:id/owners',
}

export enum ITransactionStatus {
  Pending = 'pending',
  Completed = 'completed',
  Failed = 'failed',
}

export interface IOwner {
  id: string;
  name: string;
  avatar?: string;
  address: string;
}

// BE MODELS

/*
interface IVault {
  id: string;
  name: string;
  owners: string[];
  balance: number;
  currency: string;
  threshold: number;
}


*/
