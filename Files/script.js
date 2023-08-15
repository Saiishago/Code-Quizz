const questions = [
    {
      question: "Which of the following is NOT a Logical Operator?",
      choices: ["&&", "<<", "!", "||"],
      correctAnswer: 1
    },
    {
      question: "What are the names of storage locations?",
      choices: ["Data types", "CSS", "Variables", "Functions"],
      correctAnswer: 2
    },
    {
      question: "How many continents are there?",
      choices: ["5", "3", "8", "7"],
      correctAnswer: 3
    },
    {
        question: "Which of the following is NOT a Semantic HTML tag?",
        choices: ["span", "article", "footer", "header"],
        correctAnswer: 0
    },
    {
        question: "What do we call a property that moves items as individuals?",
        choices: ["align-items", "align-self", "root", "order"],
        correctAnswer: 3
    },
    {
        question: "Which country has the most educated President?",
        choices: ["France", "Ghana", "Kenya", "Germany"],
        correctAnswer: 2
    },
    {
        question: "What do we call a language used to style a web page?",
        choices: ["SQL", "CSS", "JavaScript", "Python"],
        correctAnswer: 1
    },
    {
        question: "What do we call a variable that can hold more than one value",
        choices: ["Function", "Syntax","Array", "String"],
        correctAnswer: 2
    }
  ];

  let currentQuestion = 0;
  let timer;
  let timeLeft = 20;

  function displayQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    const choicesList = document.getElementById("choices");
    const choices = questions[currentQuestion].choices;
    choicesList.innerHTML = '';
    choices.forEach((choice, index) => {
      choicesList.innerHTML += `<li><button onclick="checkAnswer(${index})">${choice}</button></li>`;
    });
    startTimer();
  }

  function checkAnswer(choiceIndex) {
    clearInterval(timer);
    if (choiceIndex === questions[currentQuestion].correctAnswer) {
      document.getElementById("result").textContent = "Correct!";
    } else {
      document.getElementById("result").textContent = "Incorrect!";
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(displayQuestion, 1000);
    } else {
      document.getElementById("quiz").innerHTML = "<h2>Quiz completed!</h2>";
    }
  }

  function startTimer() {
    timeLeft = 20;
    timer = setInterval(function() {
      document.getElementById("result").textContent = `Time left: ${timeLeft} seconds`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("result").textContent = "Time's up!";
        currentQuestion++;
        if (currentQuestion < questions.length) {
          setTimeout(displayQuestion, 1000);
        } else {
          document.getElementById("quiz").innerHTML = "<h2>Quiz completed!</h2>";
        }
      }
    }, 1000);
  }


  displayQuestion();

function addScore(score, alias) {
    const scores = getScores();
    scores.push({ alias, score });
    scores.sort((a, b) => b.score - a.score);
    if (scores.length > 5) {
        scores.pop();
    }
    saveScores(scores);
}

function getScores() {
    const scoresJSON = localStorage.getItem('scores');
    return scoresJSON ? JSON.parse(scoresJSON) : [];
}

function saveScores(scores) {
    localStorage.setItem('scores', JSON.stringify(scores));
}

addScore("SKM", 1000);
addScore("ISL", 750);
addScore("RCL", 1200);

const highScores = getScores();
console.log("High Scores:");
highScores.forEach((entry, index) => {
    console.log(`${index + 1}. ${entry.alias}: ${entry.score}`);
});
