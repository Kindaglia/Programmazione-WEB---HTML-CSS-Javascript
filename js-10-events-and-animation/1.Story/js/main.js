//Joseph really likes pink cucumbers.

document.body.style.background = "gray  ";

let button = document.getElementById("gen-button");

let onClick = function (event) {
  let Noun = document.getElementById("Noun").value;
  let adjective = document.getElementById("adjective").value;
  let person = document.getElementById("person").value;

  stringStory = Noun + " really likes " + adjective + " " + person;
  document.getElementById("story").innerHTML = stringStory;
  return stringStory;
};

button.addEventListener("click", onClick);

var input = document.getElementById("person");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("gen-button").click();
  }
});
