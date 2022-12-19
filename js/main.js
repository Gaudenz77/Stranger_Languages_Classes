function validateAll() {
    if (!validateMail()) return false; 
    if (!validateGender()) return false; 
    if (!validatefName()) return false; 
    if (!validatelName()) return false; 
    if (!validateAge()) return false; 
    if (!validateLevel()) return false; 
    
    alert("All Good");
    return true;
  }

function validateMail() {
  let inputElement = document.getElementById("valMail");
  let value = inputElement.value;

  if (!value) {
    setMessage1("Please enter your e-mail")
    return false;
  }

  else if (value.indexOf('@') < 0) {
    setMessage1("please use an '@' in the adress")
    return false;
  }

  else {
    setMessage1(value);
    return true;
  }

}

  function validateGender() { 
    let inputElement = document.getElementById('valGender');
    let value = inputElement.value;




    if (!value) {
    setMessage2("please insert your gender");
    return false;
  }
  else {
    setMessage2(value);
    return true;
  }
}

function validatefName() {
  let inputElement = document.getElementById('fName');
  let value = inputElement.value;

  
  if (!value) { // '', null, undefined
    setMessage3("first name must be filled out");
    return false;
  }
  else {
    setMessage3(value);
    return true;
    
  }
}


function validatelName() {
  let inputElement = document.getElementById('lName');
  let value = inputElement.value;

  if (!value) { //'', null, undefined
      // do something 
      setMessage4("last name must be filled out");
      return false;

  }
  else {
      setMessage4(value);
      return true;

  }
      
}

function validateAge() {
  let inputElement = document.getElementById('valAge');
  let value = inputElement.value;
  if (!value) {
    setMessage5("please insert your age");
    return false;

  } 

  else if( value < 18 || value > 99 ) { 
    
    setMessage5('number is either smaller 18 or greater than 99, please use numbers from 0 to 10 only!');
  

  }

else {
    setMessage5(value);
    return true;

  }
}

function validateLevel() { 
  let inputElement = document.getElementById('classLevel');
  let value = inputElement.value;




  if (!value) {
  setMessage7("please chose a level");
  return false;
}
else {
  setMessage7(value);
  return true;
}
}


function setMessage1(value) {
  document.getElementById("message-1").innerText = value;
} 

function setMessage2(value) {
  document.getElementById("message-2").innerText = value;
} 


function setMessage3(value) {
  document.getElementById("message-3").innerText = value;
} 

function setMessage4(value) {
  document.getElementById("message-4").innerText = value;
} 

function setMessage5(value) {
  document.getElementById("message-5").innerText = value;
} 

function setMessage7(value) {
  document.getElementById("message-7").innerText = value;
} 



/* let fName = document.getElementById('fName').value;
let lName = document.getElementById('lName').value; */

/* function fName() {
  let inputElement = document.getElementById("fname");
  let value = inputElement.value;

  if (!value) { // bsp. '', null, undefined
      // do something 
      setMessage1('Bitte Vornamen eingeben');
      // alert("oopps");
      return false;

  }
  // ab hier value gleich nicht leerer string
  else if (value.indexOf('@') < 0){
      //value enthält  no @
      setMessage1('Bitte ein "@" verwenden!');
      return false;

  }
  else {
      setMessage1(value);
      return true;
      
  }
      
} */











/* let formValidation = document.getElementById('formValidation');

formValidation.addEventListener('submit', function(event) {
    event.preventDefault()

    let fName = document.getElementById('fName').value
    console.log(fName);
    let valEmail = document.getElementById('valEmail').value
    console.log(valEmail);
}) */





/* function valfName(){
  let fName = document.getElementById('fName');
  let value = inputElement.value;

  if (!valfName('fName')) return false;

alert('hey');


} */

/* let test = document.getElementById('fName').value;
let test1 = test.value; 
console.log('test'); */
/* let fName = document.getElementById("fName").value;

let inputElement = document.getElementById("fName");
console.log(fName);


function myFunction() {
  let p1 =5;
  let p2 =3;
  return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(); */





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
