export default class EventEmitter {
  constructor(private readonly events = new Map<string, Function[]>()) {}

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
    if (!this.events.has(eventName)) return 0;
    return (this.events.get(eventName) || []).length;
  }
}
