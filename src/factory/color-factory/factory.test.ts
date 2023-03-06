import { foo } from './factory';

describe('this', () => {
  it('should work', () => {
    expect(foo()).toEqual('bar')
  });
});