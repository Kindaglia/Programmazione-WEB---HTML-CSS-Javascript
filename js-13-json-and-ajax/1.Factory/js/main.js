{
  function takeJsonFactory(nameJson) {
    let path = nameJson + ".json";
    let request = new XMLHttpRequest();
    // add event listeners
    request.addEventListener("load", function () {
      // transform a string into a usable object
      getJsonF(request.responseText);
    });
    // prepare the request
    request.open("get", path, true); // third parameter async
    request.setRequestHeader("Content-type", "application/json");
    // send the request
    request.send();
  }
  function getJsonF(json) {
    factory = JSON.parse(json);
    console.log(factory);
    formatterFactory(factory);
  }
  const pFactory = document.getElementById("factory");
  function formatterFactory(objFactory) {
    let stringFormatterf = [
      `IdFactory: ${objFactory.IdFactory}`,
      `name: ${objFactory.name}`,
      `exploded: ${objFactory.exploded}`,
      `product: ${objFactory.product[0]} ,${objFactory.product[1]} , ${objFactory.product[2]} `,
      `contacts: ${objFactory.contacts.email},  ${objFactory.contacts.emailFactory}`,
      `free water: ${objFactory.freeWater}`,
    ];
    pFactory.textContent = stringFormatterf;
    return stringFormatterf;
  }
}

//cars
{
  function takeJson(nameJson) {
    let path = nameJson + ".json";
    let request = new XMLHttpRequest();
    // add event listeners
    request.addEventListener("load", function () {
      // transform a string into a usable object
      getJson(request.responseText);
    });
    // prepare the request
    request.open("get", path, true); // third parameter async
    request.setRequestHeader("Content-type", "application/json");
    // send the request
    request.send();
  }

  function getJson(json) {
    cars = JSON.parse(json);
    //log obj
    console.log(cars[0]);
    //log string
    for (i = 0; 4; i++) {
      formatterCars(cars);
      printJson(formatterCars(cars));
    }
    return printJson;
  }

  function formatterCars(objCars) {
    let stringFormatter = `
          Id: ${objCars[i].idCar}, 
          model: ${objCars[i].model},
          elettric: ${objCars[i].elettric},
          parts: ${objCars[i].parts[0]},${objCars[i].parts[1]},
          details: ${objCars[i].details.km},${objCars[i].details.years}
          `;
    console.log(i);
    console.log(stringFormatter);
    return stringFormatter;
  }

  const firstJ = document.getElementsByClassName("list-group-item");
  function printJson(stringConverted) {
    firstJ[i].textContent = stringConverted;
  }
}

function allForBtn() {
  takeJson("cars");
  takeJsonFactory("factory");
}
