/* global describe, it */

import { expect } from 'chai';
import goodVsEvil from '../02-goodVsEvil/goodVsEvil';

var evilWin = 'Battle Result: Evil eradicates all trace of Good';
var goodWin = 'Battle Result: Good triumphs over Evil';
var draw = 'Battle Result: No victor on this battle field';

describe('goodVsEvil', function () {
  it('is a function', function () {
    expect(goodVsEvil).to.be.a('function');
  });
  it('takes two arguments', function () {
    expect(goodVsEvil.length).to.equal(2);
  });
  it('returns win for evil', function () {
    expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).to.equal(evilWin);
  });
  it('returns win for good', function () {
    expect(goodVsEvil('0 0 0 0 0 10', '0 0 0 0 0 0 9')).to.equal(goodWin);
  });
  it('returns win for evil', function () {
    expect(goodVsEvil('1 1 1 0 0 1', '3 1 0 0 1 0 1')).to.equal(evilWin);
  });
  it('returns win for good', function () {
    expect(goodVsEvil('2 2 2 2 2 2', '1 1 1 2 2 2 0')).to.equal(goodWin);
  });
  it('returns a draw', function () {
    expect(goodVsEvil('3 2 2 3 2 1', '5 4 2 2 3 2 0')).to.equal(draw);
  });
});