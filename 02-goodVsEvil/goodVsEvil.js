function goodVsEvil (good, evil) {
  var sumGood = 0;
  var sumEvil = 0;
  var goodArr = good.split(' ');
  var evilArr = evil.split(' ');

  for (var i = 0; i < goodArr.length; i++) {
    if (i === 0) {
      sumGood += Number(goodArr[i]);
    }
    else if (i === 1) {
      sumGood += (Number(goodArr[i])) * 2;
    }
    else if (i === 2 || i === 3) {
      sumGood += (Number(goodArr[i])) * 3;
    }
    else if (i === 4) {
      sumGood += (Number(goodArr[i])) * 4;
    }
    else if (i === 5) {
      sumGood += (Number(goodArr[i])) * 10;
    }
  }

  for (var j = 0; j < evilArr.length; j++) {
    if (j === 0) {
      sumEvil += Number(evilArr[j]);
    }
    else if (j === 1 || j === 2 || j === 3) {
      sumEvil += (Number(evilArr[j])) * 2;
    }
    else if (j === 4) {
      sumEvil += (Number(evilArr[j])) * 3;
    }
    else if (j === 5) {
      sumEvil += (Number(evilArr[j])) * 5;
    }
    else if (j === 6) {
      sumEvil += (Number(evilArr[j])) * 10;
    }
  }

  if (sumGood > sumEvil) return 'Battle Result: Good triumphs over Evil';
  if (sumGood < sumEvil) return 'Battle Result: Evil eradicates all trace of Good';
  return 'Battle Result: No victor on this battle field'
}

module.exports = goodVsEvil;