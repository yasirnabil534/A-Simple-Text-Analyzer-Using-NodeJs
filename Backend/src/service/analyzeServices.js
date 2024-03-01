import { countWords, countCharacters, countSentences, countParagraphs, findLongestWords } from '../common/helperFunctions.js';
import fs from 'fs';
import 'dotenv/config';

const filePath = process.env.FILEPATH;

// * Service function to count words
const count_words = async (req, res) => {
    try {
        const text = fs.readFileSync(filePath, 'utf8');
        const count = countWords(text);
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// * Service function to count characters
const count_characters = async (req, res) => {
    try {
        const text = fs.readFileSync(filePath, 'utf8');
        const count = countCharacters(text);
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// * Service function to count sentences
const count_sentences = async (req, res) => {
    try {
        const text = fs.readFileSync(filePath, 'utf8');
        const count = countSentences(text);
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// * Service function to count paragraphs
const count_paragraphs = async (req, res) => {
    try {
        const text = fs.readFileSync(filePath, 'utf8');
        const count = countParagraphs(text);
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// * Service function to find the longest words in paragraphs
const find_longest_words = async (req, res) => {
    try {
        const text = fs.readFileSync(filePath, 'utf8');
        const longestWords = findLongestWords(text);
        res.status(200).json({ longestWords });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export {
    count_words,
    count_characters,
    count_sentences,
    count_paragraphs,
    find_longest_words,
};

