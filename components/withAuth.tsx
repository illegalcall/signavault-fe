/* eslint-disable react/display-name */
'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useConnectWallet } from '@web3-onboard/react';

const withAuth = (WrappedComponent: React.FunctionComponent) => {
  return (props: any) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const Router = useRouter();

      const [{ wallet }] = useConnectWallet();

      // If no access token was found, redirect to login page.
      if (!wallet) {
        Router.push('/');
        return null;
      }

      // If this was a valid wallet allow the access.
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
