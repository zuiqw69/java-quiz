const quizData = [

    {
    question: "Which year did WW2 start?",
    a:"1939",
    b:"1945",
    c:"1940",
    d:"1942",
    correct: "a",
    },

    {
        question: "Which country suffered the most casualties?",
        a:"Italy",
        b:"Poland",
        c:"Russia",
        d:"Japan",
        correct: "c",
    },

    {
            question: "What was the most used infantry weapon in WW2?",
            a:"Sturmgewehr 44",
            b:"M1 Garand",
            c:"Walther p38",
            d:"Colt 1911",
            correct: "b",
    },

    {
        question: "Which country did not participate in WW2?",
        a:"France",
        b:"Hungary",
        c:"Germany",
        d:"Sweden",
        correct: "d",
    },

    {
        question: "Which year did WW2 end?",
        a:"1944",
        b:"1940",
        c:"1946",
        d:"1945",
        correct: "d",
    }


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
