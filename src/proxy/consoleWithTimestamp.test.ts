import { consoleWithTimestamp } from './consoleWithTimestamp';

describe('this', () => {
  it('should work', () => {
    consoleWithTimestamp.log('Hello')
    consoleWithTimestamp.log('Hello','World')
  });
});