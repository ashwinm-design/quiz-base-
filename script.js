// Quiz Data - Questions for different difficulty levels
const quizzes = {
    easy: [
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            correct: 1,
            category: "Geography"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
            category: "Science"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correct: 1,
            category: "Math"
        },
        {
            question: "Who wrote Romeo and Juliet?",
            options: ["Marlowe", "Shakespeare", "Jonson", "Bacon"],
            correct: 1,
            category: "Literature"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            correct: 2,
            category: "Geography"
        },
        {
            question: "Which element has the symbol 'Au'?",
            options: ["Silver", "Gold", "Aluminum", "Argon"],
            correct: 1,
            category: "Science"
        },
        {
            question: "In what year did the Titanic sink?",
            options: ["1912", "1915", "1920", "1925"],
            correct: 0,
            category: "History"
        },
        {
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            correct: 2,
            category: "Math"
        },
        {
            question: "Which country is home to the kangaroo?",
            options: ["New Zealand", "Australia", "South Africa", "Brazil"],
            correct: 1,
            category: "Geography"
        },
        {
            question: "What is the chemical formula for water?",
            options: ["CO2", "H2O", "O2", "NaCl"],
            correct: 1,
            category: "Science"
        }
    ],
    medium: [
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: 2,
            category: "Geography"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
            correct: 1,
            category: "Art"
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 m/s", "150,000 m/s", "450,000 m/s", "600,000 m/s"],
            correct: 0,
            category: "Physics"
        },
        {
            question: "Which war lasted from 1939 to 1945?",
            options: ["WWI", "WWII", "Cold War", "Korean War"],
            correct: 1,
            category: "History"
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "Who is the author of 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Atticus Finch", "Mark Twain", "Ernest Hemingway"],
            correct: 0,
            category: "Literature"
        },
        {
            question: "What is the capital of Brazil?",
            options: ["Rio de Janeiro", "Salvador", "Brasília", "São Paulo"],
            correct: 2,
            category: "Geography"
        },
        {
            question: "How many bones does an adult human have?",
            options: ["186", "206", "226", "246"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
            correct: 2,
            category: "Geography"
        },
        {
            question: "Who invented the telephone?",
            options: ["Edison", "Graham Bell", "Tesla", "Marconi"],
            correct: 1,
            category: "History"
        }
    ],
    hard: [
        {
            question: "What is the Heisenberg Uncertainty Principle?",
            options: ["Energy conservation", "Cannot simultaneously know position and momentum", "Wave-particle duality", "Entropy always increases"],
            correct: 1,
            category: "Physics"
        },
        {
            question: "Which artist cut off a portion of his own ear?",
            options: ["Picasso", "Van Gogh", "Dalí", "Monet"],
            correct: 1,
            category: "Art"
        },
        {
            question: "What is the only mammal that cannot jump?",
            options: ["Sloth", "Hippopotamus", "Elephant", "Whale"],
            correct: 3,
            category: "Biology"
        },
        {
            question: "In what year did the Byzantine Empire fall?",
            options: ["1204", "1453", "1204", "1683"],
            correct: 1,
            category: "History"
        },
        {
            question: "What is the term for an organism that is genetically identical to another?",
            options: ["Mutant", "Clone", "Hybrid", "Variant"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "Who wrote 'One Hundred Years of Solitude'?",
            options: ["Jorge Luis Borges", "Gabriel García Márquez", "Mario Vargas Llosa", "Carlos Fuentes"],
            correct: 1,
            category: "Literature"
        },
        {
            question: "What is the capital of Kazakhstan?",
            options: ["Almaty", "Shymkent", "Nur-Sultan (Astana)", "Karaganda"],
            correct: 2,
            category: "Geography"
        },
        {
            question: "What is the Fahrenheit temperature at which water boils?",
            options: ["100°F", "180°F", "212°F", "273°F"],
            correct: 2,
            category: "Physics"
        },
        {
            question: "How many strings does a standard violin have?",
            options: ["4", "5", "6", "8"],
            correct: 0,
            category: "Music"
        },
        {
            question: "What is the only planet that rotates clockwise?",
            options: ["Venus", "Mercury", "Uranus", "Neptune"],
            correct: 0,
            category: "Astronomy"
        }
    ]
};

