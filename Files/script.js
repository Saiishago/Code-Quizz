const questions = [
    {
      question: "What is the capital of France?",
      choices: ["London", "Berlin", "Madrid", "Paris"],
      correctAnswer: 3
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      choices: ["Mars", "Venus", "Jupiter", "Neptune"],
      correctAnswer: 0
    }
    // Add more questions here
  ];

  let currentQuestion = 0;
  let timer;
  let timeLeft = 10; // Set the initial time limit in seconds

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
      setTimeout(displayQuestion, 1000); // Display next question after 1 second
    } else {
      document.getElementById("quiz").innerHTML = "<h2>Quiz completed!</h2>";
    }
  }

  function startTimer() {
    timeLeft = 10; // Reset the timer
    timer = setInterval(function() {
      document.getElementById("result").textContent = `Time left: ${timeLeft} seconds`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("result").textContent = "Time's up!";
        currentQuestion++;
        if (currentQuestion < questions.length) {
          setTimeout(displayQuestion, 1000); // Display next question after 1 second
        } else {
          document.getElementById("quiz").innerHTML = "<h2>Quiz completed!</h2>";
        }
      }
    }, 1000); // Update timer every second
  }

  // Start the quiz
  displayQuestion();