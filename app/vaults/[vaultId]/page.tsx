'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

const DashboardPage = () => {
  return (
    <div className="h-[250px] flex flex-col justify-between">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Dashboard</h1>
      <div className="flex gap-5">
        <Button>Send</Button>
        <Button>Deposit</Button>
      </div>
      <div className="">
        <h2 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
          Balance: {'ETH '}
          {102.1213}
        </h2>
      </div>
    </div>
  );
};

export default DashboardPage;
