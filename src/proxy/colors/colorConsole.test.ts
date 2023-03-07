import { colorConsole } from './colorConsole';

describe('this', () => {
  it('should work', () => {
    colorConsole.log('Hello')
    colorConsole.log('Hello','World')
  });
});