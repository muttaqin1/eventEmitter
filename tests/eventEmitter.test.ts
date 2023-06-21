import EventEmitter from '../src/EventEmitter';

let emitter: EventEmitter;
describe('EventEmitter tests:', () => {
  beforeEach(() => {
    emitter = new EventEmitter();
  });
  it('should call the callback', () => {
    const callback = jest.fn();
    emitter.on('test', callback);
    emitter.emit('test', 'TEST_SUCCESS');
    expect(callback).toHaveBeenCalledWith('TEST_SUCCESS');
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('should throw an error if event name is not provided', () => {
    expect(() => emitter.on('', () => {})).toThrowError(
      'Event name is required'
    );
  });
  it('should throw an error if callback is not provided', () => {
    expect(() => emitter.on('test', null as unknown as Function)).toThrowError(
      'Callback is required'
    );
  });
  it('should return valid listener count', () => {
    emitter.on('test', () => {});
    emitter.on('test', () => {});
    emitter.on('test', () => {});
    expect(emitter.listenersCount('test')).toEqual(3);
  });
  it('should remove listener', () => {
    const listener = () => {};
    emitter.on('test', listener);
    expect(emitter.listenersCount('test')).toEqual(1);
    emitter.removeListener('test', listener);
    expect(emitter.listenersCount('test')).toEqual(0);
  });
  it('should remove all listeners', () => {
    emitter.on('test', () => {});
    emitter.on('test', () => {});
    emitter.on('test', () => {});
    expect(emitter.listenersCount('test')).toEqual(3);
    emitter.removeAllListeners('test');
    expect(emitter.listenersCount('test')).toEqual(0);
  });
  it('should call once', () => {
    const callback = jest.fn();
    emitter.once('test', callback);
    emitter.emit('test', 'TEST_SUCCESS');
    emitter.emit('test', 'TEST_SUCCESS');
    expect(callback).toHaveBeenCalledWith('TEST_SUCCESS');
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('should return event names', () => {
    emitter.on('test', () => {});
    emitter.on('test2', () => {});
    expect(emitter.eventNames()).toEqual(['test', 'test2']);
  });
  it('should return listeners', () => {
    const listener = () => {};
    emitter.on('test', listener);
    expect(emitter.listeners('test')).toEqual([listener]);
  });
  it('should prepend listener', () => {
    const callback = jest.fn();
    const callback2 = jest.fn();
    emitter.on('test', callback);
    emitter.prependListener('test', callback2);
    emitter.emit('test', 'TEST_SUCCESS');
    expect(callback2).toHaveBeenCalledWith('TEST_SUCCESS');
    expect(callback).toHaveBeenCalledWith('TEST_SUCCESS');
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });
});
