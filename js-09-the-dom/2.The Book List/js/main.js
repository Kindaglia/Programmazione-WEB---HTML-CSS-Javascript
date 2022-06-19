const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    url: "1book.jpg",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone.",
    author: "J. K. Rowling.",
    alreadyRead: true,
    url: "2book.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "3book.jpg",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J. K. Rowling.",
    alreadyRead: true,
    url: "4book.jpg",
  },
];

let body = document.body;

function createStucture() {
  let ul = document.createElement("ul");
  body.appendChild(ul);
  for (i = 0; i < 4; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
  }
  console.log("create Stucture");
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
  test[3].classList.add("list-item");
}

function myFunction() {
  createStucture();
  let list = body.getElementsByTagName("li");
  console.log(list);
  for (i = 0; i < 4; i++) {
    booksFromat =
      "Title = " +
      books[i].title +
      ", author = " +
      books[i].author +
      ", alreadyRead = " +
      books[i].alreadyRead;
    list[i].innerHTML = booksFromat;

    let imgage = document.createElement("img");
    imgage.src = books[i].url;
    imgage.width = "60";
    list[i].appendChild(imgage);
  }
  addClassAfter4Sec();
}
