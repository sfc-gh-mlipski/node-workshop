import { timestampConsole } from './timestmapConsole';

const now = new Date('08.03.2023');

jest.useFakeTimers();
jest.setSystemTime(now);

const spy = jest.spyOn(console, 'log');

describe('console', () => {
  it('log should prepend date', () => {
    const res = timestampConsole.log('Hello');
    expect(spy).toBeCalledWith(now, `Hello`);
  });
  // it('info should prepend date', () => {
  //   const res = timestampConsole.info('Hello');
  //   expect(res).toEqual('08.03.2023 Hello');
  // });
  // it('error should prepend date', () => {
  //   const res = timestampConsole.error('Hello');
  //   expect(res).toEqual('08.03.2023 Hello');
  // });
  // it('debug should prepend date', () => {
  //   const res = timestampConsole.debug('Hello');
  //   expect(res).toEqual('08.03.2023 Hello');
  // });
});
