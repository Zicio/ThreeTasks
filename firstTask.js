export default class StringManager {
  static getLowerCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  static fixWhitespace(string) {
    let newString = string.replace(/\s+/g, " ").trim();
    newString = newString.replace(/\s*([.,!?:;])\s*/g, `$1 `);
    return newString;
  }

  static getNumberOfWords(string) {
    return string.match(/[a-zA-Zа-яА-я0-9]+/g).length;
  }

  static getINumberOfUniqueWords(string) {
    const obj = {};
    const wordsArr = string.toLowerCase().match(/[a-zA-Zа-яА-я0-9]+/g);
    for (const word of wordsArr) {
      word in obj ? (obj[word] += 1) : (obj[word] = 1);
    }
    return obj;
  }
}
