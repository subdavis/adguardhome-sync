import { AdguardEvent, Config } from '../config';

import blockedServicesHandler from './blockedServices';

interface Handler {
  (config: Config): Promise<void>;
}

type HandlerMapType = { [key in AdguardEvent]: Handler };

function nullHandler(config: Config): Promise<null> {
  return;
}

const handlerMap: HandlerMapType = {
  'dns_config': nullHandler,
  'dns_rewrite': nullHandler,
  'dns_safe_browsing': nullHandler,
  'dns_access': nullHandler,
  'dns_parental': nullHandler,
  'dns_safe_search': nullHandler,
  'blocked_services': blockedServicesHandler,
  'dhcp': nullHandler,
  'stats': nullHandler,
  'query_log': nullHandler,
  'filter': nullHandler,
  'filter_rule': nullHandler,
  'i18n': nullHandler,
  'client': nullHandler,
  'tls': nullHandler,
};

export default handlerMap;
