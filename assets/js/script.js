const questionArr = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        choices: {
            a: "A. <js>",
            b: "B. <script>",
            c: "C. <javascript>",
            d: "D. <scripting>"
        },
        answer: "b"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: {
            a: "A. In its own <div> section",
            b: "B. The <body> section",
            c: "C. The <head> section",
            d: "D. The <footer> section"
        },
        answer: "b"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'",
        choices: {
            a: "A. <script src='xxx.js'",
            b: "B. <script name='xxx.js'",
            c: "C. <script href='xxx.js'",
            d: "D. <script link='xxx.js'",
        },
        answer: "a"
    },
    {
        question: "What is the correct way to write a Javascript Array?",
        choices: {
            a: "A. var colors = ['red', 'green', 'blue']",
            b: "B. var colors = 'red', 'green', 'blue'",
            c: "C. var colors = (1:'red', 2:'green', 3:'blue')",
            d: "D. var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        },
        answer: "a"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: {
            a: "A. msg('Hello World')",
            b: "B. alertBox('Hello World')",
            c: "C. alert('Hello World')",
            d: "D. msgBox('Hello World')"
        },
        answer: "c"
    },
    {
        question: "How do you create a function in Javascript?",
        choices: {
            a: "A. function = myFunction()",
            b: "B. function:myFunction()",
            c: "C. Function MyFunction()",
            d: "D. function myFunction()"
        },
        answer: "d"
    },
    {
        question: "How do you call a function called 'myFunction'?",
        choices: {
            a: "A. call function myFunction()",
            b: "B. call myFunction()",
            c: "C. myFunction()",
            d: "D. var myFunction()"
        },
        answer: "c"
    },
    {
        question: "How to write an IF statement in Javascript?",
        choices: {
            a: "A. if i = 5 then",
            b: "B. if (i == 5)",
            c: "C. if i = 5",
            d: "D. if i == 5 then"
        },
        answer: "b"
    },
    {
        question: "How can you add a comment in Javascript?",
        choices: {
            a: "A. // This is a comment",
            b: "B. <!-- This is a comment -->",
            c: "C. 'This is a comment",
            d: "D. *This is a comment*"
        },
        answer: "a"
    },
    {
        question: "How do you declare a Javascript variable?",
        choices: {
            a: "A. variable carName",
            b: "B. v carName",
            c: "C. v function (carName)",
            d: "D. var carName"
        },
        answer: "d"
    }
];

// variables to keep track of quiz state
// current question index should probably be global
let currentQuestionIndex = 0;

// total time (score)
let time = questions.length * 15;
let timerId;

// variables to reference DOM elements
const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start');
const initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');

function startQuiz() {
	// hide start screen
	// un-hide questions section
	// start timer
	// show starting time
	// get first question
}

function getQuestion() {
	// get current question object from array
	// update title with current question
	// clear out any old question choices
	// loop over choices
	// create new button for each choice
	// display on the page
}

function questionClick(event) {
	// if the clicked element is not a choice button, do nothing.
	// check if user guessed wrong
	// penalize time
	// show feedback
	// no such thing as negative time....
	// display new time on page
	// give user feedback for correct or incorrect guess
	// flash right/wrong feedback on page for half a second
	// move to next question
	// check if we've run out of questions
}

function quizEnd() {
	// stop timer
	// show end screen
	// show final score
	// hide questions section
}

function clockTick() {
	// update time
	// check if user ran out of time
}

// user clicks button to start quiz

// user clicks on element containing choices