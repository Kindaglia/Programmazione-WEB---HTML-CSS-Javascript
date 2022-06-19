let collection = document.body;
collection.style.fontFamily = "Arial, sans-serif";

function myFunction() {
  let nickname = document.querySelector("li span#nickname");
  nickname.innerHTML = "Kindaglia";

  let favorites = document.querySelector("li span#favorites");
  favorites.innerHTML = "Game";

  let hometown = document.querySelector("li span#hometown");
  hometown.innerHTML = "Torino";
}

function addClassAfter4Sec() {
  setInterval(addClass, 4000);
}

function addClass() {
  test = document.querySelectorAll("li");
  console.log(test);
  test[0].classList.add("list-item");
  test[1].classList.add("list-item");
  test[2].classList.add("list-item");
}

function addImg() {
  let newImg = document.createElement("img");
  newImg.src = "cat.jpeg";
  let stampa = document.getElementById("catImg");
  stampa.append(newImg);
}
