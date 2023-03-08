import { consoleFactory, RedConsole } from './factory';

describe('ColorConsole', () => {
  it('Should print red for RedConsole', () => {
    const redConsole = new RedConsole();
    expect(() => redConsole.log('foo')).not.toThrowError();
  });

  it('factory method should return proper object', () => {
    expect(consoleFactory('red')).toBeInstanceOf(RedConsole);
  });

  it('should break for not supported color', () => {
    expect(() => consoleFactory('notSupported')).toThrowError('Not supported');
  });
});
