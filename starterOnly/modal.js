


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalbg = document.querySelector(".bground");
const modalClose = document.getElementById("close");
var checkbox1 = document.getElementById("checkbox1")
console.log(checkbox1.checked);
const btnSubmit = document.querySelector('input[type="submit"]');
const form = document.getElementById("valid");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});



console.log(modalBtn)

// launch and close the modal event
modalBtn.forEach((btn) => btn.addEventListener("click",launchModal));
modalClose.addEventListener("click", close);
// validation.addEventListener("click", validate);  

// launch and close modal form
function launchModal() {
  console.log('ok')
  
  modalbg.style.display = "block";

}
// const modalClose = document.getElementsByClassName(".close");
function close(){
  modalbg.style.display = "none";
}
function validate(){
  
}



 // Declarer des const par id
 // Validation Prénom

let first = document.getElementById("first")
// .innerHTML 
// = localStorage.getItem("first");
// localStorage.getItem("first");

 // vérification de ma fonction 
 function isEmpty(input){
   if(input.value===""){
     return true
   }else{
     return false
   }
 };
  function greaterThanTwo(input){
    if (input.value.length>=2) {
      return true
    } else{
      return false
    }
  }
  function checkFirst() {
    if(isEmpty(first)||!greaterThanTwo(first)){
      return false
    } else{
    return true
    }
  };

  first.addEventListener('focusout', function(){
  if(isEmpty(first)||!greaterThanTwo(first)){
    let small = first.nextElementSibling;
    small.innerHTML = 'le champs ne doit pas etre vide et doit comporter minimum deux caractères';
    small.classList.add('text-danger');
    console.log(checkFirst())
  } else{
  
  let small = first.nextElementSibling;
   small.innerHTML = 'Prénom Valide';
   small.classList.add('text-success');
   console.log(checkFirst())
   
  }
  }); 

  // validation nom 
  let last = document.getElementById("last")
 
//  .innerHTML = localStorage.getItem("last");
//   localStorage.getItem("last");

 function isEmpty(input){
   if(input.value===""){
     return true
   }else{
     return false
   }
 };
  function moreThan(input){
    if (input.value.length>=2) {
      return true
    } else{
      return false
    }
  }
  function checkLast(){
    if(isEmpty(last)||!moreThan(last)){
      return false
    } else{
     return true
     
    }
  }

  
  last.addEventListener('click', function(){
    if(isEmpty(last)||!moreThan(last)){
      let small = last.nextElementSibling;
      small.innerHTML = 'le champs ne doit pas etre vide et doit comporter minimum deux caractères';
      small.classList.add('text-danger');
      console.log(checkLast())
    } else{
    
    let small = last.nextElementSibling;
     small.innerHTML = 'Nom Valide';
     small.classList.add('text-success');
     console.log(checkLast())
     
    }

    }); 

// validation e_mail

//Ecouter la modification de l'email
 let email = document.getElementById("email")
 
 email.onkeydown = function(){
  // Creation de la Reg pour email
}
function checkEmail(){
  // const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z])$/;
  const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (regex.test(email.value)) {
 return true

  } else {
return false
  }
}
//  //***Validation email ***/

email.addEventListener ('focusout' , function(){
  // Creation de la Reg pour email
  // const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z])$/;
   const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  console.log(email.value);
 
  if (regex.test(email.value)) 
  {
    let small = email.nextElementSibling;
    small.innerHTML = 'Email Valide';
    small.classList.add('text-success');
    console.log(checkEmail())
    

   } else
   {
    let small = email.nextElementSibling;
    small.innerHTML = 'Email non valide';
    small.classList.add('text-danger');
    console.log(checkEmail())
   }
   
});

// Declaration date 

function checkBirthdate(){
  
  const regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  if(regexDate.test(birthdate.value)){
    return true

  } else {
return false
  }
  }

let birthdate = document.getElementById
('birthdate')
console.log(birthdate.value);


// Ecouter l amodif de la date
console.log(birthdate.value);
birthdate.addEventListener('focusout', function(){
  const regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

  

  console.log(regexDate.test(birthdate.value));

  if (regexDate.test(birthdate.value) ) 
   {
  // bloc de code true
  console.log(regexDate.test(birthdate.value));
    let small = birthdate.nextElementSibling;
    small.innerHTML = "Format valide";
    small.classList.add ('text-success');
    console.log(checkBirthdate());
    
  } 

  else if (regexDate.test(birthdate.value) == false) {
    // bloc de code faux
   
   let small = birthdate.nextElementSibling;
 
   small.innerHTML = "Format  non  valide et champs pas vide ";
   small.classList.remove ('text-success');
   small.classList.add ('text-danger');
  
   console.log(checkBirthdate());
  
  }
 

})

  // Validation Quantité de tournois effectués

 let quantity = document.getElementById("quantity")
