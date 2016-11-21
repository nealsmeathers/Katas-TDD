function humanize (number) {

  var num = number.toString();

  var units = {
    0: 'zero',
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

  if (num.length === 1) return units[num];
  if (num.length === 2 && num[1] === '0') return tens[num[0]];
  if (num.length === 2 && num[0] === '1') return teens[num[1]];
  if (num.length === 2) return tens[num[0]] + ' ' + units[num[1]];
}

module.exports = humanize;