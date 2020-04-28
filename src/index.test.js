/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';

const name = 'my Name';

describe('setup', () => {
  it('return my Name', () => {
    expect(name).to.be.a('string');
    expect(name).to.equal('my Name');
    expect(name).to.have.length(7);
  });
});