//  .innerHTML = localStorage.getItem("quantity");
//  localStorage.getItem("quantity");
 // validation de la quantité de tournois effectée ( non vide, minimum 0 maximum 99)


function checkQuantity(){
  if(quantity.value <= 99){
    return true
  } else{
    return false
  }
}
 quantity.addEventListener('focusout', function()
 {
  console.log(quantity.value); 
 if(quantity.value <= 99 && quantity.value != "")
 {
    // Recuperation de la balise small

   let small = quantity.nextElementSibling;
   small.innerHTML = 'Quantite  Valide';
   small.classList.add('text-success');
   console.log(checkQuantity())

 
 } else {
  
  let small = quantity.nextElementSibling;
  small.innerHTML = 'Quantite non Valide';
  small.classList.remove("text-success");
  small.classList.add('text-danger');
  console.log(checkQuantity())
 }

 }); 

 //Validation button radio

 function checkLocation() {
  let location = document.querySelectorAll("input[type=radio]:checked");
  let small = document.getElementById("small-location");
  if (location.length === 1) {
    small.classList.remove("text-danger");
    small.classList.add('text-success');
    small.innerHTML = "Location valide"
    console.log("locationtrue");
    return true;
  } else {
    small.classList.remove("text-success");
    small.classList.add('text-danger');
    small.innerHTML = "Location non valide"
    console.log("locationfalse");
    return false;
    
  }
}
// Validation conditions de formulaire
//Conditions obligatoires

function checkbox1Valid(){
  
  let checkbox1 = document.getElementById("checkbox1")
  if(checkbox1.checked == true ){
        return true
  }else{
    return false
  }
}
console.log(checkbox1Valid());

// console.log('checkbox1.checked')
//  function checkbox1() {
//   if(input.value===""){
//     return false
//   }else{
//     return true
//   }
// };


 checkbox1.addEventListener('focusout', function(){
  console.log(checkbox1.value)
 if(obligatoriesConditions(checkbox1)){
   alert('le champs non vide et  doit absolument être coché')
   // Recuperation de la balise small

   let small = checkbox1.nextElementSibling;
   small.innerHTML = 'Conditions Valides';
   small.classList.add(text-success);
   console.log(checkbox1Valid());
   return true;
  
 
 } else{
   // Recuperation de la balise small

   let small = checkbox1.nextElementSibling;
   
   small.innerHTML = 'Conditions non Valides';
    small.classList.add(text-danger);
    console.log(checkbox1Valid());
    return false; 
 }
 }); 


//Validation des conditions de formulaire
//Conditions facultatives

function checkbox2Valid(){
  if(facultativeConditions(checkbox2)){
  return true
}else{
  return true
}
};

let checkbox2 = document.getElementById("checkbox2")
//  .innerHTML = localStorage.getItem("checkbox2");
//  localStorage.getItem("checkbox1");

 function facultativeConditions(input){
  if(input.value===""){
    return true
  }else{
    return true
  }
};
 
 checkbox2.addEventListener('focusout', function(){
  console.log(checkbox2.value)
 if(facultativeConditions(checkbox2)){
   alert('le champs peut etre vide ou coché')
   // Recuperation de la balise small

   let small = checkbox2.nextElementSibling;
   small.innerHTML = 'Conditions Valides';
   small.classList.add(text-success);
   console.log(checkbox2Valid());
   return true;
 
 } else{
   // Recuperation de la balise small

   let small = checkbox1.nextElementSibling;
   
   small.innerHTML = 'Conditions non Valides';
    small.classList.add(text-success);
    console.log(checkbox2Valid());
    return true; 
 }
 })


 // Validation du btn final formulaire
document.getElementById("btn-submit")
console.log(btnSubmit.value);

// btnSubmit.addEventListener('click', validate)
function validate(){
  let ckBox1Valid = checkbox1Valid();
  let ckBox2Valid = checkbox2Valid();
  let firstValid = checkFirst();
  let lastValid = checkLast();
  let emailValid = checkEmail();
  let birthdateValid = checkBirthdate();
  let quantityValid = checkQuantity();
  let locationValid = checkLocation();
  
  if (firstValid && lastValid && emailValid && birthdateValid && quantityValid && locationValid 
    && ckBox1Valid && ckBox2Valid){
    const data = {
      firstValid: firstValid,
      lastValid: lastValid,
      emailValid: emailValid,
      birthdateValid: birthdateValid,
      quantityValid: quantityValid,
      locationValid: locationValid,
        ckBox1Valid: ckBox1Valid,
        ckBox2Valid: ckBox2Valid
    };
    
    console.log(data);
      close();
  }
};

