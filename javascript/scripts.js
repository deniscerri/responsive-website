//Copy-pasta code marre per nav-bar ne mobile
 const selectElement = (s) => document.querySelector(s);

 selectElement('.open').addEventListener('click', () =>{
    selectElement('.nav-list').classList.add('active');
 });


  selectElement('.close').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
 });
//End 




mybutton = document.getElementById("goUpBtn");
  header = document.getElementById("header");
  navbrand = document.getElementsByClassName("nav-brand");
  logo = navbrand[0];
  nav = document.getElementById("nav");
 

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
    header.style.background = "black";
    header.style.height = "50px";
    nav.style.borderBottom = 0;
    logo.style.width ="20px";
    logo.style.height = null;
    

  }
  if(document.documentElement.scrollTop===0){
    header.style.background = null;
    logo.style = "initial";
    nav.style = "initial";
  }
}

// Kur klikohet, faqja ben scroll ne fillim
function topFunction() {
  document.documentElement.scrollTop = 0;
}



function Output(){
  var name = document.getElementById("fname").value;
  var surname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var textarea = document.getElementById("textarea").value;

  if(name.length >15){
    alert("Name is too long");
    return;
  }else if(name == ""){
    alert("Please enter your name");
    return;
  }else if(surname == ""){
    alert("Please enter your surname");
    return;
  }else if(email == ""){
    alert("Please enter your email");
    return;
  }else if(subject == ""){
    alert("Please enter the subject");
    return;
  }else if(textarea == "" || textarea == "Mesazh"){
    alert("Please write the reason you want to contact us.");
    return;
  }


  alert(name+ ", your message has been sent to our HQ. Thank you for the feedback!");
}


window.onkeydown = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if(key == 27){
    document.documentElement.scrollTop = 0;
  }
}

