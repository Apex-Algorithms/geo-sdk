import type { Network } from '../types.js';

export const TESTNET_API_ORIGIN = 'https://testnet-api.geobrowser.io';

export function getApiOrigin(network: Network): string {
  if (network === 'TESTNET') {
    return TESTNET_API_ORIGIN;
  }
  throw new Error(`Network ${network} not supported`);
}
