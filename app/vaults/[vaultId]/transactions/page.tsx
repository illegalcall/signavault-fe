import React from 'react';
import Transaction from './Transaction';
import { transactions } from './consts';

const TransactionsPage = () => {
  //FIXME: Get threshold value from vault
  const threshold = 2;
  return (
    <div className="flex flex-col gap-5">
      {transactions.map((transaction) => {
        return (
          <Transaction
            key={transaction.id}
            amount={transaction.amount}
            to={transaction.to}
            status={transaction.status}
            author={transaction.author}
            createdAt={transaction.createdAt}
            confirmations={transaction.signers.length}
            threshold={threshold}
            rejections={transaction.rejectedBy.length}
          />
        );
      })}
    </div>
  );
};

export default TransactionsPage;
