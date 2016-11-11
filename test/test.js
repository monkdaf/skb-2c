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
    it('param is empty', () => {
      assert.equal('Invalid username', getUserName(''));
    });

    it('param is "https://vk.com/skillbranch"', () => {
      assert.equal('@skillbranch', getUserName('https://vk.com/skillbranch'));
    });

    it('param is "//vk.com/skillbranch"', () => {
      assert.equal('@skillbranch', getUserName('//vk.com/skillbranch'));
    });

    it('param is "skillbranch"', () => {
      assert.equal('@skillbranch', getUserName('skillbranch'));
    });

    it('param is "https://vk.com/skillbranch?w=wall-117903599_1076"', () => {
      assert.equal('@skillbranch', getUserName('https://vk.com/skillbranch'));
    });

  });
});
