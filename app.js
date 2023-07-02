let quizzes = [
    [
        {
            "question": "What is the largest ocean on Earth?",
            "answers": [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
        ],
        "correctAnswer": "Pacific Ocean"
      },
      {
          "question": "What is the tallest tree species in the world?",
        "answers": ["Redwood", "Banyan", "Oak", "Pine"],
        "correctAnswer": "Redwood"
      },
      {
        "question": "What is the world's most spoken language?",
        "answers": ["English", "Mandarin Chinese", "Spanish", "Hindi"],
        "correctAnswer": "Mandarin Chinese"
      }
    ],
    [
      {
        "question": "Who is known as the \"Father of Physics\"?",
        "answers": [
          "Albert Einstein",
          "Isaac Newton",
          "Galileo Galilei",
          "Niels Bohr"
        ],
        "correctAnswer": "Galileo Galilei"
      },
      {
        "question": "What is the main ingredient in guacamole?",
        "answers": ["Avocado", "Tomato", "Onion", "Lime"],
        "correctAnswer": "Avocado"
      },
      {
        "question": "Which animal is capable of true flight?",
        "answers": ["Bat", "Butterfly", "Penguin", "Kangaroo"],
        "correctAnswer": "Bat"
      }
    ],
    [
      {
        "question": "What is the largest planet in our solar system?",
        "answers": ["Earth", "Mars", "Jupiter", "Saturn"],
        "correctAnswer": "Jupiter"
      },
      {
        "question": "Which artist painted the \"Starry Night\"?",
        "answers": [
          "Vincent van Gogh",
          "Pablo Picasso",
          "Claude Monet",
          "Salvador Dalí"
        ],
        "correctAnswer": "Vincent van Gogh"
      },
      {
        "question": "What is the main component of air?",
        "answers": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
        "correctAnswer": "Nitrogen"
      }
    ],
    [
      {
        "question": "Which year did World War II end?",
        "answers": ["1942", "1944", "1945", "1947"],
        "correctAnswer": "1945"
      },
      {
        "question": "What is the capital of France?",
        "answers": ["Paris", "Berlin", "Madrid", "Rome"],
        "correctAnswer": "Paris"
      },
      {
        "question": "What is the largest mammal on Earth?",
        "answers": ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        "correctAnswer": "Blue Whale"
      }
    ],
    [
      {
        "question": "Which planet is closest to the Sun?",
        "answers": ["Mars", "Venus", "Mercury", "Saturn"],
        "correctAnswer": "Mercury"
      },
      {
        "question": "What is the currency of Japan?",
        "answers": ["Yen", "Euro", "Dollar", "Pound"],
        "correctAnswer": "Yen"
    },
      {
        "question": "Who painted the Mona Lisa?",
        "answers": [
          "Pablo Picasso",
          "Leonardo da Vinci",
          "Vincent van Gogh",
          "Michelangelo"
        ],
        "correctAnswer": "Leonardo da Vinci"
      }
    ],
    [
      {
        "question": "What is the chemical symbol for gold?",
        "answers": ["Au", "Ag", "Fe", "Cu"],
        "correctAnswer": "Au"
      },
      {
        "question": "Which country is known for inventing the pizza?",
        "answers": ["Italy", "United States", "Spain", "France"],
        "correctAnswer": "Italy"
      },
      {
        "question": "What is the tallest mountain in the world?",
        "answers": [
          "Mount Everest",
          "Mount Kilimanjaro",
          "Mount Fuji",
          "Mount McKinley"
        ],
        "correctAnswer": "Mount Everest"
      }
    ],
    [
      {
        "question": "What is the capital of Australia?",
        "answers": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        "correctAnswer": "Canberra"
      },
      {
        "question": "Which planet is also known as the Red Planet?",
        "answers": ["Venus", "Jupiter", "Mars", "Neptune"],
        "correctAnswer": "Mars"
      },
      {
        "question": "What is the main ingredient in a traditional Greek moussaka dish?",
        "answers": ["Eggplant", "Lamb", "Potato", "Zucchini"],
        "correctAnswer": "Eggplant"
      }
    ],
    [
      {
        "question": "Which planet is known as the \"Red Planet\"?",
        "answers": ["Earth", "Mars", "Venus", "Mercury"],
        "correctAnswer": "Mars"
      },
      {
        "question": "What is the largest desert in the world?",
        "answers": [
          "Sahara Desert",
          "Arabian Desert",
          "Gobi Desert",
          "Antarctic Desert"
        ],
        "correctAnswer": "Sahara Desert"
      },
      {
        "question": "Who wrote the play \"Romeo and Juliet\"?",
        "answers": [
          "William Shakespeare",
          "Charles Dickens",
          "Jane Austen",
          "Mark Twain"
        ],
        "correctAnswer": "William Shakespeare"
      }
    ],
    [
      {
        "question": "Which element has the symbol \"Fe\" on the periodic table?",
        "answers": ["Iron", "Fluorine", "Helium", "Lead"],
        "correctAnswer": "Iron"
      },
      {
        "question": "What is the chemical formula for water?",
        "answers": ["H2O", "CO2", "NaCl", "O2"],
        "correctAnswer": "H2O"
      },
      {
        "question": "Which country is the largest producer of coffee in the world?",
        "answers": ["Brazil", "Colombia", "Ethiopia", "Vietnam"],
        "correctAnswer": "Brazil"
      }
    ],
    [
      {
        "question": "What is the most abundant gas in Earth's atmosphere?",
        "answers": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
        "correctAnswer": "Nitrogen"
      },
      {
        "question": "Who is the author of the \"Harry Potter\" book series?",
        "answers": [
          "J.K. Rowling",
          "Stephen King",
          "Dan Brown",
          "George R.R. Martin"
        ],
        "correctAnswer": "J.K. Rowling"
      },
      {
        "question": "Which planet is known as the Red Planet?",
        "answers": ["Mars", "Venus", "Jupiter", "Neptune"],
        "correctAnswer": "Mars"
      }
    ]
]
const quizSelector = document.getElementById("quiz-selector");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answerButtonContainer = document.getElementById("answer-buttons-container");
const resultContainer = document.getElementById("results-container");

