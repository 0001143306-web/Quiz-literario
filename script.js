// Lista completa de perguntas
const quizData = [
  // Fácil
  {
    question: "Qual é o nome do protagonista da série Diário de um Banana?",
    options: ["Rodrick Heffley", "Fregley", "Greg Heffley", "Manny Heffley"],
    answer: 2,
    difficulty: "facil",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9a27e0a-52f7-4cec-a932-b6246308a58e/djhq04t-03a48be7-1f24-4460-9a73-74af7a4f0874.png/v1/fill/w_894,h_894,q_70,strp/greg_heffley_by_j0j0999ozman_djhq04t-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5MCIsInBhdGgiOiIvZi9jOWEyN2UwYS01MmY3LTRjZWMtYTkzMi1iNjI0NjMwOGE1OGUvZGpocTA0dC0wM2E0OGJlNy0xZjI0LTQ0NjAtOWE3My03NGFmN2E0ZjA4NzQucG5nIiwid2lkdGgiOiI8PTE4OTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.H8B8RYQ0jZ9G0xeFtaerjzaoqPEuX5HuzY7Te_U2zhk"
  },
  {
    question: "Quem é o autor do livro '1984'?",
    options: ["Ray Bradbury", "Aldous Huxley", "George Orwell", "J.R.R. Tolkien"],
    answer: 2,
    difficulty: "facil",
    image: "https://uploads.onecompiler.io/43rztqcbh/43zm86mbw/juigfghiodgfdg.png"
  },
  {
    question: "Qual é o nome do leão que representa o bem nas Crônicas de Nárnia?",
    options: ["Aslan", "Frodo", "Edmund", "Lúcia"],
    answer: 0,
    difficulty: "facil",
    image: "https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/53/32/18832048.jpg"
  },
  {
    question: "Quem é o autor de 'A Revolução dos Bichos'?",
    options: ["H.G. Wells", "William Golding", "John Steinbeck", "George Orwell"],
    answer: 3,
    difficulty: "facil",
    image: "https://uploads.onecompiler.io/43rztqcbh/43zm86mbw/Design%20sem%20nome%20(1).png"
  },
  {
    question: "Qual é o nome do protagonista de 'O Apanhador no Campo de Centeio'?",
    options: ["Holden Caulfield", "Jay Gatsby", "Atticus Finch", "Hannibal Lecter"],
    answer: 0,
    difficulty: "facil",
    image: "https://m.media-amazon.com/images/I/71b3GDZMzSL._UF1000,1000_QL80_.jpg"
  },

  // Médio
  {
    question: "Em qual livro da saga 'Harry Potter' aparece o torneio Tribruxo?",
    options: ["Pedra Filosofal", "Câmara Secreta", "Prisioneiro de Azkaban", "Cálice de Fogo"],
    answer: 3,
    difficulty: "medio",
    image: "https://i.guim.co.uk/img/static/sys-images/Admin/BkFill/Default_image_group/2011/7/6/1309975962089/Daniel-Radcliffe-in-2002s-007.jpg?width=465&dpr=1&s=none&crop=none"
  },
  {
    question: "Quem escreveu 'O Morro dos Ventos Uivantes'?",
    options: ["Emily Brontë", "Jane Austen", "Charles Dickens", "Mark Twain"],
    answer: 0,
    difficulty: "medio",
    image: "https://uploads.onecompiler.io/43rztqcbh/43zm86mbw/Design%20sem%20nome%20(2).png"
  },
  {
    question: "Qual é o gênero do livro 'O Hobbit'?",
    options: ["Ficção Científica", "Fantasia", "Romance", "Histórico"],
    answer: 1,
    difficulty: "medio",
    image: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg"
  },
  {
    question: "Quem é o autor de 'As Crônicas de Gelo e Fogo'?",
    options: ["George R.R. Martin", "J.R.R. Tolkien", "Brandon Sanderson", "Patrick Rothfuss"],
    answer: 0,
    difficulty: "medio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL93Y8Ce4RpPQru1CLgFlb_tD0XN8Rt6P5A&s"
  },
  {
    question: "Quem escreveu 'Cem Anos de Solidão'?",
    options: ["Gabriel García Márquez", "Pablo Neruda", "Mario Vargas Llosa", "Jorge Luis Borges"],
    answer: 0,
    difficulty: "medio",
    image: "https://miro.medium.com/v2/1*CgJYjIRjTsfk9FI84Smxjg.jpeg"
  },

  // Difícil
  {
    question: "Qual é o título do livro escrito por Aldous Huxley que descreve uma sociedade distópica?",
    options: ["Fahrenheit 451", "Laranja Mecânica", "Admirável Mundo Novo", "1984"],
    answer: 2,
    difficulty: "dificil",
    image: "https://uploads.onecompiler.io/43rztqcbh/43zm86mbw/Design%20sem%20nome.png"
  },
  {
    question: "Em qual livro encontramos o personagem Atticus Finch?",
    options: ["O Sol é para Todos", "Matar um Rouxinol", "Os Miseráveis", "1984"],
    answer: 1,
    difficulty: "dificil",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLmIVWsHH-MveVC2W6x8d4e2Z1Wvnl8vRiQ&s"
  },
  {
    question: "No livro 'Coraline', o que há de diferente nos olhos das pessoas do 'outro mundo'?",
    options: ["Eles brilham no escuro", "São feitos de vidro", "São totalmente brancos", "São botões"],
    answer: 3,
    difficulty: "dificil",
    image: "https://m.media-amazon.com/images/I/91DZobBc1BL.jpg"
  },
  {
    question: "Quem é o autor de 'Os 13 Porquês'?",
    options: ["Suzanne Collins", "John Green", "Stephen Chbosky", "Jay Asher"],
    answer: 3,
    difficulty: "dificil",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLhwCGC1auZBWth4yadzbnyLenHZYovSa5dUYPMzrmCv4v_xh6Xa2LdtAf8rHPZLmPUmJTMgQE9CUWXRLFVSu86eKBNFSUGfTtFVvXsTw2PUOekuo1s_ILpOsFAIYv3wBjpPdLYtS-a_I/s1600/Os-13-Porques-Netflix-Livros-Personagens-Imgblog2.jpg"
  },
  {
    question: "Qual é o nome do autor de 'O Chamado de Cthulhu'?",
    options: ["R.L. Stine", "Junji Ito", "H.P. Lovecraft", "Stephen King"],
    answer: 2,
    difficulty: "dificil",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBoWF8e6vcmu2mvtMMdfffaGn6BHdE48EOg&s"
  },

  // Impossível
  {
    question: "Quem foi o verdadeiro autor do livro 'O Livro dos Espíritos'?",
    options: ["Allan Kardec", "Allan Poe", "Eusébio de Queirós", "Luís de Matos"],
    answer: 0,
    difficulty: "impossivel",
    image: "https://cms.resumodolivro.com/wp-content/uploads/2024/08/resumo-do-livro-O-Livro-dos-Espiritos.png"
  },
  {
    question: "Qual é o nome do personagem principal no livro 'Finnegans Wake' de James Joyce?",
    options: ["Stephen Dedalus", "Leopold Bloom", "Finnegan", "Humbert Humbert"],
    answer: 2,
    difficulty: "impossivel",
    image: "https://m.media-amazon.com/images/I/91EG2BmymZL._UF1000,1000_QL80_.jpg"
  },
  {
    question: "Quem escreveu 'A Montanha Mágica'?",
    options: ["Thomas Mann", "Franz Kafka", "Hermann Hesse", "Friedrich Nietzsche"],
    answer: 0,
    difficulty: "impossivel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOwnrY_fOg2Iey6bQHvfTiTh_rFGdCGG5xQ&s"
  },
  {
    question: "Qual desses autores nunca ganhou o Prêmio Nobel de Literatura?",
    options: ["Gabriel García Márquez", "J.K. Rowling", "Ernest Hemingway", "Toni Morrison"],
    answer: 1,
    difficulty: "impossivel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrqBNiwVDCeVPgOAf5tha1LV7Lw0ASxbsww&s"
  },
  {
    question: "Quem traduziu a Bíblia para o português pela primeira vez?",
    options: ["João Ferreira de Almeida", "Padre Antônio Vieira", "Alexandre Herculano", "José de Anchieta"],
    answer: 0,
    difficulty: "impossivel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNMsju7WgcBEdZq_yGfMVNUmjs4mTXy169A&s"
  }
];

