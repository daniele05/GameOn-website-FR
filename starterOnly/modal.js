

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

  first.addEventListener('click', function(){
  if(isEmpty(first)||!greaterThanTwo(first)){
    let small = first.nextElementSibling;
    small.innerHTML = 'le champs ne doit pas etre vide et doit avoir au moins deux caractères';
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
      small.innerHTML = 'le champs ne doit pas etre vide et doit avoir au moins deux caractères';
      small.classList.add('text-danger');
      console.log(checkLast())
    } else{
    
    let small = last.nextElementSibling;
     small.innerHTML = 'Nom Valide';
     small.classList.add('text-success');
     console.log(checkLast())
     
    }

    }); 

//  validation email

let mail = document.getElementById('mail')
console.log(mail.value);

function checkMail(){
  
  const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if(regex.test(mail.value)){
    return true

  } else {
return false
  }
  }


// Ecouter la modif de l'email
console.log(mail.value);
mail.addEventListener('click', function(){
  const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  console.log(regex.test(mail.value));

  if (regex.test(mail.value)===true ) 
   {
  // Reaction a la valeur vraie de regex.test
  
  console.log(regex.test(mail.value));
    let small = mail.nextElementSibling;
    small.innerHTML = "Format valide";
    small.classList.remove ('text-danger');
    small.classList.add ('text-success');

    console.log(checkMail());
    
  } 

  else if (regex.test(mail.value)===false ){

   // Reaction a la valeur faux de regex.test

   let small = mail.nextElementSibling;
   small.innerHTML = "Format  non  valide et champs pas vide ";
   small.classList.remove ('text-success');
   small.classList.add ('text-danger');
  
   console.log(checkMail());
  
  }

})


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
birthdate.addEventListener('click', function(){
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
 quantity.addEventListener('click', function()
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
  console.log(checkbox1.value);
  

  if(checkbox1.checked == true ){
        return true
  }else{
    return false
  }
}
console.log(checkbox1Valid());

function obligatoriesConditions(){
  
}
 checkbox1.addEventListener('click', function(){
  console.log(checkbox1.value)
 if(obligatoriesConditions(checkbox1)){
   
   // Recuperation de la balise small
   return true;
  
 
 } else{
   // Recuperation de la balise small
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
console.log(checkbox2.value);


 function facultativeConditions(input){
  if(input.value===""){
    return true
  }else{
    return true
  }
};
 
 checkbox2.addEventListener('click', function(){
  console.log(checkbox2.value)
 if(facultativeConditions(checkbox2)){
   
   // Recuperation de la balise small
   return true;
 
 } else{
   // Recuperation de la balise small
    return true; 
 }
 })


 // Validation du btn final formulaire
document.getElementById("btn-submit")
console.log(btnSubmit.value);


// chaque fois que l element est cliqué, une fenetre contextuelle s'affiche// avec pour message <"Formulaire valité!>
// btn-submit.addEventListener('click', validate)

function validate(){
  let ckBox1Valid = checkbox1Valid();
  let ckBox2Valid = checkbox2Valid();
  let firstValid = checkFirst();
  let lastValid = checkLast();
  let emailValid = checkMail();
  let birthdateValid = checkBirthdate();
  let quantityValid = checkQuantity();
  let locationValid = checkLocation();
  
  if (firstValid && lastValid && emailValid && birthdateValid && quantityValid && locationValid 
    && ckBox1Valid && ckBox2Valid){
      alert("C'est parti");
    const data = {
      firstValid: firstValid,
      lastValid: lastValid,
      emailValid: emailValid,
      birthdateValid: birthdateValid,
      quantityValid: quantityValid,
      locationValid: locationValid,
        ckBox1Valid: ckBox1Valid,
        ckBox2Valid: ckBox2Valid
        // les donnees sont ok, on peut envoyer le formulaire return true; 
      
    };
    
    console.log(data);
      close();
     
  }
  else{
    // sinon  on affiche un message 
    alert("Merci de remplir les champs obligatoires"); 
    
    // et on indique de ne pas envoyer le formulaire return false;
    
  }
};
// /* ajout de l'element*/
// en entrant dans le document


const form = document.getElementById("valid") .addEventListener("submit", (e) => {
  e.preventDefault();

  let fields= document.querySelectorAll('input')
  console.log(fields);
  let valid = true; 

  fields.forEach((field) =>{
    if(!validateField(field)){
      valid = false;
    };
  }); 
  if(valid){
    e.target.submit();
  }
  
}, false);




