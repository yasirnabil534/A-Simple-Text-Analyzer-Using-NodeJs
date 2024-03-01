const request = require('supertest');
const { expect } = require('chai');
const app = require('../index');

describe('Text Analyzer API', () => {
  it('should return number of words', async () => {
    const response = await request(app).get('/words');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ count: 15 });
  });

  it('should return the number of characters', async () => {
    const response = await request(app).get('/characters');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ count: 87 });
  });

  it('should return the number of sentences', async () => {
    const response = await request(app).get('/sentences');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ count: 3 });
  });

  it('should return the number of paragraphs', async () => {
    const response = await request(app).get('/paragraphs');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ count: 3 });
  });

  it('should return the longest words in paragraphs', async () => {
    const response = await request(app).get('/longestWords');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ words: ['paragraphs', 'sentences', 'characters'] });
  });
});

