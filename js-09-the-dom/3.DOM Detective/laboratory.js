//all img
let a = document.body.getElementsByTagName("img");
console.log(a);

//class="menu__container"
let menu__container = document.body.getElementsByClassName("menu__container");
console.log(menu__container);

//All the news items under "News"
let news = document.querySelector(
  "body > div.wrapper.cf._prices-in-eur._price-currency-symbol-before > div > div:nth-child(21) > div"
);
console.log(news);

//The footer
let footer = document.body.getElementsByTagName("footer");
console.log(footer);

//All the social media links at the bottom of the page
let social_media = document.body.getElementsByClassName(
  "footer-microservice-socials__item"
);
console.log(social_media);
