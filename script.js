const questions = [
    {
        question: "Who invented Javascript?",
        answers: [
            { text: "Charles Babbage", correct: false},
            { text: "Elon Musk", correct: false},
            { text: "Bredan Eich", correct: true},
            { text: "Anthony Tailor", correct: false},
        ]   
    },
    {
        question: "When was Twitter Invented?",
        answers: [
            { text: "March 21, 2006", correct: true},
            { text: "Febuary 5, 2002", correct: false},
            { text: "April 29, 2005", correct: false},
            { text: "August 7, 2003", correct: false},
        ]   
    },
    {
        question: "Who was the first African Artist to win a Grammy?",
        answers: [
            { text: "Sound Sultan", correct: false},
            { text: "Mariam Makeba", correct: true},
            { text: "Burna Boy", correct: false},
            { text: "Wizkid", correct: false},
        ]   
    },
    {
        question: "Who was the first Female Vice Chancellor in Nigeria?",
        answers: [
            { text: "Professor Flora Chukwuka", correct: false},
            { text: "Professor Elizabeth Jess", correct: false},
            { text: "Professor Grace Alele Williams", correct: true},
            { text: "Professor Comfort Lingard", correct: false},
        ]   
    },
    {
        question: "Who invented Figma?",
        answers: [
            { text: "William Austin", correct: false},
            { text: "Alison Eyo", correct: false},
            { text: "Collins Donye", correct: false},
            { text: "Dylan Field", correct: true},
        ]   
    },
    {
        question: "Who was the first Gospel artist in Nigeria?",
        answers: [
            { text: "Chinua Achebe", correct: false},
            { text: "Pastor E.A Adeboye", correct: false},
            { text: "Revd. Ransome-Kuti", correct: true},
            { text: "Onyeka Onwenu", correct: false},
        ]   
    },
    {
        question: "Who is famously known to have stopped the killing of twins in Nigeria?",
        answers: [
            { text: "Dr Martin Laison", correct: false},
            { text: "John Ogaga", correct: false},
            { text: "Mary Slessor", correct: true},
            { text: "King Augustine David", correct: false},
        ]   
    },
    {
        question: "Which of these men is known as Africa's richest man?",
        answers: [
            { text: "Aliko Dangote", correct: true},
            { text: "Victor Osimehn", correct: false},
            { text: "Olukoya Nelson", correct: false},
            { text: "Bobrisky", correct: false},
        ]   
    },
    {
        question: "Which of these is the largest state in Nigeria?",
        answers: [
            { text: "Abuja", correct: false},
            { text: "Niger State", correct: true},
            { text: "Akwa Ibom State", correct: false},
            { text: "Lagos State", correct: false},
        ]   
    },
    {
        question: "Who invented the Aeroplane?",
        answers: [
            { text: "Adakomola Murewa", correct: false},
            { text: "The Wright Brothers", correct: true},
            { text: "Charlie Stefan", correct: false},
            { text: "Damian Sandal", correct: false},
        ]   
    },
   
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})
startQuiz();