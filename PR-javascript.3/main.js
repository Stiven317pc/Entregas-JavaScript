// preguntas y respuestas (tramposo el que vea las respuestas (￢_￢)  )
const questions = [
    {
      question: "¿En qué película aparece Venom?",
      options: ["Spider-man", "Venom", "Avatar", "Spider-Man 3", "Dragon Ball Super"],
      correctAnswer: "Venom"
    },

    {
      question: "¿Quién es el protagonista principal de Venom?",
      options: ["Peter Parker", "Eddie Brock", "Henry Cavill", "Tom Hardy"],
      correctAnswer: "Eddie Brock"
    },

    {
      question: "¿Qué clase de alienígena se fusiona con Eddie Brock?",
      options: ["Klyntar", "Venom", "Carnage", "Symbionte"],
      correctAnswer: "Symbionte"
    },

    {
      question: "¿En qué ciudad se desarrolla la mayor parte de Venom?",
      options: ["Nueva York", "Los Ángeles", "San Francisco", "Chicago"],
      correctAnswer: "San Francisco"
    },

    {
      question: "¿Qué villano es el principal antagonista de la primer pelicula de Venom?",
      options: ["Norman Osborn", "Carnage", "Dr. Octopus", "Carlton Drake"],
      correctAnswer: "Carlton Drake"
    },

    {
      question: "¿Cuál es el objetivo principal de John Wick?",
      options: ["Venganza", "Revenge", "Salvar al mundo", "Tomar el control de Nueva York"],
      correctAnswer: "Venganza"
    },

    {
      question: "¿Qué provoca la venganza de John Wick en la primera película?",
      options: [, "La pérdida de su coche", "El robo de su dinero", "La muerte de su perro", "La desaparición de su familia"],
      correctAnswer: "La muerte de su perro"
    },

    {
      question: "¿Cómo se llama el hotel en el que los asesinos se hospedan y que tiene reglas muy estrictas?",
      options: [, "The Ritz", "Hotel Continental", "The Assassin's Inn", "The Continental"],
      correctAnswer: "The Continental"
    },

    {
      question: "¿Qué habilidad destaca John Wick a lo largo de las películas?",
      options: ["Habilidades de combate cuerpo a cuerpo y con armas", "Gran habilidad para hackear computadoras", "Habilidades para conducir vehículos", "Habilidad para manipular la mente humana"],
      correctAnswer: "Habilidades de combate cuerpo a cuerpo y con armas"
    },

    {
      question: "¿En qué ciudad se desarrolla la saga de John Wick?",
      options: ["Los Ángeles", "Nueva York", "Chicago", "Roma"],
      correctAnswer: "Nueva York"
    },

    {
      question: "¿Qué película tiene como tema principal un grupo de héroes que luchan contra Thanos?",
      options: [, "Avatar", "Deadpool", "Avengers: Endgame", "Harry-Potter"],
      correctAnswer: "Avengers: Endgame"
    },

    {
      question: "¿Qué personaje se convierte en el Capitán América después de Avengers: Endgame?",
      options: ["Bucky Barnes", "Sam Wilson", "Tony Stark", "Steve Rogers"],
      correctAnswer: "Sam Wilson"
    },

    {
      question: "¿Qué héroe utiliza el guantelete de Thanos para deshacer el chasquido?",
      options: ["Thor", "Iron Man", "Hulk", "Rocket"],
      correctAnswer: "Hulk"
    },

    {
      question: "¿Cómo se llama la arma de Thor en Avengers: Endgame?",
      options: ["Stormbreaker", "Mjolnir", "Excalibur", "Thunderstrike"],
      correctAnswer: "Stormbreaker"
    },

    {
      question: "¿Quién sacrifica su vida para obtener la gema del alma en Avengers: Endgame?",
      options: ["Iron Man", "Black Widow", "Hawkeye", "Captain America"],
      correctAnswer: "Black Widow"
    },

    {
      question: "¿En qué película aparece el robot Optimus Prime?",
      options: ["Escuadron Suicida", "Black Panter", "Rapidos y Furiosos", "Transformers"],
      correctAnswer: "Transformers"
    },

    {
      question: "¿Quién es el líder de los Decepticons en las películas de Transformers?",
      options: ["Starscream", "Megatron", "Soundwave", "Shockwave"],
      correctAnswer: "Megatron"
    },

    {
      question: "¿Cuál es el nombre del planeta natal de los Autobots y Decepticons?",
      options: [, "Earth", "Mars", "Cybertron", "Pandora"],
      correctAnswer: "Cybertron"
    },

    {
      question: "¿Qué tipo de vehículo es el modo alternativo de Optimus Prime en Transformers?",
      options: [, "Coche deportivo", "Camión de carga", "Helicóptero", "Avión de combate"],
      correctAnswer: "Camión de carga"
    },
    
    {
      question: "¿Qué es lo que Bumblebee se convierte en en la primera película de Transformers?",
      options: ["Chevrolet Camaro", "Volkswagen Beetle", "Ford Mustang", "Dodge Charger"],
      correctAnswer: "Chevrolet Camaro"
    },  

    {
      question: "¿En qué película se viaja a través del espacio para salvar la humanidad?",
      options: ["Interstellar", "La Razon de Estar Contigo", "Cars", "Toy Story"],
      correctAnswer: "Interstellar"
    },

    {
      question: "¿Cuál es el nombre de la hija de Cooper en Interstellar?",
      options: [, "Amelia", "Murph", "Samantha", "Ellie"],
      correctAnswer: "Murph"
    },

    {
      question: "¿Qué astronauta viaja a través del agujero negro en Interstellar?",
      options: [, "Dr. Brand", "Case", "Cooper", "Mann"],
      correctAnswer: "Cooper"
    },

    {
      question: "¿Qué dispositivo se utiliza para comunicarse con los personajes a través del espacio-tiempo en Interstellar?",
      options: ["El libro de Murph", "La biblioteca cuántica", "La nave Endurance", "El reloj de Murph"],
      correctAnswer: "El reloj de Murph"
    },

    {
      question: "¿Qué tipo de robots acompañan a los astronautas en Interstellar?",
      options: ["TARS y CASE", "C-3PO y R2-D2", "HAL 9000 y TARS", "Robbie y Data"],
      correctAnswer: "TARS y CASE"
    },  

    {
      question: "¿Quién es el principal villano de Kung Fu Panda 1?",
      options: ["Shifu", "Po", "Master Oogway", "Tai Lung"],
      correctAnswer: "Tai Lung"
    },

    {
      question: "¿Cómo se llama el protagonista de Kung Fu Panda?",
      options: ["Po", "Shifu", "Tai Lung", "Mantis"],
      correctAnswer: "Po"
    },

    {
      question: "¿Quién es el maestro de Po en Kung Fu Panda?",
      options: ["Maestro Oogway", "Maestro Shifu", "Maestro Tigresa", "Maestro Grulla"],
      correctAnswer: "Maestro Shifu"
    },

    {
      question: "¿Qué animal es Po en Kung Fu Panda?",
      options: ["Tigre","Oso panda", "Grulla", "Gato"],
      correctAnswer: "Oso panda"
    },

    {
      question: "¿Cuáles son los Cinco Furiosos en Kung Fu Panda?",
      options: ["Tigresa, Oso, Víbora, Elefante, Mono", "Grulla, Mantis, Tigresa, Po, Mono", "Mantis, Víbora, Grulla, Elefante, Tigresa", "Tigresa, Grulla, Mantís, Víbora, Mono"],
      correctAnswer: "Tigresa, Grulla, Mantís, Víbora, Mono"
    },  

    {
      question: "¿Cuál es el nombre del personaje principal de Deadpool?",
      options: ["Peter Parker","Wade Wilson", "Tony Stark", "John Wick"],
      correctAnswer: "Wade Wilson"
    },

    {
      question: "¿Qué le sucede a Wade Wilson que lo convierte en Deadpool?",
      options: ["Es un experimento con armas", "Le inyectan el suero del supersoldado", "Es sometido a un experimento para curar su cáncer", "Es mordido por una araña radiactiva"],
      correctAnswer: "Es sometido a un experimento para curar su cáncer"
    },

    {
      question: "¿Quién interpreta a Wade Wilson/Deadpool en las películas?",
      options: ["Ryan Reynolds", "Hugh Jackman", "Chris Hemsworth", "Robert Downey Jr."],
      correctAnswer: "Ryan Reynolds"
    },

    {
      question: "¿Cuál es el poder principal de Deadpool?",
      options: ["Invisibilidad", "Superfuerza", "Regeneración rápida", "Control de mentes"],
      correctAnswer: "Regeneración rápida"
    },

    {
      question: "¿Qué héroe del universo X-Men hace una aparición en *Deadpool 2* para ayudar a Deadpool?",
      options: ["Colossus", "Cyclops", "Jean Grey", "Storm"],
      correctAnswer: "Colossus"
    }

  ];
  
  // Cargar las preguntas y respuestas en el DOM  ⸜(｡˃ ᵕ ˂ )⸝♡
  function loadQuestions() {
    const container = document.getElementById("question-container");
    questions.forEach((q, index) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
      questionElement.innerHTML = `
        <p>${q.question}</p>
        <ul class="answers">
          ${q.options.map(option => `
            <li>
              <input type="radio" name="question${index}" value="${option}" /> ${option}
            </li>
          `).join('')}
        </ul>
      `;
      container.appendChild(questionElement);
    });
  }
  
  function getSelectedAnswers() {
    const answers = [];
    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption) {
        answers.push(selectedOption.value);
      } else {
        answers.push(null); 
      }
    });
    return answers;
  }
  
  // Mostrar el resultado ( つ•̀ω•́)つ
  function showResult() {
    const selectedAnswers = getSelectedAnswers();
    let score = 0;
  
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Tu puntuación es: ${score} de ${questions.length}`;
    
    // Almacena el resultado en el localStorage
    localStorage.setItem("triviaResult", JSON.stringify({ score, total: questions.length }));
  }
  
  // Recuperar y mostrar el resultado almacenado
window.addEventListener("load", function() {
  const resultElement = document.getElementById("result");

  const storedResult = localStorage.getItem("triviaResult");

  if (storedResult) {
    const result = JSON.parse(storedResult);
    resultElement.textContent = `Tu puntuación anterior es: ${result.score} de ${result.total}`;
  } else {
    resultElement.textContent = "No se encontraron resultados almacenados.";
  }
});

  // Boton para enviar los resultados :D
  document.getElementById("boton").addEventListener("click", showResult);
  
  // Carga las preguntas cuando se carga la página
  loadQuestions();
  