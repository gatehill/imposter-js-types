# Sample projects for Imposter types

This directory contains the following samples:

- JavaScript: [imposter-sample-javascript](./samples/imposter-sample-javascript)
- TypeScript: [imposter-sample-typescript](./samples/imposter-sample-typescript)

These samples are preconfigured to transpile and bundle source files down to a single JS file.

> Note: just update the dependency for `@imposter-js/types` in the `package.json` to the latest from npmjs.com

In the sample project, bundle your script:

    npm run build

In the `dist` directory you will have two files:

```
$ ls
bundle.js
mock-config.yaml
```

This is a valid Imposter configuration - just run `imposter up`

> Install [Imposter CLI](https://github.com/gatehill/imposter-cli) if you don't already have it.

Hit your mock:

    $ curl http://localhost:8080
    { "name": "Ada Lovelace" }

The name is dynamically chosen from a list by the script.

Also notice the log output in Imposter:

    DEBUG ... Executed script 'dist/bundle.js' for request: GET http://localhost:8080/ in 6.34ms
