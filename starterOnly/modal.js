

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

// Declaration du form 

const form = document.getElementById("valid");
let fields= document.querySelectorAll('input');


form.addEventListener("submit", (e) => {
  e.preventDefault();

  
  fields.forEach((field) => {resetField(field)});
  let valid = true; 


  function validateField(field){
    if(field.checkValidity()){
      return true; 
     } else{
       field.classList.add('invalid'); 
      field.previousElementSibling.insertAdjacentHTML('beforeend, <span class="msg">${field.validationMessage}</span>')
      return false; 
    }
     }
      function resetField(field){
  let fieldLabel = field.previousElementSibling;
  field.classList.remove('invalid');
  while(fieldLabel.firstElementChild){
  fieldLabel.removeChild(fieldLabel.firstElementChild);
 }
 }

field.valid = true;
  
  fields.forEach((field) =>{
    if(!validateField(field)){
      valid = false;
    };
  }); 
  if(valid){
    e.target.submit();
  }
  
}, false);

// declaration variable  erreur afin d agir sur la soumission 

// let erreur= document.getElementById("erreur").addEventListener(click, (e))
// {
//   e.preventDefault();

//   if( firstValid = checkFirst){
    
//   } else{
//     alert("Champs ne peut etre vide et doit avoir au moins deux caractères"); 
//   }
// };



 // Declarer des differents champs 

 // Validation Prénom

let first = document.getElementById("first")

// vérification de ma fonction 

 function isEmpty(input){
   if(!input.value===""){
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


// Ecouter la modification de la date
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
  let checkbox2 = document.getElementById("checkbox2")
console.log(checkbox2.value);

  if(checkbox2.checked == true){
    return true
  }else{
    return true
  }
}
console.log(checkbox2Valid());

function facultativeConditions(){
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


 // declaration du btn-submit
document.getElementById("btn-submit"). addEventListener('click', validate);
console.log(btnSubmit.value);


// Creation de la function validate afin de faire passer toutes les verifications des differents champs


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
        ckBox2Valid: ckBox2Valid,
      
    };
  
    console.log(data);
    modalbg.style.display = "none";
    modalBody.style.display = "none";
    bgclosed.style.display = "block";
    modalEnd.innerHTML = "Merci d'avoir soumis vos informations d'inscription.";
    forward.style.display = "block";
    forward.style.marginBottom = "60px";
    forward.addEventListener("click", closeForward);
    closeEnd.addEventListener("click", crossClose);
    console.log("okValid");
    return true;
} else{
    // Dans le cas contraire, affichez l'alerte suivante 
    alert("Formulaire invalide"); 
    
  }
};

    














