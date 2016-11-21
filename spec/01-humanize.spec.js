/* global describe, it */

import { expect } from 'chai';
import humanize from '../01-humanize/humanize';

describe('humanize', function () {
  it('is a function', function () {
    expect(humanize).to.be.a('function');
  });
  it('takes on argument', function () {
    expect(humanize.length).to.equal(1);
  });
  it('returns \'zero\' for 0', function () {
    expect(humanize(0)).to.equal('zero')
  });
  it('returns \'one\' for 1', function () {
    expect(humanize(1)).to.equal('one');
  });
  it('rerurns \'ten\' for 10', function () {
    expect(humanize(10)).to.equal('ten');
  });
  it('returns \'eleven\' for 11', function () {
    expect(humanize(11)).to.equal('eleven');
  });
  it('returns \'twenty one\' for 21', function () {
    expect(humanize(21)).to.equal('twenty one');
  });
  it('returns \'ninety nine\' for 99', function () {
    expect(humanize(99)).to.equal('ninety nine');
  });
  it('returns \'one hundred\' for 100', function () {
    expect(humanize(100)).to.equal('one hundred');
  });
  it('returns \'one hundred and one\' for 101', function () {
    expect(humanize(101)).to.equal('one hundred and one');
  });
  it('returns \'one hundred and ten\' for 110', function () {
    expect(humanize(110)).to.equal('one hundred and ten');
  });
  it('returns \'one hundred and eleven\' for 111', function () {
    expect(humanize(111)).to.equal('one hundred and eleven');
  });
  it('returns \'one hundred and twenty one\' for 121', function () {
    expect(humanize(121)).to.equal('one hundred and twenty one');
  });
  it('returns \'nine hundred and ninety nine\' for 999', function () {
    expect(humanize(999)).to.equal('nine hundred and ninety nine');
  });
  it('returns \'one thousand\' for 1000', function () {
    expect(humanize(1000)).to.equal('one thousand');
  });
});