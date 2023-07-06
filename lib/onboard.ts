import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';

const injected = injectedModule();

const wallets = [injected];

const chains = [
  {
    id: 80001,
    token: 'MATIC',
    label: 'Matic Testnet',
    rpcUrl: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.POLYGON_MUMBAI_API_KEY}`,
  },
  {
    id: 11155111,
    token: 'sETH',
    label: 'Sepolia Testnet',
    rpcUrl: `https://eth-sepolia.g.alchemy.com/v2/${process.env.SEPOLIA_API_KEY}`,
  },
];

const appMetadata = {
  name: 'Signa Vault',
  // icon: '<SVG_ICON_STRING>',
  // logo: '<SVG_LOGO_STRING>',
  description: 'My app using Onboard',
  recommendedInjectedWallets: [
    // { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
    { name: 'MetaMask', url: 'https://metamask.io' },
  ],
};

export const onboard = Onboard({
  wallets,
  chains,
  appMetadata,
});