// State variables
let currentDifficulty = null;
let currentQuizIndex = 0;
let quizData = [];
let score = 0;
let answers = [];
let timeLeft = 30;
let timerInterval = null;
let answered = false;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const timerDisplay = document.getElementById('timer');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const progressBar = document.getElementById('progressBar');
const currentQuestionDisplay = document.getElementById('currentQuestion');
const totalQuestionsDisplay = document.getElementById('totalQuestions');

// Event Listeners
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        difficultyBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentDifficulty = btn.dataset.difficulty;
        startBtn.disabled = false;
    });
});

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Functions
function startQuiz() {
    quizData = [...quizzes[currentDifficulty]];
    currentQuizIndex = 0;
    score = 0;
    answers = [];
    
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    totalQuestionsDisplay.textContent = quizData.length;
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuizIndex >= quizData.length) {
        showResults();
        return;
    }

    answered = false;
    nextBtn.disabled = true;
    timeLeft = 30;
    const question = quizData[currentQuizIndex];

    currentQuestionDisplay.textContent = currentQuizIndex + 1;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectOption(index, question.correct);
        optionsContainer.appendChild(optionBtn);
    });

    updateProgressBar();
    startTimer();
}

function selectOption(selectedIndex, correctIndex) {
    if (answered) return;

    answered = true;
    clearInterval(timerInterval);

    const options = document.querySelectorAll('.option');
    options.forEach(btn => btn.disabled = true);

    const isCorrect = selectedIndex === correctIndex;

    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
    options[correctIndex].classList.add('correct');

    if (isCorrect) {
        score++;
    }

    answers.push({
        question: quizData[currentQuizIndex].question,
        selected: quizData[currentQuizIndex].options[selectedIndex],
        correct: quizData[currentQuizIndex].options[correctIndex],
        isCorrect: isCorrect,
        category: quizData[currentQuizIndex].category
    });

    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuizIndex++;
    loadQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 10) {
            timerDisplay.classList.add('warning');
        }
        if (timeLeft <= 5) {
            timerDisplay.classList.remove('warning');
            timerDisplay.classList.add('danger');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (!answered) {
                answered = true;
                const options = document.querySelectorAll('.option');
                options.forEach(btn => btn.disabled = true);
                
                const correctIndex = quizData[currentQuizIndex].correct;
                options[correctIndex].classList.add('correct');

                answers.push({
                    question: quizData[currentQuizIndex].question,
                    selected: 'No answer',
                    correct: quizData[currentQuizIndex].options[correctIndex],
                    isCorrect: false,
                    category: quizData[currentQuizIndex].category
                });

                nextBtn.disabled = false;
            }
        }
    }, 1000);
}

function updateProgressBar() {
    const progress = ((currentQuizIndex) / quizData.length) * 100;
    progressBar.style.width = progress + '%';
}

function showResults() {
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'block';

    const scorePercentage = Math.round((score / quizData.length) * 100);
    document.getElementById('scoreValue').textContent = scorePercentage;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('incorrectCount').textContent = quizData.length - score;
    document.getElementById('accuracy').textContent = scorePercentage + '%';

    let message = '';
    if (scorePercentage === 100) {
        message = "Perfect Score! You're a Master! 🏆";
    } else if (scorePercentage >= 80) {
        message = "Excellent! You did great! ⭐";
    } else if (scorePercentage >= 60) {
        message = "Good! Keep practicing! 📚";
    } else if (scorePercentage >= 40) {
        message = "Not bad! Study more! 💪";
    } else {
        message = "Keep trying! You'll do better next time! 🚀";
    }
    document.getElementById('resultMessage').textContent = message;

    // Generate review section
    const reviewSection = document.getElementById('reviewSection');
    reviewSection.innerHTML = '<h3>Review Your Answers</h3>';

    answers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <div class="review-question">Question ${index + 1}: ${answer.question}</div>
            <div class="review-answer">
                Your answer: <span class="${answer.isCorrect ? 'correct-label' : 'incorrect-label'}">${answer.selected}</span><br>
                ${!answer.isCorrect ? `Correct answer: <span class="correct-label">${answer.correct}</span><br>` : ''}
                Category: ${answer.category}
            </div>
        `;
        reviewSection.appendChild(reviewItem);
    });
}

function restartQuiz() {
    resultsScreen.style.display = 'none';
    startScreen.style.display = 'flex';
    
    difficultyBtns.forEach(btn => btn.classList.remove('selected'));
    startBtn.disabled = true;
    currentDifficulty = null;
    
    timerDisplay.classList.remove('warning', 'danger');
}
