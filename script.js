const questions = [
    {
        question: "What is transpiration?",
        answers: [
            "Transpiration is the process of water movement through a plant and its evaporation from aerial parts, primarily from the leaves.",
            "Transpiration is the process of photosynthesis in plants.",
            "Transpiration refers to the absorption of nutrients by plant roots.",
            "Transpiration is the movement of water from the soil to the roots."
        ],
        correctAnswer: 0
    },
    {
        question: "What do stomata allow to enter the plant?",
        answers: [
            "Water",
            "Nutrients",
            "Carbon dioxide",
            "Oxygen"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the main function of xylem?",
        answers: [
            "The main function of xylem is to transport water and minerals.",
            "To provide structural support to the plant.",
            "To store food for the plant.",
            "To facilitate photosynthesis in leaves."
        ],
        correctAnswer: 0
    },
    {
        question: "Can stomata close? Why is this important?",
        answers: [
            "Stomata only close at night for photosynthesis.",
            "Yes, stomata can close, and this is important for conserving water and regulating gas exchange.",
            "Stomata cannot close under any circumstances.",
            "Closing stomata increases water loss."
        ],
        correctAnswer: 1
    },
    {
        question: "What do phloem tissues transport?",
        answers: [
            "Sugars and other organic nutrients",
            "Oxygen and nitrogen",
            "Carbon dioxide",
            "Water and minerals"
        ],
        correctAnswer: 0
    },
    {
        question: "In which direction does xylem carry water?",
        answers: [
            "Upward, from roots to leaves",
            "Horizontally, between branches",
            "Inward, from the atmosphere to the roots",
            "Downward, from leaves to roots"
        ],
        correctAnswer: 0
    },
    {
        question: "How does transpiration benefit a plant?",
        answers: [
            "Transpiration helps plants absorb carbon dioxide for photosynthesis.",
            "Transpiration increases soil nutrient levels directly.",
            "Transpiration benefits a plant by facilitating water and nutrient uptake, cooling the plant, and maintaining turgor pressure.",
            "Transpiration prevents plants from losing water during drought."
        ],
        correctAnswer: 2
    },
    {
        question: "What happens to water absorbed by the roots?",
        answers: [
            "Water is only used for photosynthesis.",
            "Water absorbed by the roots is transported through the plant for various functions and may be lost through transpiration.",
            "Water is stored in the roots indefinitely.",
            "Water is converted into glucose immediately."
        ],
        correctAnswer: 1
    },
    {
        question: "Why is carbon dioxide important for plants?",
        answers: [
            "Carbon dioxide is harmful to plants and inhibits their growth.",
            "Plants do not require carbon dioxide for photosynthesis.",
            "Carbon dioxide is primarily used by animals for respiration.",
            "Carbon dioxide is important for plants because it is a key ingredient in photosynthesis, enabling them to produce energy and oxygen."
        ],
        correctAnswer: 3
    },
    {
        question: "How do phloem and xylem work together in a plant?",
        answers: [
            "Phloem absorbs sunlight while xylem stores carbon dioxide.",
            "Phloem transports nutrients and sugars, while xylem transports water and minerals, working together to support plant growth.",
            "Phloem transports water and minerals, while xylem transports nutrients and sugars.",
            "Phloem and xylem are both responsible for photosynthesis in plants."
        ],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let answersChosen = [];
let timer;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = `${currentQuestionIndex + 1}. ${question.question}`;
    const answersList = document.getElementById('answers');
    answersList.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.onclick = () => selectAnswer(index);
        answersList.appendChild(li);
    });
}

function selectAnswer(answerIndex) {
    answersChosen[currentQuestionIndex] = answerIndex;
}

function startTimer() {
    let timeLeft = 30;
    document.getElementById('time').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timer);

    let score = 0;
    let incorrectQuestions = [];

    questions.forEach((question, index) => {
        if (answersChosen[index] === question.correctAnswer) {
            score++;
        } else {
            incorrectQuestions.push(index + 1);
        }
    });

    document.getElementById('score').textContent = `Your score: ${score} / ${questions.length}`;
    document.getElementById('incorrect-questions').textContent = `You got the following questions wrong: ${incorrectQuestions.join(', ')}`;
    document.getElementById('result').style.display = 'block';
}

displayQuestion();
startTimer();
