function humanize (number) {

  var num = number.toString();

  var units = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };

  var teens = {
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen'
  };

  var tens = {
    0: '',
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  };

  if (num === '0') return 'zero';
  if (num.length === 1) return units[num];
  if (num.length === 2 && num[1] === '0') return tens[num[0]];
  if (num.length === 2 && num[0] === '1') return teens[num[1]];
  if (num.length === 2) return tens[num[0]] + ' ' + units[num[1]];
  if (num.length === 3 && num[1] !== '0' && num[2] === '0') return units[num[0]] + ' hundred and ' + tens[num[1]];
  if (num.length === 3 && num[1] && num[2] === '0') return units[num[0]] + ' hundred';
  if (num.length === 3 && num[1] === '0') return units[num[0]] + ' hundred and ' + units[num[2]];
  if (num.length === 3 && num[1] === '1') return units[num[0]] + ' hundred and ' + teens[num[2]];
  if (num.length === 3) return units[num[0]] + ' hundred and ' + tens[num[1]] + ' ' + units[num[2]];
  if (num === '1000') return 'one thousand';
}

module.exports = humanize;