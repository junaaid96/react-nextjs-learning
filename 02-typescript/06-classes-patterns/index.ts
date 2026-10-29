export interface Logger { log(msg: string): void }

export class MemoryLogger implements Logger {
  readonly lines: string[] = [];
  log(msg: string) { this.lines.push(msg); }
}

export abstract class Notifier {
  constructor(protected readonly logger: Logger) {}
  abstract send(to: string, msg: string): boolean;
  notify(to: string, msg: string) {
    const ok = this.send(to, msg);
    this.logger.log(`${ok ? 'sent' : 'failed'}:${to}`);
    return ok;
  }
}

export class EmailNotifier extends Notifier {
  send(to: string) { return to.includes('@'); }
}

type Events = { login: { userId: string }; logout: undefined };

export class TypedEmitter<E extends Record<string, unknown>> {
  #handlers: { [K in keyof E]?: Array<(p: E[K]) => void> } = {};
  on<K extends keyof E>(type: K, fn: (p: E[K]) => void) {
    (this.#handlers[type] ??= []).push(fn);
  }
  emit<K extends keyof E>(type: K, payload: E[K]) {
    this.#handlers[type]?.forEach((fn) => fn(payload));
  }
}
export const appEvents = () => new TypedEmitter<Events>();
