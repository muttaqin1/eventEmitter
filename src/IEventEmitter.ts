export default interface IEventEmitter {
  on(eventName: string, callback: Function): void;
  emit(eventName: string, ...args: any[]): void;
  listenersCount(eventName: string): number;
  removeListener(eventName: string, callback: Function): void;
  removeAllListeners(eventName: string): void;
  once(eventName: string, callback: Function): void;
  eventNames(): string[];
  listeners(eventName: string): Function[];
  prependListener(eventName: string, callback: Function): void;
}
