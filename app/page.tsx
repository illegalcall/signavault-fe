'use client';
import ConnectWallet from '@/components/ConnectWallet';
import { useConnectWallet } from '@web3-onboard/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const [{ wallet }] = useConnectWallet();
  const router = useRouter();

  useEffect(() => {
    if (wallet) router.push('/vaults');
  }, [wallet]);

  const { theme } = useTheme();

  return (
    <main className="flex flex-col items-center justify-center w-[1100px] py-20 mx-auto">
      <h3 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Your Vaults</h3>
      <div
        className={`flex flex-col items-center justify-center gap-10 border-4 ${
          theme === 'dark' ? 'border-white' : 'border-black'
        } w-3/4 h-[700px]`}
      >
        <Image src="/vault.jpeg" width={200} height={200} alt={''} />
        <p className="text-lg line-clamp-2">Connect your wallet to see which Vaults you are in</p>
        <ConnectWallet />
      </div>
    </main>
  );
}
