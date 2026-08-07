window.onload = function () {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var categories; // Array of topics
  var chosenCategory; // Selected catagory
  var getHint; // Word getHint
  var word; // Selected word
  var originalWord; // Original word before replacing spaces with hyphens
  var guess; // Geuss
  var geusses = []; // Stored geusses
  var lives; // Lives
  var counter; // Count correct geusses
  var space; // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Topic: Social Justice & Advocacy";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Topic: Equity";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Topic: Cultural Identiy";
    } else if (chosenCategory === categories[3]) {
      catagoryName.innerHTML = "Topic: Health & Well Being";
    } else if (chosenCategory === categories[4]) {
      catagoryName.innerHTML = "Topic: Environment & Societal Issues ";
    } else if (chosenCategory === categories[5]) {
      catagoryName.innerHTML = "Topic: Bias & Discrimination";
    } else if (chosenCategory === categories[6]) {
      catagoryName.innerHTML = "Topic: Politics & Policy";
    } else if (chosenCategory === categories[7]) {
      catagoryName.innerHTML = "Topic: Gender & Sexuality";
    } else if (chosenCategory === categories[8]) {
      catagoryName.innerHTML = "Topic: Social Identity & Marginalization";
    }
  };

  // Create geusses ul
  result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space += 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    if (counter + space === geusses.length) {
      showLives.innerHTML =
        "<span style='color: red;'>You guessed the banned word(s)!</span>";
    }
  };

  // Animate man
  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  };

  // Hangman
  canvas = function () {
    // myStickman = document.getElementById("stickman");
    // context = myStickman.getContext("2d");
    // context.beginPath();
    // context.strokeStyle = "#fff";
    // context.lineWidth = 2;
  };

  head = function () {
    // myStickman = document.getElementById("stickman");
    // context = myStickman.getContext("2d");
    // context.beginPath();
    // context.arc(60, 25, 10, 0, Math.PI * 2, true);
    // context.stroke();
  };

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    // context.moveTo($pathFromx, $pathFromy);
    // context.lineTo($pathTox, $pathToy);
    // context.stroke();
  };

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];

  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = word.indexOf(geuss);
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    };
  };

  // Play
  play = function () {
    categories = [
      [
        "abortion",
        "activism",
        "activists",
        "advocacy",
        "advocate",
        "advocates",
        "affirming care",
        "allyship",
        "anti-racism",
        "antiracist",
        "belong",
        "commercial sex worker",
        "community",
        "community diversity",
        "community equity",
        "feminism",
        "hate",
        "hate speech",
        "inclusion",
        "inclusive",
        "inclusive leadership",
        "inclusiveness",
        "inclusivity",
        "increase diversity",
        "increase the diversity",
        "promote",
        "promote diversity",
        "promoting diversity",
        "oppression",
        "oppressive",
        "social justice",
        "victim",
        "victims",
      ],
      [
        "accessible",
        "accessibility",
        "all-inclusive",
        "enhance the diversity",
        "enhancing diversity",
        "equal opportunity",
        "equality",
        "equitable",
        "equitableness",
        "equity",
        "diversity",
        "diversity and inclusion",
        "diversity/equilty",
      ],
      [
        "assigned at birth",
        "assigned female at birth",
        "assigned male at birth",
        "biologically female",
        "biologically male",
        "BIPOC",
        "Black",
        "black and latinx",
        "community diversity",
        "continuum",
        "cultural competence",
        "cultural differences",
        "cultural heritage",
        "cultural relevance",
        "cultural sensitivity",
        "culturally appropriate",
        "culturally responsive",
        "ethnicity",
        "expression",
        "gender",
        "gender based",
        "gender based violence",
        "gender diversity",
        "gender identity",
        "gender ideology",
        "gender-affirming care",
        "genders",
        "Latinx",
        "LGBT",
        "LGBTQ",
        "minorities",
        "minority",
        "minority serving institution",
        "multicultural",
        "Native American",
        "non-binary",
        "nonbinary",
        "race",
        "race and ethnicity",
        "racial",
        "racial diversity",
        "racial identity",
        "racial inequality",
        "racial justice",
        "racism",
        "sociocultural",
        "status",
      ],
      [
        "autism",
        "barrier",
        "barriers",
        "breastfeed + people",
        "breastfeed + person",
        "Cancer Moonshot",
        "chestfeed + people",
        "chestfeed + person",
        "clean energy",
        "climate crisis",
        "climate science",
        "Covid-19",
        "dietary guidelines",
        "disabilities",
        "disability",
        "disabled",
        "fetus",
        "fluoride",
        "mental health",
        "obesity",
        "opioids",
        "peanut allergies",
        "people + uterus",
        "people-centered care",
        "person-centered",
        "person-centered care",
        "pregnant people",
        "pregnant person",
        "pregnant persons",
        "special populations",
        "stem cell or fetal tissue research",
        "trauma",
        "traumatic",
        "ultraprocessed foods",
      ],
      [
        "barrier",
        "barriers",
        "clean energy",
        "climate crisis",
        "climate science",
        "commercial sex worker",
        "environmental justice",
        "environmental quality",
        "pollution",
        "social justice",
      ],
      [
        "bias",
        "biased",
        "biased toward",
        "biases",
        "biases towards",
        "confirmation bias",
        "discriminated",
        "discrimination",
        "discriminatory",
        "disparity",
        "implicit bias",
        "implicit biases",
        "prejudice",
        "stereotype",
        "stereotypes",
        "systemic",
        "systemically",
        "unconscious bias",
      ],
      [
        "at risk",
        "elderly",
        "excluded",
        "exclusion",
        "marginalize",
        "marginalized",
        "most risk",
        "privilege",
        "privileges",
        "segregation",
        "sense of belonging",
        "status",
        "underappreciated",
        "underprivileged",
        "underrepresentation",
        "underrepresented",
        "underserved",
        "undervalued",
        "vulnerable populations",
        "woman",
        "women",
        "women and underrepresented",
      ],
      [
        "female",
        "females",
        "feminism",
        "gender",
        "gender based",
        "gender diversity",
        "gender identity",
        "gender ideology",
        "gender-affirming care",
        "genders",
        "LGBT",
        "LGBTQ",
        "male dominated",
        "men who have sex with men",
        "non-binary",
        "nonbinary",
        "pronoun",
        "pronouns",
        "sexual preferences",
        "sexuality",
        "trans",
        "transgender",
        "transsexual",
      ],
      [
        "DEI",
        "DEIA",
        "DEIAB",
        "DEIJ",
        "entitlement",
        "evidence-based",
        "ideology",
        "discussion of federal policies",
        "disparity",
        "discrimination",
        "racial justice",
        "racial justice",
        "segregation",
        "topics of federal investigations",
        "topics that have received attention from Congress",
        "topics that have received widespread or critcial media attention",
        "polarization",
        "political",
        "science-based",
        "social justice",
        "identity",
        "immigrants",
        "marginalized",
        "discriminated",
      ],
    ];
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    originalWord = word;
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  };

  play();

  // Hint

  hint.onclick = function () {
    hints = [
      [
        "related to terminating pregnancy rights and debates",
        "general campaigning or organizing for change",
        "people who campaign or organize for causes",
        "public support for a cause",
        "a person who speaks or acts in support of a cause",
        "multiple people who speak or act in support of a cause",
        "medical care that supports transition",
        "the practice of being a supportive ally",
        "opposing prejudice in all forms",
        "a person who opposes prejudice",
        "feeling of being accepted and included",
        "a person engaged in paid sexual services",
        "a group of people living together with shared values",
        "variety of cultures within a group",
        "fairness within a group of people",
        "movement for women's rights and equality",
        "intense dislike or hostility",
        "abusive or threatening language based on prejudice",
        "the practice of welcoming all people",
        "welcoming and not excluding",
        "leading in a way that welcomes everyone",
        "quality of welcoming all people",
        "the practice of welcoming variety",
        "expanding variety of backgrounds",
        "the act of making groups more varied",
        "supporting or encouraging something",
        "actions to increase variety",
        "efforts aimed at expanding representation",
        "unfair treatment or subjugation",
        "unfairly harsh or controlling",
        "movement for fairness and equality in society",
        "a person harmed by crime or injustice",
        "people harmed by crime or injustice",
      ],
      [
        "easy to reach or use by all",
        "the state of being reachable by everyone",
        "welcoming to everyone",
        "making variety stronger",
        "efforts to expand representation",
        "ensuring fair chances for all",
        "the state of being equal",
        "fair and impartial treatment",
        "the quality of being fair",
        "justice and fairness",
        "the state of having variety",
        "efforts combining variety and welcoming all",
        "a term mixing variety and fairness",
      ],
      [
        "designation given at birth",
        "when assigned female gender at birth",
        "when assigned male gender at birth",
        "biological classification as female",
        "biological classification as male",
        "Black, Indigenous, and People of Color",
        "a person of African descent",
        "people of African and Latin heritage",
        "variety of cultures within a group",
        "a continuous range",
        "ability to work across cultures",
        "differences between cultures",
        "traditions and heritage of a culture",
        "relevance to a specific culture",
        "awareness of differences between cultures",
        "appropriate to a specific culture",
        "responsive to different cultures",
        "shared ancestry or heritage",
        "the way someone expresses themselves",
        "socially constructed roles based on sex",
        "violence motivated by sex-based roles",
        "acknowledging different sex-based identities",
        "a person's sense of their sex-based role",
        "ideas about sex-based roles",
        "medical care supporting someone's sex-role sense",
        "different sex-based role categories",
        "plural of sex-based role categories",
        "Latin heritage identity",
        "lesbian, gay, bisexual, trans community",
        "lesbian, gay, bisexual, trans and queer",
        "groups smaller in number in society",
        "a single person from an underrepresented group",
        "schools serving underrepresented students",
        "representation of many cultures",
        "Indigenous peoples of the Americas",
        "not identifying with male or female only",
        "another term for not identifying as male or female",
        "a classification of people",
        "discussion of ethnic backgrounds",
        "relating to ethnic classifications",
        "differences among ethnic groups",
        "a person's ethnic background",
        "inequality based on ethnicity",
        "movement for ethnic fairness",
        "prejudice based on ethnicity",
        "relating to society and culture",
        "a person’s standing or position",
      ],
      [
        "a developmental condition affecting social communication",
        "an obstacle or challenge",
        "multiple obstacles",
        "nursing infants with milk (neutral term)",
        "an individual who nurses infants",
        "a cancer research initiative",
        "nursing infants using neutral terminology",
        "an individual who nurses using neutral terms",
        "renewable and sustainable energy",
        "crisis caused by global warming",
        "scientific research on global warming",
        "the coronavirus pandemic",
        "official food and nutrition guidelines",
        "limitations due to physical or mental challenges",
        "having physical or mental limitations",
        "person with physical or mental limitations",
        "unborn offspring",
        "a mineral used in dental care",
        "emotional and psychological well-being",
        "condition of being overweight",
        "addictive pain-relieving drugs",
        "allergic reaction to peanuts",
        "people with uteruses",
        "care focused on people’s needs",
        "care centered on the individual",
        "medical care centered around the patient",
        "pregnant individuals",
        "a single pregnant person",
        "more than one pregnant person",
        "specific groups needing special care",
        "research using stem cells or fetal tissue",
        "emotional wound or shock",
        "something causing trauma",
        "foods heavily processed",
      ],
      [
        "an obstacle or limitation",
        "multiple obstacles",
        "renewable and sustainable energy",
        "global warming crisis",
        "scientific research on global warming",
        "a person in paid sexual services",
        "fairness in impact on nature",
        "quality of the natural world",
        "harmful substances in air, water, or soil",
        "movement for societal fairness",
      ],
      [
        "unfair preference for or against something",
        "showing unfair favoritism",
        "leaning toward something unfairly",
        "multiple unfair preferences",
        "multiple cases of unfair preference",
        "tendency to seek confirming evidence only",
        "treated unfairly",
        "unfair treatment based on difference",
        "favoring one group unfairly",
        "a lack of equality",
        "prejudice you aren't aware of",
        "multiple hidden prejudices",
        "preconceived negative opinion",
        "oversimplified belief about a group",
        "multiple oversimplified beliefs",
        "relating to entrenched social systems",
        "in a way tied to larger systems",
        "prejudice not consciously recognized",
      ],
      [
        "being in danger of harm",
        "older adults",
        "left out from belonging",
        "the act of leaving people out",
        "to push to the edges of society",
        "a group that is excluded or ignored",
        "facing highest level of danger",
        "advantages given to some groups",
        "multiple advantages",
        "separation of groups by law or practice",
        "feeling of acceptance and connection",
        "social standing or position",
        "not properly valued",
        "lacking resources or advantages",
        "lack of voices in spaces",
        "not adequately represented",
        "lacking proper resources or care",
        "not given enough recognition",
        "groups needing extra support",
        "adult human female",
        "multiple adult human females",
        "females and underrepresented groups",
      ],
      [
        "adult human of the XX chromosome type",
        "multiple adult humans of XX chromosome type",
        "movement for women’s equality",
        "socially constructed roles based on sex",
        "violence based on sex-based roles",
        "recognition of different sex-role identities",
        "a person's sense of their sex-based role",
        "beliefs about sex-based roles",
        "medical care for sex-role transition",
        "different categories of sex-based roles",
        "lesbian, gay, bisexual, trans community",
        "lesbian, gay, bisexual, trans plus others",
        "society where men dominate",
        "men having sexual relations with men",
        "not identifying as only male or female",
        "another term for not identifying as male or female",
        "a word used for self-reference",
        "words used for self-reference",
        "individual’s sexual choices",
        "a person’s sexual orientation",
        "short for person crossing sex roles",
        "person whose sex-role sense differs from birth assignment",
        "older term for person crossing sex roles",
      ],
      [
        "variety, fairness, and welcoming all",
        "variety, fairness, welcoming, and access for all",
        "variety and fairness with belonging added",
        "variety and fairness with justice added",
        "special rights or benefits",
        "grounded in scientific proof",
        "a set of beliefs or values",
        "talk about U.S. federal policies",
        "difference or inequality",
        "unfair treatment",
        "movement for ethnic equality",
        "movement for ethnic equality",
        "separation of groups in society",
        "U.S. federal investigation subjects",
        "issues drawing Congress attention",
        "issues that gained major media focus",
        "sharp division in government",
        "relating to government or governing",
        "grounded in scientific research",
        "movement for fairness in society",
        "personal sense of self or who you are",
        "person who moves to another country",
        "group that is pushed to the edges",
        "person treated unfairly",
      ],
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(originalWord);
    showClue.innerHTML = "Clue: - " + hints[catagoryIndex][hintIndex];
  };

  // Give up
  document.getElementById("giveup").onclick = function () {
    // Reveal all letters in the word
    for (var i = 0; i < word.length; i++) {
      if (word[i] === "-") {
        geusses[i].innerHTML = "-";
      } else {
        geusses[i].innerHTML = word[i];
      }
    }
    showLives.innerHTML = "Banned word(s): " + word.replace(/-/g, " ");

    // Disable all remaining letter buttons
    var letterButtons = document.querySelectorAll("#letter");
    for (var i = 0; i < letterButtons.length; i++) {
      letterButtons[i].setAttribute("class", "active");
      letterButtons[i].onclick = null;
    }
  };

  // Reset

  document.getElementById("reset").onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    // context.clearRect(0, 0, 400, 400);
    play();
  };
};
