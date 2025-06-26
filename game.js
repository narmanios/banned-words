window.onload = function () {
  console.log("game.js is loaded"); // This confirms the script is loaded

  let words = [
    "multicultural",
    "belong",
    "community",
    "pollution",
    "immigrants",
  ];
  let definitions = {
    multicultural:
      "..of, relating to, reflecting, or adapted to diverse cultures",
    belong: "A long, curved fruit with a yellow skin and soft, sweet flesh.",
    community:
      "A small, round fruit with a pit, typically red or black in color.",
    pollution:
      "A sweet, dark brown fruit with a pit, commonly grown in the Middle East.",
    immigrants:
      "A dark purple fruit from the elder tree, used in syrups and jams.",
  };
  console.log("Words:", words); // Logs the words array

  let guessedWords = [];
  let input;
  let definitionText = {};

  // p5.js setup function
  function setup() {
    console.log("setup() is running");

    // Create an 800x800 canvas
    let canvas = createCanvas(800, 800);
    console.log("Canvas created");

    // Attach canvas to the #game-container div
    canvas.parent("game-container");
    console.log("Canvas attached to game-container");

    // Set background color of canvas
    background(220);

    // Create input field for guessing
    input = createInput();
    input.position(20, height - 40);

    // Create a submit button
    let submitButton = createButton("Guess");
    submitButton.position(input.x + input.width, height - 40);
    submitButton.mousePressed(checkGuess);

    // Initialize definitionText with all definitions
    for (let word of words) {
      definitionText[word] = definitions[word];
    }
  }

  // p5.js draw function
  function draw() {
    background(220);

    // Display the words as blanks
    let yPos = 50;
    for (let word of words) {
      let displayWord = "";
      for (let i = 0; i < word.length; i++) {
        displayWord += "_ ";
      }

      // If the word is guessed, replace underscores with the word
      if (guessedWords.includes(word)) {
        displayWord = word;
        definitionText[word] = ""; // Clear the definition once guessed
      }

      // Show the word or the definition
      text(displayWord, width / 2, yPos);

      // Display the definition if the word hasn't been guessed
      if (!guessedWords.includes(word)) {
        textSize(16);
        textAlign(CENTER, CENTER);
        text(definitionText[word], width / 2, yPos + 30);
      }

      yPos += 80; // Space out each word and its definition
    }
  }

  // Check if the guessed word is in the list
  function checkGuess() {
    let guess = input.value().toLowerCase();
    if (words.includes(guess) && !guessedWords.includes(guess)) {
      guessedWords.push(guess);
    }
    input.value(""); // Clear the input field
  }
};
