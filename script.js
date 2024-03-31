document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const question = document.getElementById('question').value;
    alert(`Thank you for submitting your question: "${question}"`);

    // Here you would typically send the question to a server
    // For this example, we'll just clear the input field
    document.getElementById('question').value = '';
});
