


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
  first.addEventListener('focusout', function(){
  if(isEmpty(first)||!greaterThanTwo(first)){
    let small = first.nextElementSibling;
    small.innerHTML = 'le champs ne doit pas etre vide et doit comporter minimum deux caractères';
    small.classList.add('text-danger');
  } else{
  
  let small = first.nextElementSibling;
   small.innerHTML = 'Prénom Valide';
   small.classList.add('text-success');
   
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
  last.addEventListener('click', function(){
    if(isEmpty(last)||!moreThan(last)){
      let small = last.nextElementSibling;
      small.innerHTML = 'le champs ne doit pas etre vide et doit comporter minimum deux caractères';
      small.classList.add('text-danger');
    } else{
    
    let small = last.nextElementSibling;
     small.innerHTML = 'Nom Valide';
     small.classList.add('text-success');
     
    }
    }); 
  
// validation e_mail

//Ecouter la modification de l'email
 const email = document.getElementById("email")
//  .innerHTML = localStorage.getItem("email");
//  localStorage.getItem("email");

//  //**********Validation email ******/

email.onkeydown = function(){
  // Creation de la Reg pour email
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
  const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}$/;
  if (regex.test(email.value) || regexo.test(email.value)) 
  {
    let small = email.nextElementSibling;
    small.innerHTML = 'Email Valide';
    small.classList.add('text-success');
    

   } else
   {
    let small = email.nextElementSibling;
    small.innerHTML = 'Email non valide';
    small.classList.add('text-danger');
   }
   
}

// Declaration de la date
const birthdate = document.getElementById('birthdate');


// Ecouter la modif de la date
birthdate.addEventListener = ('focusout', function () {
  // Creation de la reg pour validation date
  console.log('birthdate');
   const birthdateReg=  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    if(birthdateReg(birthdate.value)){
      let small = birthdate.nextElementSibling;
      small.innerHTML = ' format de date de naissance valide';
      small.classList.add('text-success');
      

        
      } else{
        // console.log('false')
        let small = birthdate.nextElementSibling;
        small.innerHTML = 'Date de naissance non valide';
        small.classList.add('text-danger');
      //  return  small.innerHTML = '  Format de date de naissance non valide';
       
      }
    });
  
   


  // Validation Quantité de tournois effectués

 const quantity = document.getElementById("quantity")
//  .innerHTML = localStorage.getItem("quantity");
//  localStorage.getItem("quantity");
 // validation de la quantité de tournois effectée ( non vide, minimum 0 maximum 99)

 function exactNumbers(input){
   if (input.value.length <= 99) {
     return true
   } else{
     return false
   }
 }
 quantity.addEventListener('focusout', function(){
 if(exactNumbers(quantity)){
   alert('le champs ne doit pas etre vide, doit comporter des caractères compris entre 0 et 99')

    // Recuperation de la balise small

   let small = quantity.nextElementSibling;
   small.innerHTML = 'Quantite Valide';
   small.classList.add('text-success');
  
  
    
  //  small.classList.remove(text-danger);
 
 } else{
    let small = quantity.nextElementSibling;
    small.innerHTML = 'Quantite non Valide';
   
    small.classList.add('text-danger');
   
    
    
     small.classList.remove(text-success);
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


// Validation du btn final formulaire

 document.getElementById("btn-submit").addEventListener("submit", validate);
function validate() {
  var error; 
   var inputs = document.getElementById("btn-submit").getElementsByTagName("input");
   for (var i = 0; i < inputs.lenght; i++) {
     console.log(inputs[i])
     if (!inputs[i].value) {
       error = "Veuillez renseigner tous les champs";
       
     }
   }
   if (error) {
    e.preventDefault();
    document.getElementsById("error").innerHTML = erreur;
    return false; 
     } else{
    alert('Formulaire envoyé!');
  }
}
     
    
 
   

   
