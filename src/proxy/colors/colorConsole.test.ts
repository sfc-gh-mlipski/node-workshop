import { colorConsole } from './colorConsole';

describe('this', () => {
  it('should work', () => {
    colorConsole(console).red('Hello')
    colorConsole(console).green('Hello')
    colorConsole(console).blue('Hello')
  });
});