
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close the modal form 
function twFermer(){
  window.close()
}

// function afficher_cacher(id)
// {
//   if (document.getElementById(id).style.visibility=="hidden") {
//     document.getElementById(id).style.visibility="visible";
//     document.getElementById('close').innerHTML="cacher l'icone de fermeture";
//   } 
//   else{
//     document.getElementById(id).style.visibility="hidden"; 
//     document.getElementById('close').innerHTML="afficher l'icone de fermeture";
//   }
//   return true;
// }




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

let span= document.getElementsByTagName('span');

email.onkeydown = function(){
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
    small.innerHTML = 'le champs ne doit pas etre vide et email doit etre valide';
    small.classList.add('text-danger');
   }
   
}

// Validation date de naissance 

 const birthdate = document.getElementById("birthdate")
  function exactNumber(input){
    if (input.value.lenght===8) {
      return false
    } else{
      return true
    }
  }
  last.addEventListener('focusout', function(){
  if(isEmpty(birthdate)||!exactNumber(birthdate)){
  
     // Recuperation de la balise small
    let small = birthdate.nextElementSibling;
    small.innerHTML = 'Date Valide';
    small.classList.add('text-danger')
  
  } else{
    // Recuperation de la balise small

    let small = birthdate.nextElementSibling;
    small.innerHTML = 'Date Non Valide';
    small.classList.add('text-success');
  }
  }); 
  console.log(birthdate.value)

  // Validation Quantité de tournois effectués

 const quantity = document.getElementById("quantity")
//  .innerHTML = localStorage.getItem("quantity");
//  localStorage.getItem("quantity");
 // validation de la quantité de tournois effectée ( non vide, minimum 0 maximum 99)
 function isEmpty(input){
  if(input.value===""){
    return true
  }else{
    return false
  }
};
 function exactNumber(input){
   if (input.value.length <="99") {
     return true
   } else{
     return false
   }
 }
 quantity.addEventListener('focusout', function(){
 if(isEmpty(quantity)||!exactNumber(quantity)){
   alert('le champs ne doit pas etre vide, doit comporter des caractères compris entre 0 et 99')

    // Recuperation de la balise small

   let small = quantity.nextElementSibling;
   small.innerHTML = 'Quantite Valide';
   small.classList.add(text-success);
   small.classList.color('lime');
    
  //  small.classList.remove(text-danger);
 
 } else{
    let small = quantity.nextElementSibling;
    small.innerHTML = 'Quantite non Valide';
    small.classList.remove(text-danger);
    small.classList.color('red');
    
    
    // small.classList.remove(text-success);
 }
 }); 

 //Validation button radio


 document.querySelector('formData').addEventListener('change', function(){
  
  const locations = document.querySelectorAll('input'); 

  for (var i = 0; i < locations.length; i++) {
    if (locations[i].checked) break; 
  }
  console.log('locations[i].value');
  })
 
 
// Validation conditions formulaire

 const checkbox1 = document.getElementById("checkbox1")
//  .innerHTML = localStorage.getItem("checkbox1");
//  localStorage.getItem("checkbox1");
 function usingConditions(input){
  if(input.value===""){
    return false
  }else{
    return true
  }
};
 
 usingConditions.addEventListener('focusout', function(){
 if(usingConditions(checkbox1)){
   alert('le champs doit etre coché')
   small.innerHTML = 'Conditions non Valides';
   small.classList.add(text-danger);
 
 } else{
   
   small.innerHTML = 'Conditions Valides';
    small.classList.add(text-success);

    // Recuperation de la balise small

   let small = checkbox1.nextElementSibling;
  
 }
 }); 

 console.log(checkbox1.value)

 const checkbox2 = document.getElementById("checkbox2")
//  .innerHTML = localStorage.getItem("checkbox2"); ;
//   localStorage.getItem("checkbox2");
 if(isEmpty(checkbox2)||!nextEvents(checkbox2)){
  alert('le champs peut être coché ou non')
  small.innerHTML = 'Case cochée';
} else{
  small.innerHTML = 'Case non cochée';

   // Recuperation de la balise small

  let small = checkbox2.nextElementSibling;
 
}

// Validation du btn final formulaire

 const btnsubmit = document.getElementById("btn-submit").addEventListener('submit', function() {
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
    alert('Formulaire envoyé!');}
     });
