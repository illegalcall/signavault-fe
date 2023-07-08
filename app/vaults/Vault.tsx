import React from 'react';
import Image from 'next/image';
import { IVault } from '@/types';
import { useRouter } from 'next/navigation';

const Vault: React.FC<IVault> = ({ id, name, owners, balance, currency }) => {
  const router = useRouter();
  //TODO: fix the color later
  return (
    <div
      className="w-full flex justify-between items-center border-2 h-[70px] px-8 rounded-3xl cursor-pointer border-slate-50 hover:border-red-500"
      onClick={() => router.push(`/vaults/${id}`)}
    >
      <span className="flex gap-4">
        <Image
          src="/vault.jpeg"
          width={30}
          height={30}
          alt={''}
        />
        <span>{name}</span>
      </span>
      <div className="flex gap-1 items-center">
        <span>{owners}</span>
        <span className="text-sm text-muted-foreground">owners</span>
      </div>
      <span className="flex gap-1 items-center">
        <span className="text-sm text-muted-foreground">{currency}</span>
        <span>{balance}</span>
      </span>
    </div>
  );
};

export default Vault;
