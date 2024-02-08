import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { getConfig } from '../config';

module.exports = async ({
  ethers,
  deployments,
  hardhatArguments,
}: HardhatRuntimeEnvironment) => {
  const network: string = hardhatArguments.network
    ? hardhatArguments.network
    : 'development';

  const conf = getConfig(network);
  const [deployer] = await ethers.getSigners();
  console.log('deployed by:', deployer.address);

  const { deploy } = deployments;

  await deploy('IDOLocking', {
    from: deployer.address,
    args: [conf.name, conf.token, conf.rate, conf.lockDuration],
    log: true,
  });
};
