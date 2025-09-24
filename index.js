const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server();

  function method(arg1, arg2, lastArg = 'Im a default value') {
    console.log(arg1, arg2, lastArg);
  }

  server.method({ name: 'cachedMethod', method, options: { cache: { generateTimeout: 1000 } } });

  server.method({ name: 'nonCachedMethod', method });

  server.initialize();

  server.methods.cachedMethod('cachedMethod', 'arg2');
  server.methods.nonCachedMethod('nonCachedMethod', 'arg2');
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init().catch((err) => {
  console.error(err);
  process.exit(1);
});
