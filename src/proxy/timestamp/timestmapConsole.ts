'no strict';

export const timestampConsole = new Proxy(console, {
  get: (target, prop, foo) => {
    if (!['log', 'info', 'debug', 'error'].includes(prop as string)) return target[prop];

    return args => target[prop](new Date(), args);
  },
});

timestampConsole.log('hi');
timestampConsole.table([1, 2, 3]);
