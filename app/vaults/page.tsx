'use client';

import ConnectWallet from '@/components/ConnectWallet';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import withAuth from '@/components/withAuth';
import { useConnectWallet } from '@web3-onboard/react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { vaults } from './consts';
import Vault from './Vault';

const VaultsPage = () => {
  const [{ wallet }] = useConnectWallet();
  const router = useRouter();

  const { theme } = useTheme();

  return (
    <main className="flex flex-col items-center justify-center py-20 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl mb-4">Your Vaults</h1>
        <Button>Create Vault</Button>
      </div>
      <div className="vault-container w-full flex flex-col gap-5">
        {vaults.map(({ id, name, owners, balance, currency }) => (
          <Vault key={id} id={id} name={name} owners={owners} balance={balance} currency={currency} />
        ))}
      </div>
    </main>
  );
};

// export default withAuth(VaultsPage);
export default VaultsPage;
