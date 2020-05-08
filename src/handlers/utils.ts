import { AdguardServerConfig } from '../config';
import { Configuration } from '../adguard-api';

export default function makeClientConfig(conf: AdguardServerConfig): Configuration {
  return {
    basePath: conf.url,
    username: conf.username,
    password: conf.password,
  };
}
