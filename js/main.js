// js/main.js
function goBack() {
    // Hide the result container
    const resultContainer = document.getElementById('resContainer');
    resultContainer.style.display = 'none';

    // Clear the input field
    document.getElementById('urlInput').value = '';
}