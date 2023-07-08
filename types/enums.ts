export enum Routes {
  Home = '/',
  Vaults = '/vaults',
  VaultDashboard = '/vaults/:id',
  VaultTransactions = '/vaults/:id/transactions',
  VaultOwners = '/vaults/:id/owners',
}

export enum TransactionStatus {
  Pending = 'pending',
  Completed = 'completed',
  Failed = 'failed',
}

export enum TransactionType {
  Send = 'Send',
  RemoveOwner = 'RemoveOwner',
  AddOwner = 'AddOwner',
}

export enum TransactionTypeLabel {
  Send = 'Send',
  RemoveOwner = 'Remove owner',
  AddOwner = 'Add owner',
}
