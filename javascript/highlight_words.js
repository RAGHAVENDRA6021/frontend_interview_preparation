// const str = "Ultimate JavaScript / FrontEnd Guide";
// const words = ['Front', 'End', 'JavaScript'];

// highlight(str, words);

// // "Ultimate <strong>JavaScript</strong> / <strong>FrontEnd</strong> Guide"

const highlight = (str, words) => {
  const unqWords = new Set(words);

  let strWords = str.split(" ");
  const result = [];
  for (let word of strWords) {
    console.log("word", word);
    if (unqWords.has(word)) result.push(`<strong>${word}</strong>`);
    else {
      for (let i = 1; i < word.length; i++) {
        let prefix = word.slice(0, i);
        let suffix = word.slice(i, word.length);

        if (unqWords.has(prefix) && unqWords.has(suffix)) {
          result.push(`<strong>${prefix}${suffix}</strong>`);
          break;
        } else if (unqWords.has(prefix) && !unqWords.has(suffix)) {
          result.push(`<strong>${prefix}</strong>${suffix}`);
          break;
        } else if (unqWords.has(suffix) && !unqWords.has(prefix)) {
          result.push(`${prefix}<strong>${suffix}</strong>`);
          break;
        }

        if (i === word.length - 1) result.push(word);
      }
    }
  }

  return result.join(" ");
};

const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];

console.log(highlight(str, words));
