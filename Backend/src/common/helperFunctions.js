// ^ Function to count words
function countWords(text) {
    return text.split(/\s+/).length;
  }
  
  // ^ Function to count characters
  function countCharacters(text) {
    return text.length;
  }
  
  // ^ Function to count sentences
  function countSentences(text) {
    return text.split(/[.!?]+/).length - 1;
  }
  
  // ^ Function to count paragraphs
  function countParagraphs(text) {
    return text.split(/\n\s*\n/).length;
  }

  // ^ Function to check if char is an alphabet
  function isAlpha(char) {
    return /[a-zA-Z]/.test(char);
  }
  
  // ^ Function to find the longest words in paragraphs
  function findLongestWords(text) {
    let longestLength = 0, length = 0, state = 1;
    for (let i = 0; i < text.length; i++) {
      if (!isAlpha(text[i])) {
        longestLength = Math.max(longestLength, length);
        length = 0;
      } else {
        length++;
      }
    }
    const words = text.split(/\W+/);
    const longestWords = words.filter((current) => {
      return current.length === longestLength;
    });

    return longestWords;
  }
  
  export {
    countWords,
    countCharacters,
    countSentences,
    countParagraphs,
    findLongestWords,
  };
  
  