import * as fs from 'fs';

type AdguardEvent =
  'dns_config' |
  'dns_rewrite' |
  'dns_safe_browsing' |
  'dns_access' |
  'dns_parental' |
  'dns_safe_search' |
  'blocked_services' |
  'dhcp' |
  'stats' |
  'query_log' |
  'filter' |
  'filter_rule' |
  'i18n' |
  'client' |
  'tls';

interface AdguardServerConfig {
  url: string;
  username: string;
  password: string;
}

interface FollowerConfig {
  server: AdguardServerConfig;
  events: Array<Event>;
}

interface Config {
  leader: AdguardServerConfig;
  followers: Array<AdguardServerConfig>;
}

function load(path: fs.PathLike): Config {
  const raw = fs.readFileSync(path);
  return JSON.parse(raw.toString());
}

export {
  AdguardServerConfig,
  AdguardEvent,
  Config,
  load,
};
