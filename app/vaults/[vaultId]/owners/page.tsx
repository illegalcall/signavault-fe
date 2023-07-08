'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import Owner from './Owner';
import { dummyOwners } from './consts';
import withAuth from '@/components/withAuth';

const OwnersPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Owners</h1>
        <Button>
          <span className="font-semibold">Add Owner</span>
        </Button>
      </div>
      {dummyOwners.map((owner) => (
        <Owner
          key={owner.id}
          {...owner}
        />
      ))}
    </div>
  );
};

export default withAuth(OwnersPage);