// ------------------- Quiz Logic -------------------
const menu = document.getElementById('menu');
const startButton = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz');
const difficultyLabel = document.getElementById('difficulty');
const questionNumberElement = document.getElementById('question-number');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButtonContainer = document.getElementById('next-button');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const questionImage = document.getElementById('question-image');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', () => {
  menu.style.display = 'none';
  quizContainer.style.display = 'flex';
  startQuiz();
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.innerText = `Pontuação: ${score}`;
  nextButtonContainer.style.display = 'none';
  showQuestion();
}

function showQuestion() {
  const q = quizData[currentQuestionIndex];

  difficultyLabel.innerText = q.difficulty.toUpperCase();
  difficultyLabel.className = 'difficulty-label';
  difficultyLabel.classList.add(`difficulty-${q.difficulty}`);

  questionNumberElement.innerText = `Questão ${currentQuestionIndex + 1} de ${quizData.length}`;
  questionElement.innerText = q.question;

  if (q.image) {
    questionImage.src = q.image;
    questionImage.alt = `Imagem: ${q.question}`;
    questionImage.style.display = '';
  } else {
    questionImage.style.display = 'none';
  }

  answerButtons.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.addEventListener('click', () => selectAnswer(idx));
    answerButtons.appendChild(btn);
  });

  nextButtonContainer.style.display = 'none';
}

function selectAnswer(selectedIndex) {
  const current = quizData[currentQuestionIndex];
  const buttons = answerButtons.querySelectorAll('button');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === current.answer) btn.style.backgroundColor = '#4CAF50';
    else if (idx === selectedIndex) btn.style.backgroundColor = '#F44336';
  });

  if (selectedIndex === current.answer) {
    score++;
    scoreDisplay.innerText = `Pontuação: ${score}`;
  }

  nextButtonContainer.style.display = 'block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) showQuestion();
  else showFinalScore();
});

function showFinalScore() {
  
  // Crie um novo objeto de áudio, passando o caminho do arquivo
const som = new Audio('https://www.youtube.com/watch?v=ZXK427oXjn8');

// Chame o método play() para reproduzir
som.play();

  difficultyLabel.innerText = '';
  questionNumberElement.innerText = '';

  // Esconde a imagem da última pergunta
  questionImage.style.display = 'none';

  // Usa crases para template literal
  questionElement.innerText = `Você marcou ${score} de ${quizData.length}.`;

  let message = '';
  if (score <= 5) {
    message = ' Que pena! Continue tentando.';
  } else if (score <= 10) {
    message = ' Bom trabalho!';
  } else if (score <= 15) {
    message = ' Muito bem! Você conhece bastante.';
  } else if (score < quizData.length) {
    message = ' Excelente! Quase um mestre dos livros!';
  } else {
    message = ' Parabéns! Mestre dos livros!';
  }
  questionElement.innerText += message;
  answerButtons.innerHTML = '';
  nextButtonContainer.style.display = 'none';
}


