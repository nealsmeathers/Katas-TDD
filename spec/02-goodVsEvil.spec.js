/* global describe, it */

import { expect } from 'chai';
import goodVsEvil from '../02-goodVsEvil/goodVsEvil';

describe('goodVsEvil', function () {
  it('is a function', function () {
    expect(goodVsEvil).to.be.a('function');
  });
});