function checkAnswer(questionName, correctAnswer, pageNumber) {
    const answers = document.getElementsByName(questionName);
    let selectedAnswer;
    for (const answer of answers) {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    }
    const answerElement = document.getElementById(`answer-${questionName}`);
    if (selectedAnswer === correctAnswer) {
        answerElement.textContent = `Correct! (Refer to ${pageNumber})`;
    } else {
        answerElement.textContent = `Incorrect. The correct answer is ${correctAnswer}. (Refer to ${pageNumber})`;
    }
    answerElement.style.display = 'block';
}
