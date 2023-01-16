export function getRandomQuestion(inputText) {
    var questions = ["What makes you think that way?", "How?", "Why?" , "Why do you think so?", "What makes you think so?", "So?", "What problem is this solving?", "Why does this occur?", "What is preventing me from solving this problem?"];
    var selectedQuestion = questions[Math.floor(Math.random()*questions.length)];
    return selectedQuestion;
}

