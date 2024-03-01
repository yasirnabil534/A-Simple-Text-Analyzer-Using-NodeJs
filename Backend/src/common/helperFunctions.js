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

// ^ Function to find the longest words in paragraphs
function findLongestWords(text) {
    const paragraphs = text.split(/\n\s*\n/);
    const longestWords = paragraphs.map(paragraph => {
        const words = paragraph.split(/\s+/);
        return words.reduce((longest, current) => {
            return current.length > longest.length ? current : longest;
        }, '');
    });
    return longestWords;
}

module.exports = {
    countWords,
    countCharacters,
    countSentences,
    countParagraphs,
    findLongestWords,
};

