import expect from 'expect';
import greet from '../greetings';

describe('greetings', () => {
  it('greets the name', () => {
    expect(greet('react')).toBe('hi react');
  });
});
