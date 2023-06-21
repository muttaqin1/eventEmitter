import IEventEmitter from './IEventEmitter';

export default class EventEmitter implements IEventEmitter {
  private readonly events = new Map<string, Function[]>();

  public on(eventName: string, callback: Function): void {
    if (!eventName) throw new Error('Event name is required');
    if (!callback) throw new Error('Callback is required');
    if (!this.events.has(eventName)) this.events.set(eventName, [callback]);
    else this.events.get(eventName)?.push(callback);
  }
  public emit(eventName: string, ...args: any[]): void {
    if (!eventName) throw new Error('Event name is required');
    if (!this.events.has(eventName)) throw new Error('Event does not exist');
    this.events
      .get(eventName)
      ?.forEach((callback: Function) => callback(...args));
  }
  public listenersCount(eventName: string): number {
    if (!eventName) throw new Error('Event name is required');
    return (this.events.get(eventName) || []).length;
  }
  public removeListener(eventName: string, callback: Function): void {
    if (!eventName) throw new Error('Event name is required');
    if (!callback) throw new Error('Callback is required');
    if (!this.events.has(eventName)) throw new Error('Event does not exist');
    const listeners = this.events.get(eventName);
    listeners?.splice(listeners.indexOf(callback), 1);
  }
  public removeAllListeners(eventName: string): void {
    if (!eventName) throw new Error('Event name is required');
    if (!this.events.has(eventName)) throw new Error('Event does not exist');
    this.events.delete(eventName);
  }
  public once(eventName: string, callback: Function): void {
    if (!eventName) throw new Error('Event name is required');
    if (!callback) throw new Error('Callback is required');
    const onceCallback = (...args: any[]) => {
      callback(...args);
      this.removeListener(eventName, onceCallback);
    };
    this.on(eventName, onceCallback);
  }
  public eventNames(): string[] {
    return Array.from(this.events.keys());
  }
  public listeners(eventName: string): Function[] {
    if (!eventName) throw new Error('Event name is required');
    if (!this.events.has(eventName)) throw new Error('Event does not exist');
    return this.events.get(eventName) || [];
  }
  public prependListener(eventName: string, callback: Function): void {
    if (!eventName) throw new Error('Event name is required');
    if (!callback) throw new Error('Callback is required');
    if (!this.events.has(eventName)) this.events.set(eventName, [callback]);
    else this.events.get(eventName)?.unshift(callback);
  }
}
