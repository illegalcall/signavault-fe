import React from 'react';
import Navigation from './Navigation';

const VaultLayout = ({ params, children }: { params: { vaultId: string }; children: React.ReactNode }) => {
  return (
    <div className="flex gap-16 py-5">
      <div className="flex flex-col gap-16">
        <div className="">Wallet Name</div>
        <Navigation params={params} />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default VaultLayout;
