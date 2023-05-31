export default interface IEventEmitter {
  events: Map<string, Function[]>;
  on(eventName: string, callback: Function): void;
  emit(eventName: string, ...args: any[]): void;
  listenersCount(eventName: string): number;
}
