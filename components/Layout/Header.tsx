'use client';
import React, { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { useConnectWallet, useSetChain } from '@web3-onboard/react';

const Header = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [
    {
      wallet, // the wallet that has been connected or null if not yet connected
      connecting, // boolean indicating if connection is in progress
    },
    connect, // function to call to initiate user to connect wallet
    disconnect, // function to call with wallet<DisconnectOptions> to disconnect wallet
    updateBalances, // function to be called with an optional array of wallet addresses connected through Onboard to update balance or empty/no params to update all connected wallets
    setWalletModules, // function to be called with an array of wallet modules to conditionally allow connection of wallet types i.e. setWalletModules([ledger, trezor, injected])
    setPrimaryWallet, // function that can set the primary wallet and/or primary account within that wallet. The wallet that is set needs to be passed in for the first parameter and if you would like to set the primary account, the address of that account also needs to be passed in
  ] = useConnectWallet();

  const toggleWallet = () => {
    if (!wallet) {
      connect();
    } else disconnect(wallet);
  };

  return (
    <header className="border-b-4 flex justify-between px-4 py-6">
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <div className="flex gap-5">
        <Button
          className="wallet"
          variant={'default'}
          onClick={toggleWallet}
          disabled={connecting}
        >
          {connecting ? 'connecting' : wallet ? 'Disconnect' : 'Connect Wallet'}
        </Button>

        <span
          className="flex align-middle cursor-pointer"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </span>
      </div>
    </header>
  );
};

export default Header;
