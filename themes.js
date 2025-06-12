const themeMapping = {
  "social-justice": "Social Justice & Advocacy",
  "equality-diversity": "Equality & Diversity",
  "cultural-identity": "Cultural Identity",
  "health-wellbeing": "Health & Well-being",
  "environmental-issues": "Environmental & Societal Issues",
  "bias-discrimination": "Bias & Discrimination",
  "social-identity": "Social Identity & Marginalization",
  "gender-sex": "Gender & Sexuality",
  "politics-policy": "Politics & Policy",
};

fetch("./data/themes.json")
  .then((response) => response.json())
  .then((data) => {
    const sideContent = document.getElementById("side-content");

    // Function for hover event
    const handleHover = (themeId) => {
      const key = themeMapping[themeId];
      if (key) {
        const themeData = data[key];
        sideContent.innerHTML = `<h3>${key}</h3><ul>${themeData
          .map((item) => `<li>${item}</li>`)
          .join("")}</ul>`;
      }
    };

    Object.keys(themeMapping).forEach((themeId) => {
      const themeElement = document.getElementById(themeId);
      themeElement.addEventListener("mouseover", () => handleHover(themeId));
    });

    Object.keys(themeMapping).forEach((themeId) => {
      const themeElement = document.getElementById(themeId);
      themeElement.addEventListener("mouseover", function () {
        themeElement.title = themeMapping[themeId];
      });
    });
  })
  .catch((error) => {
    console.error("Error loading theme data:", error);
  });
