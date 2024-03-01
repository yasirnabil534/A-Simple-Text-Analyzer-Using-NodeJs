const express = require('express');
const router = express.Router();

const {
    countWords,
  countCharacters,
  countSentences,
  countParagraphs,
  findLongestWords,
} = require('../service/analyzeServices');

// ? API to count the number of words in a text
router.post('/words', (req, res) => {
  const { text } = req.body;
  const count = countWords(text);
  res.json({ count });
});

