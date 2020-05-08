# AdGuardHome Sync

A TypeScript + Express microservice to subscribe to [AdGuardHome](https://github.com/AdguardTeam/AdGuardHome) webhooks and propogate configuration to secondary AdGuardHome instances.  If you run more than 1 AdGuardHome service for High Availability (HA), this is the project for you!

## Usage

``` bash
yarn
yarn build
yarn serve
```

## Version Compatibility and Maintenance

The client libraries are automatically generated from AdGuardHome's OpenAPI spec, making them type-safe and guaranteed compatible with the latest version of AdGuardHome.  Long-term maintenance should be a breeze.

## Generating the OpenAPI Spec

``` bash
npx openapi-generator generate -i AdGuardHome/openapi/openapi.yaml -g typescript-axios  -o ./src/adguard-api --additional-properties supportsES6=true
```
