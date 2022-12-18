/* function valfName(){
  let fName = document.getElementById('fName');
  let value = inputElement.value;

  if (!valfName('fName')) return false;

alert('hey');


} */

/* let test = document.getElementById('fName').value;
let test1 = test.value; 
console.log('test'); */
let fName = document.getElementById("fName");
let inputElement = document.getElementById("fName");

console.log();

function myFunction() {
  let p1 =5;
  let p2 =3;
  return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction();





/* function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
} */


/* function valfName() {
  let inputElement = document.getElementById("fName");
  let value = inputElement.value;

  if (!value) { // bsp. '', null, undefined
      // do something 
      setMessage1('Bitte etwas eingeben');
      return false;

  }
  else {
      setMessage1(value);
      return true;

  }
      
}


function setMessage1(value) {
  document.getElementById("message-1").innerText = value;
}   */
/* function validateForm() {
  let x = document.forms["myForm"]["fName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
} */




/* function vallName(){
let x = document.forms["myForm"]["lName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
} */













































// Phone Number---------------
/* function start() {

  var userNumber = prompt("Enter Your Cell Number");
  
  var result = userNumber.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  
  var cCode = result[1] ? "+41" : "";
  
  var formattedNumber =
  
  cCode + " (" + result[2] + ") " + result[3] + "-" + result[4];
  
  document.getElementById("number").innerHTML =
  
  "The international number is: " + formattedNumber;
  
  } */