import { Config } from '../config';
import { BlockedServicesApi } from '../adguard-api';
import makeClientConfig from './utils';

export default async function handle(config: Config): Promise<void> {
  const leaderClient = new BlockedServicesApi(makeClientConfig(config.leader));
  
  const leaderConfig = await leaderClient.blockedServicesList();

  config.followers.forEach(follower => {
    const followerClient = new BlockedServicesApi(makeClientConfig(follower));
    followerClient.blockedServicesSet(leaderConfig.data);
  });
}
