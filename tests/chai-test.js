const chai = require('chai');

describe('Chai Module Test', () => {
  it('Should load chai and run a basic test', () => {
    chai.expect(1 + 1).to.equal(2);
  });
});