class Quiz{
  constructor(questions){
    this.questions = Quiz.shuffleArray(questions);
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.displayQuestion();
  }
  displayQuestion(){
    answerButtonContainer.innerHTML = "";
    const currentQuestion = this.questions[this.currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    const answers = Quiz.shuffleArray(currentQuestion.answers);
    answers.forEach((answer) => {
      const button = document.createElement("button");
      button.classList = ["answer-button"];
      button.textContent = answer;
      button.addEventListener("click", this.checkAnswer.bind(this));
      answerButtonContainer.appendChild(button);
    });
  }

  checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      this.score++;
    }

    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.questions.length) {
        this.displayQuestion();
      } else {
        this.showResult();
      }
  }

  showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `
          <h2>Quiz Result</h2>
          <p>You scored ${this.score} out of ${this.questions.length} questions</p>
          <button id="reload-quiz">Reload All quiz</button>
      `;

      document.getElementById("reload-quiz").addEventListener("click", () => {
        quizContainer.style.display = "none";
        resultContainer.style.display = "none";
        quizSelector.style.display = "flex";
      });
  }
  static shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }
}

const loadQuiz = (questions) => {
  const quiz = new Quiz(questions);
  quizSelector.style.display = "none";
  quizContainer.style.display = "block";

}

const loadAllQuiz = () => {
    quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement("div");
        quizCard.classList = ["quiz-card"];
        quizCard.innerText = "Quiz " + (index + 1);
        quizCard.addEventListener("click", () => loadQuiz(quiz));
        quizSelector.appendChild(quizCard);
    });
}  
  
loadAllQuiz();