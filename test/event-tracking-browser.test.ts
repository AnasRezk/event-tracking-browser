import { identify, register, track, init } from '../src/event-tracking-browser';

test('identify user', () => {
    expect(identify('1')).toBe('1');
});

test('register gloabl props', () => {
    expect(register('1')).toBe('1');
});

test('track event', () => {
    expect(track('Login', null)).toStrictEqual({ eventName: 'Login', properties: null });
});

test('init tracker', () => {
    expect(init('Login')).toBe('Login');
});
