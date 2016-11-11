import { it, describe } from 'mocha';
import assert from 'assert';
import getUserName from '../src/getUserName';

describe('Test', () => {
  describe('Check test subsystem', () => {
    it('test system is work	', () => {
      assert.equal('for test', 'for test');
    });
  });
  describe('Check module "getUserName"', () => {
    it('should return text "for test"', () => {
      assert.equal('for test', getUserName(''));
    });
  });
});
