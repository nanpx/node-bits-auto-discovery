(() => {
  'use strict';

  const chai = require('chai');
  const {isNonEmptyString} = require('../src/utils');

  const expect = chai.expect;

  describe('utils', () => {
    describe('isNonEmptyString', () => {
      it('should return false for undefined', () => {
        expect(isNonEmptyString()).to.be.false;
      });
      it('should return false for boolean', () => {
        expect(isNonEmptyString(false)).to.be.false;
      });
      it('should return false for number', () => {
        expect(isNonEmptyString(42)).to.be.false;
      });
      it('should return true for a string', () => {
        expect(isNonEmptyString('str')).to.be.true;
      });
      it('should return false for null', () => {
        expect(isNonEmptyString(null)).to.be.false;
      });
      it('should return false for Object', () => {
        expect(isNonEmptyString({})).to.be.false;
      });
      it('should return false for Array', () => {
        expect(isNonEmptyString([])).to.be.false;
      });
    });
  });
})();
