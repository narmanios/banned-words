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
        space = 1;
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
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  };

  // Animate man
  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  };

  // Hangman
  canvas = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
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
        "related to abortion rights and debates",
        "general activism or campaigning for change",
        "people who take part in activism",
        "public support for a cause",
        "a person who speaks or acts in support of a cause",
        "multiple people who speak or act in support of a cause",
        "medical care that supports gender transition",
        "the practice of being a supportive ally",
        "against racism in all forms",
        "a person who opposes racism",
        "feeling of being accepted and included",
        "a person engaged in commercial sex work",
        "a group of people living together with shared values",
        "diversity within a community",
        "equity within a community",
        "movement for women’s rights and equality",
        "intense dislike or hostility",
        "abusive or threatening language based on bias",
        "the act of including people",
        "welcoming and not excluding",
        "leadership that embraces inclusion",
        "quality of being inclusive",
        "the act of being inclusive",
        "expanding diversity",
        "the act of making groups more diverse",
        "supporting or encouraging something",
        "actions to promote diversity",
        "efforts aimed at increasing diversity",
        "unfair treatment or subjugation",
        "unfairly harsh or controlling",
        "movement for fairness and equality in society",
        "a person harmed by crime or injustice",
        "people harmed by crime or injustice",
      ],
      [
        "easy to reach or use by all",
        "the state of being accessible",
        "welcoming to everyone",
        "making diversity stronger",
        "efforts to increase diversity",
        "ensuring fair chances for all",
        "the state of being equal",
        "fair and impartial treatment",
        "the quality of being fair",
        "justice and fairness",
        "the state of having variety",
        "efforts combining diversity and inclusion",
        "a term mixing diversity and equity",
      ],
      [
        "designation given at birth",
        "when assigned female gender at birth",
        "when assigned male gender at birth",
        "biological classification as female",
        "biological classification as male",
        "Black, Indigenous, and People of Color",
        "a person of African descent",
        "Black and Latinx identity",
        "diversity within a community",
        "a continuous range",
        "ability to work across cultures",
        "differences between cultures",
        "traditions and heritage of a culture",
        "relevance to a cultural context",
        "awareness of cultural differences",
        "appropriate to a cultural setting",
        "responsive to cultural needs",
        "shared ancestry or heritage",
        "the way someone expresses themselves",
        "socially constructed roles based on sex",
        "violence motivated by gender",
        "acknowledging gender diversity",
        "a person’s sense of gender",
        "ideas about gender roles",
        "medical care supporting gender identity",
        "different gender categories",
        "Latinx identity",
        "lesbian, gay, bisexual, transgender community",
        "lesbian, gay, bisexual, transgender, queer",
        "groups smaller in number in society",
        "a single person from a minority group",
        "schools serving minority students",
        "representation of many cultures",
        "Native American identity",
        "not identifying with the binary genders",
        "another form of non-binary identity",
        "a classification of people",
        "discussion of race and ethnicity",
        "relating to race",
        "differences among racial groups",
        "a person’s racial identity",
        "inequality based on race",
        "movement for racial fairness",
        "discrimination based on race",
        "relating to society and culture",
        "a person’s standing or position",
      ],
      [
        "a developmental condition",
        "an obstacle or challenge",
        "multiple obstacles",
        "feeding infants with breast milk (gender-neutral)",
        "an individual who breastfeeds",
        "a cancer research initiative",
        "feeding infants via chest (gender-neutral)",
        "an individual who chestfeeds",
        "renewable and sustainable energy",
        "crisis caused by global climate change",
        "scientific research on climate",
        "the coronavirus pandemic",
        "official food and nutrition guidelines",
        "limitations due to disability",
        "condition of being disabled",
        "person with a disability",
        "unborn offspring",
        "a mineral used in dental care",
        "emotional and psychological well-being",
        "condition of being overweight",
        "addictive pain-relieving drugs",
        "allergic reaction to peanuts",
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
        "renewable and clean energy",
        "global climate change issue",
        "scientific research on climate",
        "a person in commercial sex work",
        "fairness in environmental impact",
        "quality of the natural environment",
        "harmful substances in air, water, or soil",
        "movement for societal fairness",
      ],
      [
        "unfair preference for or against something",
        "showing unfair favoritism",
        "leaning toward something unfairly",
        "plural of bias",
        "multiple cases of bias",
        "tendency to seek confirming evidence",
        "treated unfairly",
        "unfair treatment based on difference",
        "favoring one group unfairly",
        "a lack of equality",
        "hidden or unconscious bias",
        "multiple hidden biases",
        "preconceived negative opinion",
        "oversimplified belief about a group",
        "plural of stereotype",
        "relating to entrenched social systems",
        "in a way tied to larger systems",
        "bias not consciously recognized",
      ],
      [
        "being at risk of harm",
        "older adults",
        "left out from inclusion",
        "the act of excluding",
        "to push to the margins of society",
        "a group that is excluded or ignored",
        "facing highest level of danger",
        "advantages given to some groups",
        "multiple advantages",
        "separation of groups by law or practice",
        "feeling of acceptance and connection",
        "social standing or position",
        "not properly valued",
        "lacking resources or privileges",
        "lack of representation in spaces",
        "not adequately represented",
        "lacking proper resources or care",
        "not given enough recognition",
        "groups needing extra support",
        "adult human female",
        "plural of woman",
        "women and marginalized groups",
      ],
      [
        "adult human female",
        "plural of female",
        "movement for women’s equality",
        "socially constructed roles",
        "discrimination or violence due to gender",
        "recognition of gender diversity",
        "a person’s gender identity",
        "beliefs about gender roles",
        "medical care for gender transition",
        "different categories of gender",
        "lesbian, gay, bisexual, transgender community",
        "LGBT plus other groups",
        "society where men dominate",
        "men having sexual relations with men",
        "not identifying with male/female binary",
        "another word for non-binary",
        "a word used for self-reference",
        "words used for self-reference",
        "individual’s sexual choices",
        "a person’s sexual orientation",
        "short for transgender",
        "person whose gender identity differs from sex assigned at birth",
        "older term for transgender person",
      ],
      [
        "diversity, equity, and inclusion",
        "diversity, equity, inclusion, and accessibility",
        "DEI with belonging included",
        "DEI with justice included",
        "special rights or benefits",
        "based on scientific evidence",
        "a set of beliefs or values",
        "talk about U.S. federal policies",
        "difference or inequality",
        "unfair treatment",
        "movement for racial equality",
        "movement for racial equality",
        "separation of groups in society",
        "U.S. federal investigation subjects",
        "issues drawing Congress attention",
        "issues that gained major media focus",
        "sharp political division",
        "relating to government or politics",
        "founded on scientific research",
        "movement for fairness in society",
        "personal identity or self-concept",
        "person who migrates to another country",
        "group that is pushed to the margins",
        "person treated unfairly",
      ],
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " + hints[catagoryIndex][hintIndex];
  };

  // Reset

  document.getElementById("reset").onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  };
};
