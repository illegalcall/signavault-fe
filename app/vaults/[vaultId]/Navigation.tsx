'use client';

import { handleRoute } from '@/lib/utils';
import { Routes } from '@/types';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Tab: React.FC<{
  active: boolean;
  name: string;
  onClick: () => void;
}> = ({ active, name, onClick }) => {
  return (
    <div
      className={`cursor-pointer ${active ? 'bg-red-400' : ''} px-6 py-3 rounded-3xl hover:bg-slate-400`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

const Navigation = ({ params }: { params: { vaultId: string } }) => {
  const router = useRouter();
  const pathname = usePathname();
  const checkActive = (route: string) => {
    return pathname === route;
  };
  return (
    <div className="flex flex-col gap-5">
      <Tab
        active={checkActive(handleRoute(Routes.VaultDashboard, params))}
        name={'Dashboard'}
        onClick={() => {
          router.push(handleRoute(Routes.VaultDashboard, params));
        }}
      />
      <Tab
        active={checkActive(handleRoute(Routes.VaultTransactions, params))}
        name={'Transactions'}
        onClick={() => {
          router.push(handleRoute(Routes.VaultTransactions, params));
        }}
      />
      <Tab
        active={checkActive(handleRoute(Routes.VaultOwners, params))}
        name={'Owners'}
        onClick={() => {
          router.push(handleRoute(Routes.VaultOwners, params));
        }}
      />
    </div>
  );
};

export default Navigation;
