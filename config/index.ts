const config: {
  [key: string]: {
    token: string;
    name: string;
    lockDuration: number;
    rate: number;
  };
} = {
  blast_sepolia: {
    name: 'staking pools',
    token: '0x4300000000000000000000000000000000000002',
    lockDuration: 86400,
    rate: 1000, // over 100000
  },
  development: {
    name: 'staking pools',
    token: '0x4300000000000000000000000000000000000002',
    lockDuration: 86400,
    rate: 1000, // over 100000
  },
};

export const getConfig = (network: string) => {
  return config[network];
};
