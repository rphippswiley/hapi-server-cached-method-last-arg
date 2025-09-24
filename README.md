Run `npm run start` and see console output of cached method vs non-cached method, resulting in an object being passed as `last argument`, which conflicts with argument default values.

```
npm run start

> hapi-server-cached-method-last-arg@1.0.0 start
> node index.js

nonCachedMethod arg2 Im a default value
cachedMethod arg2 {}
```
