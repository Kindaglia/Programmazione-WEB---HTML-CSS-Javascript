# 3.DOM Detective

### Text Exercises:

● Go to www.gog.com  
● Use the devtools to view the DOM and write Javascript in the console  
● Use the DOM access methods to find the following:  
● Every image on the  
● The main menu at the top of the page  
● All the news items under "News"  
● The footer  
● All the social media links at the bottom of the page  
● Produce a readme.md file with  
● snippets of your Javascript code  
● explanations of what which elements they select

# Exercise Executed

Every image on the page:

```
let a = document.body.getElementsByTagName("img");
console.log(a);
```

Main menu:

```
let menu__container = document.body.getElementsByClassName("menu__container");
console.log(menu__container);
```

All the news items under "News":

```
let news = document.querySelector(
  "body > div.wrapper.cf._prices-in-eur._price-currency-symbol-before > div > div:nth-child(21) > div"
);
console.log(news);
```

The footer:

```
let footer = document.body.getElementsByTagName("footer");
console.log(footer);
```

All the social media links at the bottom of the page:

```
let social_media = document.body.getElementsByClassName(
  "footer-microservice-socials__item"
);
console.log(social_media);

```

## Author

- Matteo Drago

## Contact

Matteo Drago: matteo.drago@edu.itspiemonte.it

## Repository GitHub:

https://github.com/Kindaglia/Programmazione-WEB---HTML-CSS-Javascript
