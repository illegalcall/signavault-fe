'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Web3OnboardProvider, init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import { onboard as web3Onboard } from '@/lib/onboard';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  console.log('🚀 ~ file: index.tsx:8 ~ web3Onboard:', web3Onboard);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <Web3OnboardProvider web3Onboard={web3Onboard}>
          <div className="m-auto max-w-screen-xxl">
            <Header />
            {children}
          </div>
        </Web3OnboardProvider>
      )}
    </>
  );
};

export default Layout;
