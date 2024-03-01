const fileInput = document.getElementById('fileInput');
const wordCountValue = document.getElementById('wordCountValue');
const charCountValue = document.getElementById('charCountValue');
const sentenceCountValue = document.getElementById('sentenceCountValue');
const paragraphCountValue = document.getElementById('paragraphCountValue');
const longestWordsValue = document.getElementById('longestWordsValue');
const wordButton = document.getElementById('word');
const charButton = document.getElementById('char');
const sentenceButton = document.getElementById('sentence');
const paragraphButton = document.getElementById('paragraph');
const longestButton = document.getElementById('longest');

wordButton.addEventListener('click', async () => {
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('http://localhost:3000/analyze/words', {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();

    wordCountValue.textContent = data.count;

    wordCount.style.display = 'block';
});

charButton.addEventListener('click', async () => {
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('http://localhost:3000/analyze/characters', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    charCountValue.textContent = data.count;

    charCount.style.display = 'block';
});

sentenceButton.addEventListener('click', async () => {
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('http://localhost:3000/analyze/sentences', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    sentenceCountValue.textContent = data.count;

    sentenceCount.style.display = 'block';
});

paragraphButton.addEventListener('click', async () => {
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('http://localhost:3000/analyze/paragraphs', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    paragraphCountValue.textContent = data.count;

    paragraphCount.style.display = 'block';
});

longestButton.addEventListener('click', async () => {
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('http://localhost:3000/analyze/longest-words', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    longestWordsValue.textContent = data.longestWords.join(', ');

    longestWords.style.display = 'block';
});