// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".dropdown-con");

// hamburger.addEventListener("click", ()=> {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.
// addEventListener("click", () => {
// hamburger.classList.remove("active");
// navMenu.classList.remove("active");
// }))

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-Menu");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}))



























var coll = document.getElementsByClassName("questions");
// var call = document.getElementsByClassName("content");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// for (i = 0; i < call.length; i++) {
//     call[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.display === "bl") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   }
// const navMenu = document.querySelector(".content");

const form = document.getElementById('form');
const email = document.getElementById('email');
var smal = document.getElementById('smally');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
} )
function checkInputs() {
  //get value of the inputs
  const emailValue = email.value.trim();

  if(emailValue === ''){

    setErrorFor(email, 'whoops, make sure its an email.');

    
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'whoops, make sure its an email.');
  } else{
    setSuccessFor(email);
  }

}
function setErrorFor(input, message){
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  

  small.innerText = message;

  formcontrol.className = 'form-control error';
  
}

function setSuccessFor(input){
  const formcontrol = input.parentElement;
  formcontrol.className = 'form-control success';
}
function isEmail(email){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function openCity(evt, cityName) {
  var i, tabcontent, tabbtn;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabbtn= document.getElementsByClassName("tabbtn");
  for (i = 0; i < tabbtn.length; i++) {
    tabbtn[i].className = tabbtn[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

