module.exports = (str) => {
     function getVowels(str) {
        var m = str.match(/[aeiou]/gi);
        return m === null ? 0 : m.length;
      }    
      return getVowels(str);
}
