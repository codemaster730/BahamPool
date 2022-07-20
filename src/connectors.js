import { InjectedConnector } from "@web3-react/injected-connector";

import { WalletConnectConnector } from "@web3-react/walletconnect-connector";


const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  56: `https://bsc-dataseed.binance.org/`,
  1: `https://mainnet.infura.io/v3/b48698b6910d48e581659479c4cb49d0`,
};

export const injected = new InjectedConnector({
  supportedChainIds: [97],
});
/*
export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1] },
  defaultChainId: 1,
});*/

export const walletconnect = new WalletConnectConnector({
  rpc: { 56: RPC_URLS[56] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
/*
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: "RumbleKongLeague",
  supportedChainIds: [1],
});

export const ledger = new LedgerConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
});

export const trezor = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  // manifestEmail: "dummy@abc.xyz",
  // manifestAppUrl: "http://localhost:1234",
});

export const lattice = new LatticeConnector({
  chainId: 1,
  appName: "RumbleKongLeague",
  url: RPC_URLS[1],
});

export const authereum = new AuthereumConnector({ chainId: 1 });

export const fortmatic = new FortmaticConnector({
  apiKey: process.env.FORTMATIC_API,
  chainId: 1,
});*/
