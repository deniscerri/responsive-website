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

//kur ekzekutohet, ben scroll ne fillim te faqes
function topFunction() {
  document.documentElement.scrollTop = 0;
}


//Kur klikohet nje nga figurat, therritet funksioni article me id e figures. Keshtu nuk kemi pse te vendosim ne inline per cdo figure onclick="article(this.id);"
var elements = document.querySelectorAll(".image");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
   article(this.id);
  });
}





//Hidden Article Function
var checkButton;
var articleID = "article-btn";
var currentArticle;
function article(articleID){

  document.getElementById("article-btn").style.display = "block";
 

  articles = document.getElementsByClassName("hidden-article");
  
  var previousBtn = document.getElementById("article-prev");
  var nextBtn = document.getElementById("article-next");
  var articleImage = document.getElementById("article-img");


  if(articleID.replace(/[a-zA-Z]+/, '')=="0"){
    previousBtn.classList.add("hidden");
  }else if(articleID.substring(articleID.length-2)=="f8"){ // fotoja e fundit do jete e 8 ne fishing f8
    nextBtn.classList.add("hidden");
  }else{
    previousBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }

  if(articleID =="article-btn"){
    articles[0].style.display = "none";
    document.getElementById("main").style.display = "block";
    document.body.style.backgroundColor = "white";
    checkButton.scrollIntoView(false);
    articleImage.classList.add("hidden");
    document.getElementById("article-btn").style.display = "none";
    return;
  }else if(articleID == "article-prev"){
    var prevIDTag = currentArticle.replace(/[0-9]/g, '');
    var prevIDNr = currentArticle.replace(/[a-zA-Z]+/, '');
    article(prevIDTag + (prevIDNr-1));
    
  }else if(articleID == "article-next"){
    var nextIDTag = currentArticle.replace(/[0-9]/g, '');
    var nextIDNr = currentArticle.replace(/[a-zA-Z]+/, '');

    try{
      article(nextIDTag + (parseInt(nextIDNr,10) + 1));
    }catch(err){
      nextBtn.classList.add("hidden");
    }

  }


 
  
  var paragrafi = document.getElementById(articleID).getElementsByTagName("p")[0].innerHTML;
  var vendi = document.getElementById(articleID).getElementsByTagName("h1")[0].innerHTML;
  var shteti = document.getElementById(articleID).getElementsByTagName("h3")[0].innerHTML;
  var latitude = document.getElementById(articleID).getElementsByTagName("h1")[1].innerHTML;
  var longitude = document.getElementById(articleID).getElementsByTagName("h1")[2].innerHTML;

  currentArticle = articleID;

  //merr foton e destinacionit
  var imageID = document.getElementById(articleID);
  var image = window.getComputedStyle(imageID);
  var imagecss = image.getPropertyValue('background-image');
  


  //button sherben kur ne heqim artikullin dhe na ben scroll the katrori qe shtypem.
  var buttons = document.getElementsByClassName("image");
  var button = buttons[articleID];




  var articleParagraph = document.getElementById("article-paragraph");
  var articleVendi = document.getElementById("article-vendi");
  var articleShteti = document.getElementById("article-shteti");
  
  var articleLat = document.getElementById("article-lat");
  var articleLng = document.getElementById("article-lng");

  //merr foton e artikullit
  var articleImageID = document.getElementsByClassName("article-image")[0];
  
  
    
      articleParagraph.innerHTML = paragrafi;
      articleVendi.innerHTML = vendi;
      articleShteti.innerHTML = shteti;
      articleImageID.style.backgroundImage = imagecss;
      articleLat.innerHTML = latitude;
      articleLng.innerHTML = longitude;
      articleImage.classList.remove("hidden");

      articles[0].style.display = "block";
      document.getElementById("main").style.display = "none";
      document.body.style.backgroundColor = "black";
    
  
  var lat = parseInt(articleLat.innerHTML);
  var long = parseInt(articleLng.innerHTML);


  
  initMap(lat, long);

  topFunction();

  checkButton = button;

}


function initMap(lat, lng) {

  var destination = {lat: lat, lng: lng};
  
  var map = new google.maps.Map(
      document.getElementById('map-section'), {zoom: 4, center: destination});
  var marker = new google.maps.Marker({position: destination, map: map});


}


window.onkeydown = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  var previousBtn = document.getElementById("article-prev");
  var nextBtn = document.getElementById("article-next");

    if(!(document.getElementsByClassName("hidden-article")[0].style.display == "none")){
          if (key == 27) {
            article("article-btn");
          }
          if(key == 39){
            if(!nextBtn.classList.contains("hidden")){
                article("article-next");
            }
                
          }
          if(key == 37){
            if(!previousBtn.classList.contains("hidden")){
                article("article-prev");
            }
          }
    }else{
      if (key == 27){
        document.documentElement.scrollTop = 0;
      }
    }
    
}


