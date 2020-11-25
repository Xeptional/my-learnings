const quizData = [
	{
		question: "What is my best food?",
		a: "Rice",
		b: "Beans",
		c: "Pounded yam",
		d: "Plantain",
		correct: "c"
	},
	{
		question: "Who is the president of the United States?",
		a: "Judge Bush",
		b: "William Shakespear",
		c: "Martin Luther",
		d: "Donald Trump",
		correct: "d"
	},
	{
		question: "What is the most used programming language?",
		a: "Java",
		b: "Python",
		c: "C",
		d: "Javascript",
		correct: "a"
	},
	{
		question: "What university would i like to attend?",
		a: "Oxford",
		b: "Yale",
		c: "MIT",
		d: "Waterloo",
		correct: "c"
	},
	{
		question: "What model of car will i like to own?",
		a: "Bugatti",
		b: "Rolls ROyce",
		c: "Aston Martin",
		d: "Pagani",
		correct: "b"
	}
]
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers()

	const currentQuizData = quizData[currentQuiz];
	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;

}

function getSelected() {
	let answer = undefined;
	
	answerEls.forEach((answerEl) => {
		if(answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener('click', () => {
	//check to see the answer

	const answer = getSelected();

	console.log(answer);

	if(answer) {
		if(answer == quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
			<h2>You scored ${score}/${quizData.length}</h2>
			<button onclick="location.reload()">Reload</button
			`;
		}
	}
});