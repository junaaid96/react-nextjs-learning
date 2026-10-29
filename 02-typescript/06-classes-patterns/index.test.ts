import { describe, it, expect } from 'vitest';
import { MemoryLogger, EmailNotifier, appEvents } from './index.js';

describe('classes & DI', () => {
  it('injects a logger', () => {
    const logger = new MemoryLogger();
    const n = new EmailNotifier(logger);
    n.notify('a@b.dev', 'hi'); n.notify('nope', 'hi');
    expect(logger.lines).toEqual(['sent:a@b.dev', 'failed:nope']);
  });
  it('typed emitter', () => {
    const e = appEvents(); let id = '';
    e.on('login', (p) => { id = p.userId; });
    e.emit('login', { userId: 'u1' });
    expect(id).toBe('u1');
  });
});
