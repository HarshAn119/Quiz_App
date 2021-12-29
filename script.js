const quizData = [
  {
    question: "Who is spider-man?",
    a: "Obiwan Kanobi",
    b: "Norman Osborn",
    c: "J.Jonah Jameson",
    d: "Unknown",
    correct: "d",
  },
  {
    question: "What caused Multiverse of Madness?",
    a: "Doctor Strange",
    b: "Wanda Maximoff",
    c: "Loki Odinson",
    d: "He who remains",
    correct: "a",
  },
  {
    question: "Is black panther alive?",
    a: "Yes",
    b: "No",
    c: "Hell YEAH !!!",
    d: "Seriously?",
    correct: "c",
  },
  {
    question: "What is the name of Thor's Hammer?",
    a: "Mjolnir",
    b: "Groot",
    c: "Thunder",
    d: "Johnathan",
    correct: "d",
  },
  {
    question: "What is the catch-phrase of Spiderman?",
    a: "Friendly neighbourhood hero",
    b: "Strongest Avenger",
    c: "I'm Batman",
    d: "Weeeeeeee",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const quesEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit_btn");

let curr = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselect();
  const currQ = quizData[curr];

  quesEl.innerHTML = currQ.question;
  a_text.innerHTML = currQ.a;
  b_text.innerHTML = currQ.b;
  c_text.innerHTML = currQ.c;
  d_text.innerHTML = currQ.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselect() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
}

submit.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[curr].correct) score++;

    curr++;
    if (curr < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
        <h2>You answered correctly at 
        ${score}/${quizData.length} 
        questions</h2>
        
        <button onclick="location.reload()"
        >Restart</button>
      `;
    }
  }
});
