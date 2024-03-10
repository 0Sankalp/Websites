function detectContent() {
    var inputText = document.getElementById('input-text').value;
    if (inputText.trim() === '') {
        alert('Please enter some text');
        return;
    }

    // You can add your AI detection logic here
    // For simplicity, let's assume a random detection result
    var isAI = Math.random() < 0.5;

    var resultElement = document.getElementById('result');
    var resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';

    if (isAI) {
        resultElement.textContent = 'AI-written content detected';
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = 'Human-written content detected';
        resultElement.style.color = 'green';
    }
}
