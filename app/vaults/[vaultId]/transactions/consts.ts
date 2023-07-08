import { ITransaction } from '@/types';
import { TransactionStatus, TransactionType } from '@/types/enums';

export const transactions: ITransaction[] = [
  {
    id: 'asdasd',
    type: TransactionType.Send,
    createdAt: '2021-08-01T12:00:00.000Z',
    amount: 100,
    currency: 'ETH',
    author: '0x1234567890123456789012345678901234567890',
    vaultId: '1',
    to: '0x123456789012345678901234567890123456xyz',
    signers: ['0x1234567890123456789012345678901234567890'],
    status: TransactionStatus.Completed,
    executedAt: '2021-08-01T12:00:00.000Z',
    rejectedBy: [],
  },
  {
    id: 'asdasd',
    type: TransactionType.AddOwner,
    createdAt: '2021-08-01T12:00:00.000Z',
    amount: 100,
    currency: 'ETH',
    author: '0x1234567890123456789012345678901234567890',
    vaultId: '1',
    to: '0x123456789012345678901234567890123456abc',
    signers: ['0x1234567890123456789012345678901234567890'],
    status: TransactionStatus.Pending,
    rejectedBy: [],
  },
];
