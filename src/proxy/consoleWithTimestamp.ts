
const logMethods: (string | symbol)[]= ['log', 'debug', 'info', 'error'];

export const consoleWithTimestamp = new Proxy(console, {
  get: (target, prop) => {
    if (!logMethods.includes(prop)) return target[prop];

    return (...args) => {
      const timestamp = new Date().toLocaleString();
      target[prop](timestamp, ...args);
    }
  }
});
