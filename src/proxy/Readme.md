## 1. Timestamped logs

Create a proxy for the `console` object that enhances every logging function (`log`, `error`, `debug`, `info`)
by prepending the current timestamp to the message you want to print in logs.

For instance, executing 
`consoleProxy.log('Hello') `
should print something like `2023-01-18T15:00:00.777Z Hello`

