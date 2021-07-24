


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
const validation = document.getElementById("btn-submit");



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

const first = document.getElementById("first")
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
  const last = document.getElementById("last")
 
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
 const email = document.getElementById("email")
 
 email.onkeydown = function(){
  // Creation de la Reg pour email
}
function checkEmail(){
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z])$/;
  const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z])$/;
  if (regex.test(email.value) || regexo.test(email.value)) {
 return true

  } else {
return false
  }
}
//  //**********Validation email ******/

email.onkeydown = function(){
  // Creation de la Reg pour email
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z])$/;
  const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z])$/;
  if (regex.test(email.value) || regexo.test(email.value)) 
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
   
}

// // Declaration de la date
// const birthdate = document.getElementById('birthdate');


// // Ecouter la modif de la date
// birthdate.addEventListener = ('focusout', function(){
//   // Creation de la reg pour validation date

//     var regex=new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
//     var dateOk=regex.test(date);
//     if(dateOk){
//         alert("Ok");
//     }else{
//         alert("not Ok");
//     } ;

  // Validation Quantité de tournois effectués

 const quantity = document.getElementById("quantity")
//  .innerHTML = localStorage.getItem("quantity");
//  localStorage.getItem("quantity");
 // validation de la quantité de tournois effectée ( non vide, minimum 0 maximum 99)

//  function exactNumbers(input){
//    if () {
//      return false
//    } else{
//      return true
//    }
//  }

function checkQuantity(){
  if(quantity.value <= 99){
    return true
  } else{
    return false
  }
}
 quantity.addEventListener('focusout', function()
 {
  
 if(quantity.value < 99)
 {
    // Recuperation de la balise small

   let small = quantity.nextElementSibling;
   small.innerHTML = 'Quantite  Valide';
   small.classList.add('text-success');
   console.log(checkQuantity())

 
 } else if (quantity.value > 99) {
  
  let small = quantity.nextElementSibling;
  small.innerHTML = 'Quantite non Valide';
  small.classList.remove("text-success");
  small.classList.add('text-danger');
  console.log(checkQuantity())
 }

 }); 

 //Validation button radio

 function validateFormData(){
   var radios = document.getElementsByName("location");
   var formValid = false; 

   var i= 0; 
   while (!formValid && i < radios.length) {
     if (radios[i].checked) formValid = true;
     i++;
   }

   if (!formValid) alert("Must check some option!");
   return formValid;
 }
 if(!radios[i].checked){
   formValid = false; 
   let radioError = document.getElementById("radio-error")
   radioError.innerHTML = 'Vous devez choisir au moins une ville'; 
   radioError.classList.add("text-danger");
 }

  
// Validation conditions de formulaire
//Conditions obligatoires

 const checkbox1 = document.getElementById("checkbox1")
//  .innerHTML = localStorage.getItem("checkbox1");
//  localStorage.getItem("checkbox1");
 function obligatoriesConditions(input){
  if(input.value===""){
    return false
  }else{
    return true
  }
};
 
 checkbox1.addEventListener('focusout', function(){
  console.log(checkbox1.value)
 if(obligatoriesConditions(checkbox1)){
   alert('le champs non vide et  doit absolument être coché')
   // Recuperation de la balise small

   let small = checkbox1.nextElementSibling;
   small.innerHTML = 'Conditions Valides';
   small.classList.add(text-success);
   return true;
 
 } else{
   // Recuperation de la balise small

   let small = checkbox1.nextElementSibling;
   
   small.innerHTML = 'Conditions non Valides';
    small.classList.add(text-danger);
    return false; 
 }
 }); 

//Validation des consitions de formulaire
//Conditions facultatives
const checkbox2 = document.getElementById("checkbox2")
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
   return true;
 
 } else{
   // Recuperation de la balise small

   let small = checkbox1.nextElementSibling;
   
   small.innerHTML = 'Conditions non Valides';
    small.classList.add(text-success);
    return true; 
 }
 }); 


// // Validation du btn final formulaire
// document.getElementById("btn-submit");
// // Ajout gestionnaire d evenenement 'submit'

// btnsubmit.addEventListener("submit", validateForm)

// function validateForm(){
//   if(validationfails){
//     return false;
//   } else {
//     btn-SVGNumberList();
//     return true;
//   }
// }

// });

 