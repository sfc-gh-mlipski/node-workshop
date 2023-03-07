import { timestampConsole } from './timestmapConsole';

describe('this', () => {
  it('should work', () => {
    timestampConsole.log('Hello')
    timestampConsole.log('Hello','World')
  });
});