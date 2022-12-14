// variable for your questions (array of question objects)
const questions = [
	{
		title: 'Inside which HTML element do we put the Javascript?',
		choices: [
			'<js>',
			'<script>',
			'<javascript>',
			"<scripting>",
		],
		answer: '<script>',
	},
	{
		title: 'Where is the correct place to insert a JavaScript?',
		choices: ['In its own <div> section', 'The <body> section', 'The <head> section', 'The <footer> section'],
		answer: 'The <body> section',
	},
	{
		title: "How do you call a function called 'myFunction'?",
		choices: ['call function myFunction()', 'call myFunction()', 'var myFunction()', 'myFunction()'],
		answer: 'myFunction()',
	},
	{
		title: "How do you write 'Hello World' in an alert box?",
		choices: ["msg('Hello World')", "alertBox('Hello World')", "alert('Hello World')", "msgBox('Hello World')"],
		answer: "alert('Hello World')",
	},
    {
		title: 'How to write an IF statement in Javascript?',
		choices: ['if i = 5 then', 'if i = 5', 'if (i == 5)', 'if i == 5 then'],
		answer: 'if (i == 5)',
	},
    {
		title: 'How do you declare a Javascript variable?',
		choices: ['variable carName', 'v carName', 'v function (carName)', 'var carName'],
		answer: 'var carName',
	},
    {
		title: "What is the correct syntax for referring to an external script called 'xxx.js'",
		choices: ["<script src='xxx.js'", "<script name='xxx.js'", "<script href='xxx.js'", "<script link='xxx.js'"],
		answer:"<script src='xxx.js'",
	},
];

// variables to keep track of quiz state
// current question index should probably be global
let currentQuestionIndex = 0;

// total time (score)
let time = questions.length * 5;
let timerId;

// variables to reference DOM elements
const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start');
const highBtn = document.getElementById('highscores');
const homeBtn = document.getElementById('home-btn');
const clearBtn = document.getElementById('clear-btn');
var initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');
const highscores = document.getElementById('high-score-page');
const appearHsPage = document.getElementById('high-score-page')
const container = document.getElementById('container');
var hsShow = document.getElementById('hsShow');

var highscoresArr = []

function startQuiz() {
	// hide start screen
	const startScreenEl = document.getElementById('start-screen');
	startScreenEl.setAttribute('class', 'hide');

	// un-hide questions section
	questionsEl.removeAttribute('class');

	// start timer
	timerId = setInterval(clockTick, 1000);

	// show starting time
	timerEl.textContent = time;

	// get first question
	getQuestion();
}

function getQuestion() {
	// get current question object from array
	let currentQuestion = questions[currentQuestionIndex];

	// update title with current question
	const titleEl = document.getElementById('question-title');
	titleEl.textContent = currentQuestion.title;

	// clear out any old question choices
	choicesEl.innerHTML = '';

	// loop over choices
	for (let i = 0; i < currentQuestion.choices.length; i++) {
		// create new button for each choice
		let choice = currentQuestion.choices[i];
		let choiceNode = document.createElement('button');
		choiceNode.setAttribute('class', 'choice');
		choiceNode.setAttribute('value', choice);

		choiceNode.textContent = choice;

		// display on the page
		choicesEl.appendChild(choiceNode);
	}
}

function questionClick(event) {
	let buttonEl = event.target;

	// if the clicked element is not a choice button, do nothing.
	if (!buttonEl.matches('.choice')) {
		return;
	}

	// check if user guessed wrong
	if (buttonEl.value !== questions[currentQuestionIndex].answer) {
		// penalize time
		time -= 8;

		// show feedback
		if (time < 0) {
			// no such thing as negative time....
			time = 0;
		}

		// display new time on page
		timerEl.textContent = time;

		feedbackEl.textContent = 'Wrong!';
	} else {
		feedbackEl.textContent = 'Correct!';
	}

	// flash right/wrong feedback on page for half a second
	feedbackEl.setAttribute('class', 'feedback');
	setTimeout(function () {
		feedbackEl.setAttribute('class', 'feedback hide');
	}, 500);

	// move to next question
	currentQuestionIndex++;

	// check if we've run out of questions
	if (time <= 0 || currentQuestionIndex === questions.length) {
		quizEnd();
	} else {
		getQuestion();
	}
}

function quizEnd() {
	// stop timer
	clearInterval(timerId);

	// show end screen
	const endScreenEl = document.getElementById('end-screen');
	endScreenEl.removeAttribute('class');

	// show final score
	var finalScoreEl = document.getElementById('final-score');
	finalScoreEl.textContent = time;

	// hide questions section
	questionsEl.setAttribute('class', 'hide');

    // addition
    highscoresArr = ['finalScoreEl' + 'initialsEl'];

    // saves high score data, returns to home page
    submitBtn.onclick = saveScores

}

function clockTick() {
	// update time
	time--;
	timerEl.textContent = time;

	// check if user ran out of time
	if (time <= 0) {
		quizEnd();
	}
}

// leads to highscore leaderboard
function highscorePage () {

    // clear home page
    const startScreenEl = document.getElementById('start-screen');
	startScreenEl.setAttribute('class', 'hide');

    // add's html elements for high score section
    const appearPageEl = document.getElementById('high-score-page');
    appearPageEl.removeAttribute('class');

    // unstrings highscores Arr elements
    highscoresArr = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // for loop to create and display high scores and their contents
    for (let i = 0; i < highscoresArr.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = highscoresArr[i].initials + " - " + highscoresArr[i].time;
        hsShow.appendChild(listItem);
    }

}

// function to save scores
var saveScores = function() {
    // trims initials values to be singular 
    var initials = initialsEl.value.trim()
    
    // functions to set collect items of different types or empty brackets?
    highscoresArr = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // collects data from specific variables
    var newScore = {
        initials,
        time
    }

    // pushes newScore into empty High Score Array
    highscoresArr.push(newScore);
    
    // save's to local storage
    localStorage.setItem("highscores", JSON.stringify(highscoresArr));

    // reloads window page back to start page
    window.location.reload(); 
}

// clear's local storage
var clearScores = function() {
    localStorage.removeItem("highscores");
}

// just to send you back to home page
var returnHome = function() {
    window.location.reload();
}

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// user clicks on element containing choices
choicesEl.onclick = questionClick;

// user clicks on button to trigger high score page
highBtn.onclick = highscorePage;

// user clicks on button to return to start page
homeBtn.onclick = returnHome;

// user clicks on button to reset scores
clearBtn.onclick = clearScores;