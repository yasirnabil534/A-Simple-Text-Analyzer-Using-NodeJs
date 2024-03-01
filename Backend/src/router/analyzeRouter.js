import { Router } from 'express';
import { setPathForUploader } from '../middleware/fileUploader.js';
const router = Router();
const upload = setPathForUploader();

import { count_words, count_characters, count_sentences, count_paragraphs, find_longest_words } from '../service/analyzeServices.js';

// ? API to count the number of words in a text
router.post('/words', upload.single('file'), count_words);

// ? API to count the number of characters in a text
router.post('/characters', upload.single('file'), count_characters);

// ? API to count the number of sentences in a text
router.post('/sentences', upload.single('file'), count_sentences);

// ? API to count the number of paragraphs in a text
router.post('/paragraphs', upload.single('file'), count_paragraphs);

// ? API to find the longest words in paragraphs
router.post('/longest-words', upload.single('file'), find_longest_words);

export default router;

