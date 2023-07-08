import { TransactionStatus, TransactionType } from './enums';

export interface IVault {
  id: string;
  name: string;
  owners: number;
  balance: number;
  avatar?: string;
  currency: string;
}

export interface IOwner {
  id: string;
  name: string;
  avatar?: string;
  publicKey: string;
}

export type ITransactionBase = {
  type: TransactionType;
  id: string;
  createdAt: string;
  amount: number;
  currency: string;
  author: string;
  vaultId: string;
  to: string;
  signers: string[];
  status: TransactionStatus;
  rejectedBy: string[];
};

export type IPendingOrFailedTransaction = ITransactionBase & {
  status: TransactionStatus.Failed | TransactionStatus.Pending;
};

export type ICompletedTransaction = ITransactionBase & {
  status: TransactionStatus.Completed;
  executedAt: string;
};

export type ITransaction = IPendingOrFailedTransaction | ICompletedTransaction;

export interface ITransactionForm {
  amount: number;
  currency: string;
  to: string;
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
