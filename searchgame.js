// const searchBox = document.getElementById("site-search").value.toUpperCase();
// if (searchBox === "apple") {
//   console.log("this works");
// }
console.log("hello");

const searchedWords = {};
let bannedWords = [];
const searchBox = document.getElementById("site-search");

fetch("./data/terms_by_letter_grouped_final3.json") // Path to your JSON file
  .then((response) => response.json())
  .then((data) => {
    // Store the JSON data

    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key].forEach((entry) => {
          if (entry.word_name) {
            bannedWords.push(entry.word_name.toLowerCase());
          }
        });
      }
    }

    console.log(bannedWords);
    let sorted = bannedWords.sort();

    function displayNames(listValue) {
      searchBox.value = listValue;
      checkBanned(listValue.toLowerCase());
    }

    function clearList() {
      let inputList = document.querySelectorAll(".listItem");
      for (const item of inputList) {
        item.remove();
      }
    }

    searchBox.addEventListener("input", (e) => {
      clearList();
      const query = searchBox.value.trim().toLowerCase();
      checkBanned(query);

      for (let i of sorted) {
        // console.log("test");
        if (
          i.toLowerCase().startsWith(searchBox.value.toLowerCase()) &&
          searchBox.value != ""
        ) {
          let suggestionItem = document.createElement("li");
          suggestionItem.classList.add("listItem");
          suggestionItem.style.cursor = "pointer";
          // function
          suggestionItem.addEventListener("click", () => {
            displayNames(i);
          });
          let formattedWord =
            "<b>" + i.substring(0, searchBox.value.length) + "</b>";
          formattedWord = formattedWord + i.substring(searchBox.value.length);
          // console.log(formattedWord);
          suggestionItem.innerHTML = formattedWord;
          document.querySelector(".suggestions").appendChild(suggestionItem);
        }
      }
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

// const searchedWords = { wordone: "BLUE", wordtwo: "red" };

const output = document.getElementById("result");

// searchBox.addEventListener("input", () => {

function checkBanned(searchQuery) {
  output.style.fontWeight = "bold";
  output.style.fontSize = "18px";
  output.style.padding = "24px";
  if (bannedWords.some((word) => word.toLowerCase() === searchQuery)) {
    output.style.color = "red";
    output.textContent =
      "This word/term is currently banned from use in policies and grant applications by the U.S. Govt in 2025";
  } else if (searchQuery === "") {
    output.textContent = "";
    output.display = "none";
    return;
  } else {
    output.style.color = "green";
    output.textContent = "This word/term is currently not banned";
  }
  output.style.display = "block";
}
