import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js';
import 'dotenv/config';

const filePath = process.env.FILEPATH;

describe('Text Analyzer API', () => {
  it('should return number of words', async () => {
    const response = await request(app).post('/analyze/words').attach('file', filePath);
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ count: 16 });
  });

  it('should return the number of characters', async () => {
    const response = await request(app).post('/analyze/characters').attach('file', filePath);
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ count: 75 });
  });

  it('should return the number of sentences', async () => {
    const response = await request(app).post('/analyze/sentences').attach('file', filePath);
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ count: 2 });
  });

  it('should return the number of paragraphs', async () => {
    const response = await request(app).post('/analyze/paragraphs').attach('file', filePath);
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ count: 1 });
  });

  it('should return the longest words in paragraphs', async () => {
    const response = await request(app).post('/analyze/longest-words').attach('file', filePath);
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ longestWords: ['quick', 'brown', 'jumps', 'slept'] });
  });
});

