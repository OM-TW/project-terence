class Chinese {
  options: { zeroChar: string };
  standardNumbers: Record<string, string>;
  standardNumbersReverse: Record<string, number>;
  digits: { value: number; char: string }[];
  bigNumbers: { value: number; char: string }[];
  biggest: string;
  reg10K: RegExp;
  reg: RegExp;
  biggest_in_arabic = 1e48;
  constructor(opts = {}) {
    this.options = {
      zeroChar: '零', //another choice is 〇
    };

    this.options = Object.assign(this.options, opts);
    this.standardNumbers = {
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六',
      7: '七',
      8: '八',
      9: '九',
    };
    this.standardNumbersReverse = {
      一: 1,
      二: 2,
      两: 2,
      三: 3,
      四: 4,
      五: 5,
      六: 6,
      七: 7,
      八: 8,
      九: 9,
      十: 10,
      百: 100,
      千: 1000,
      万: 10000,
      亿: 1e8,
      兆: 1e12,
      京: 1e16,
      垓: 1e20,
      秭: 1e24,
      穰: 1e28,
      沟: 1e32,
      涧: 1e36,
      正: 1e40,
      载: 1e44,
    };
    this.digits = [
      {
        value: 1000,
        char: '千',
      },
      {
        value: 100,
        char: '百',
      },
      {
        value: 10,
        char: '十',
      },
    ];

    this.bigNumbers = [
      {
        value: 1e44,
        char: '载',
      },
      {
        value: 1e40,
        char: '正',
      },
      {
        value: 1e36,
        char: '涧',
      },
      {
        value: 1e32,
        char: '沟',
      },
      {
        value: 1e28,
        char: '穰',
      },
      {
        value: 1e24,
        char: '秭',
      },
      {
        value: 1e20,
        char: '垓',
      },
      {
        value: 1e16,
        char: '京',
      },
      {
        value: 1e12,
        char: '兆',
      },
      {
        value: 1e8,
        char: '亿',
      },
      {
        value: 1e4,
        char: '万',
      },
    ];
    this.biggest =
      '九千九百九十九' +
      this.bigNumbers.map((n) => n.char).join('九千九百九十九') +
      '九千九百九十九';
    this.reg10K = /(.){1}(千|百|十)/g;
    this.reg = /(.+?)(万|亿|兆|京|垓|秭|穰|沟|涧|正|载)/g;
  }
  toChinese(num: number) {
    if (num > this.biggest_in_arabic) {
      throw new Error('Number to large, Unable to process!');
    }
    let res = '';
    this.bigNumbers.forEach((place) => {
      const current = Math.floor(num / place.value);

      if (current > 0) {
        const count = this.toChineseUnder10K(current);
        if (count.length > 1 && count[1] !== '千') {
          res += '零' + count + place.char;
        } else {
          res += count + place.char;
        }
        num -= current * place.value;
      }
    });

    const last = this.toChineseUnder10K(num);
    if (last.length === 1 || last[1] !== '千') {
      res = res + '零' + last;
    } else {
      res = res + last;
    }

    if (res.startsWith('零')) {
      res = res.slice(1);
    }
    return res.replace(/^一十/, '十');
  }

  toChineseUnder10K(num: number) {
    if (num > 9999) {
      return '';
    }
    let res = '';
    let currentIndex = 0;
    let precedingNumber = false;
    this.digits.forEach((place, index) => {
      const current = parseInt(`${num / place.value}`);
      if (current > 0) {
        if (index > currentIndex + 1 && precedingNumber) {
          res += this.options.zeroChar;
        }
        currentIndex = index;
        precedingNumber = true;
        res += this.standardNumbers[current] + place.char;
        num -= current * place.value;
      }
    });
    let last = this.standardNumbers[num];
    if (last) {
      if (res.length > 1 && !res.endsWith('十')) {
        last = '零' + last;
      }
      res += last;
    }
    return res;
  }

  toArabic(num: string) {
    let res = 0;
    let lastIndex = 0;
    let preLength = 0;
    let match;

    do {
      match = this.reg.exec(num);
      if (!match) {
        break;
      }
      const digits = match[1];
      preLength = digits.length + 1;
      const place = match[2];
      lastIndex = match.index;
      res += this.toArabicUnder10K(digits) * this.standardNumbersReverse[place];
    } while (match);

    if (num.length > lastIndex + preLength) {
      let reminder = num.slice(lastIndex + preLength);
      reminder = reminder.replace(/^零/, '');
      const under = this.toArabicUnder10K(reminder);
      res += under;
    }
    return res;
  }

  toArabicUnder10K(num: string) {
    if (num.length === 1) {
      return this.standardNumbersReverse[num];
    }
    if (num.length === 2 && num[0] === '十') {
      return 10 + this.standardNumbersReverse[num[1]];
    }
    let res = 0;
    let match;
    let lastIndex = 0;
    let place: string = '';
    do {
      match = this.reg10K.exec(num);
      if (!match) {
        break;
      }
      const digit = match[1];
      place = match[2];
      lastIndex = match.index;
      res += this.standardNumbersReverse[digit] * this.standardNumbersReverse[place];
    } while (match);
    if (num.length > lastIndex + 2) {
      if (num[lastIndex + 2] === '零') {
        res += this.standardNumbersReverse[num[lastIndex + 3]];
      } else {
        res +=
          (this.standardNumbersReverse[num[lastIndex + 2]] * this.standardNumbersReverse[place]) /
          10;
      }
    }
    return res;
  }
}

const chinese = new Chinese();

export { chinese };
