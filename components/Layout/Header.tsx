'use client';
import React, { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { useConnectWallet, useSetChain } from '@web3-onboard/react';
import ConnectWallet from '../ConnectWallet';

const Header = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="border-b-4 flex justify-between px-4 py-6">
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <div className="flex gap-5">
        <ConnectWallet />

        <span
          className="flex items-center cursor-pointer"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </span>
      </div>
    </header>
  );
};

export default Header;
