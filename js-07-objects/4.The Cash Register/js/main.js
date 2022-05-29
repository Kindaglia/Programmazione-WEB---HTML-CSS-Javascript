/*  4.The Cash Register
● Write a function called cashRegister that takes a shopping cart object.
● The object contains item names and prices (itemName: itemPrice).
● The function returns the total price of the shopping cart, e.g. :




*/ 
/*Functions */
function cashRegister(cart){
     let total = 0;
     for (const key in cartForParty){
          total += Number(cartForParty[key]); //use Number() for convert string to number
     }
     console.log(total);
     return total

}


/*object*/
let cartForParty = {
     banana: "1.25",
     handkerchief: ".99",
     Tshirt: "25.01",
     apple: "0.60",
     nalgene: "10.34",
     proteinShake: "22.36"
    };


/*Arrays*/

/*Test Array*/
cashRegister(cartForParty); // 60.55