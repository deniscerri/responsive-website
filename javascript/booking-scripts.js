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


var currentCard = "adventurerCard";
document.getElementById("adventurerCard").getElementsByTagName("h1")[0].style.color = "white";
document.getElementById("adventurerCard").getElementsByTagName("h2")[0].style.color = "white";

function activePrice(PriceID){
  var card = document.getElementById(PriceID);
  var h1 = document.getElementById(PriceID).getElementsByTagName("h1")[0];
  var h2 = document.getElementById(PriceID).getElementsByTagName("h2")[0];

  var current = document.getElementById(currentCard);
  var currenth1 = document.getElementById(currentCard).getElementsByTagName("h1")[0];
  var currenth2 = document.getElementById(currentCard).getElementsByTagName("h2")[0];

  if(PriceID != currentCard){

    card.classList.add(PriceID);
    h1.style.color = "white";
    h2.style.color = "white";


    current.classList.remove(currentCard);
    currenth1.style.color = "initial";
    currenth2.style.color = "initial";

     currentCard = PriceID;

  }

  //heqim Card nga id dhe transformohet ne emer te thjeshte te kategorise. Keshtu mund ta perdorim per te ngjyrosur divin ne fund
  var PricingID = PriceID.substring(0,PriceID.length-4);
  

  //Nese ngjyra e booking Div eshte e njejte nuk kemi pse te bejme ndryshime ne te
  //Kushti tjeter heq bug nese duam te klikojme kartat siper ne fillim por ngjyra e bookingColor e quan si undefined
  if(!document.getElementById("bookingColor").style.backgroundColor == document.getElementById(PricingID).style.backgroundColor || document.getElementById("bookingColor").style.backgroundColor == ""){
    bookingColor(PricingID);
  }

  return;
}





function bookingColor(PricingID){
  var BookingImage = document.getElementById("bookingWave");
  var BookingDiv = document.getElementById("bookingColor");
  var inputFields = [document.getElementById("fname"),document.getElementById("lname"),document.getElementById("mail")];


  var backgroundColor;

  document.getElementById(PricingID).checked = true;
  

  if(PricingID == "starter"){
    BookingImage.src = "images/starterwave.png";
    backgroundColor  = "#86ff33";
   
  }else if(PricingID == "adventurer"){
    BookingImage.src = "images/adventurerwave.png";
    backgroundColor = "#33dbff";
    
  }else if(PricingID == "explorer"){
    BookingImage.src = "images/explorerwave.png";
    backgroundColor = "#ff8300";
   
  }

  BookingDiv.style.backgroundColor = backgroundColor;

  
  for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].style.backgroundColor = "transparent";
  }

  destinations(PricingID);


  if(PricingID+"Card" != currentCard){
    activePrice(PricingID+"Card");
  }
}

var explorerHiking = ["Pennine Way","Camino De Santiago","Appalachian Trial", "Basho Wayfarer","Refugio Frey", "Mount Toubkal", "Dragon's Back", "The Dingle Way", "Tergo La Trek","Tahoe Rim Trail","The Silk Road","Lechweg Trail","Indus Valley","Bwindi Forest","West Coast Trail", "Percossi Occitani","Rares and Royal","Monteverde","Lycian Way","Balkans","Cloud Forest","Cape To Cape Track"];
var explorerCamping =["Mount Cook","Devon","Loch Lomond","Alps","Hossa Park","Skane","Zion Park","Patagonia","Vancouver Island","Asturias","Connemara","Simien Mountains","Tasmania","Seto Island","Ladakh"];
var explorerRafting = ["Grand Canyon","Middle Fork","Zambezi River","Fataefu River","Rangitikei","Noce River","Sjoa River","Tara River"];
var explorerSnowBoarding = ["SnowBird","Cervina","Telluride","Verbier","Charmonix","Mammoth Mountain","Squaw Valley","Alpine Meadows","Whisler Blackcomb","Mt Baker"];
var explorerSkydiving = ["Palm Jumeirah","Fox Glacier","Hawaii","Interlaken","North Beach","Snohomish","Mt Everest","Pattaya","Moab"];
var explorerFishing = ["Prince Edward","Belize","Malidi","KeyWest","Panama","Lousiana","Bermuda","Bahamas","Cabo San Lucas"];



var bookHiking = document.getElementById("bookHiking");
var bookCamping = document.getElementById("bookCamping");
var bookRafting = document.getElementById("bookCamping");
var bookSnowboarding = document.getElementById("bookSnowboarding");
var bookSkydiving = document.getElementById("bookSkyDiving");
var bookFishing = document.getElementById("bookFishing");


function destinations(PricingID){

  var cat = [document.getElementById("snowboarding"),document.getElementById("skydiving"),document.getElementById("fishing")];
  var cat2 = [document.getElementById("bookSnowboarding"),document.getElementById("bookSkyDiving"),document.getElementById("bookFishing")];
  var snowboarding = document.getElementsByClassName("snowboarding")[0];
  var skydiving = document.getElementsByClassName("skydiving")[0];
  var fishing = document.getElementsByClassName("fishing")[0];

  if(PricingID == "starter"){
   bookSnowboarding.classList.add("hidden");
   bookSkydiving.classList.add("hidden");
   bookFishing.classList.add("hidden");


   for (var i = 0; i < cat.length; i++) {
     cat[i].style.filter = "brightness(50%)";
     cat[i].style.transform = "scale(0.8)";
     cat2[i].selectedIndex = 0;
     
   }
   snowboarding.style.background = 'url("./images/snowboarding.jpg") center no-repeat';
   skydiving.style.background = 'url("./images/skydiving.jpg") center no-repeat';
   fishing.style.background = 'url("./images/fishing.jpg") center no-repeat';
   

  }else if(PricingID == "adventurer"){
    bookSnowboarding.classList.remove("hidden");
    bookSkydiving.classList.remove("hidden");
    bookFishing.classList.remove("hidden");


   for (var i = 0; i < cat.length; i++) {
     cat[i].style.filter = "brightness(100%)";
     cat[i].style.transform = "scale(1)";
   }
   

    
  }else if(PricingID == "explorer"){
    bookHiking.classList.remove("hidden");
    bookCamping.classList.remove("hidden");
    bookRafting.classList.remove("hidden");
    bookSnowboarding.classList.remove("hidden");
    bookSkydiving.classList.remove("hidden");
    bookFishing.classList.remove("hidden");

    for (var i = 0; i < cat.length; i++) {
     cat[i].style.filter = "brightness(100%)";
     cat[i].style.transform = "scale(1)";
    }

  }

}


function addDestinations(){
  var i;
    var hiking = explorerHiking;
    var camping = explorerCamping;
    var rafting = explorerRafting;
    var snowboarding = explorerSnowBoarding;
    var skydiving = explorerSkydiving;
    var fishing = explorerFishing;
  

  var select = document.getElementById("bookHiking");
  for (i = 0; i < hiking.length; i++) {
       var opt = hiking[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = i;
        select.appendChild(el);
  }
   var select = document.getElementById("bookCamping");
  for (i = 0; i < camping.length; i++) {
       var opt = camping[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = i;
        select.appendChild(el);
  }
   var select = document.getElementById("bookRafting");
  for (i = 0; i < rafting.length; i++) {
       var opt = rafting[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = i;
        select.appendChild(el);
  }
   var select = document.getElementById("bookSnowboarding");
  for (i = 0; i < snowboarding.length; i++) {
       var opt = snowboarding[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = i;
        select.appendChild(el);
  }
   var select = document.getElementById("bookSkyDiving");
  for (i = 0; i < skydiving.length; i++) {
       var opt = skydiving[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = i;
        select.appendChild(el);
  }
   var select = document.getElementById("bookFishing");
  for (i = 0; i < fishing.length; i++) {
       var opt = fishing[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = i;
        select.appendChild(el);
  }


  return;

}

/*Hiking images*/
var hikingPics = ["hiking.jpg","pennine-way.jpg","camino-de-santiago.jpg","appalachian-trail.jpg","the-basho-wayfarer.jpg","refugio-frey-and-cerro-catedral.jpg","mount-toubkal.jpg","dragons-back.jpg","the-dingle-way.jpg"
,"tergo-la-trek.jpg","tahoe-rim-trail.jpg","the-silk-road.jpg","lechweg-trail.jpg","indus-valley.jpg","bwindi-forest.jpg"
,"west-coast-trail.jpg","percorsi-occitani.jpg", "lares-royal-trail.jpg","monteverde-cloud-forest-reserve.jpg"
,"the-lycian-way.jpg","the-balkans.jpg","cloud-forest-trek.jpg","cape-to-cape-track.jpg"]; 

/*Camping images*/
var campingPics = ["camping.jpg","mount-cook.jpg","devon.jpg","loch-lomond.jpg","the-alps.jpg","hossa-park.jpg","skane.jpg","zion-park.jpg"
,"patagonia.jpg","vancouver-island.jpg","asturias.jpg","connemara.jpg","simien-mountains.jpg","tasmania.jpg","seto-sea.jpg","ladakh.jpg"];

/*River Rafting images*/
var raftingPics = ["rafting.jpg","grand-canyon-rafting.jpg","rafting-middle-fork.jpg","zambezi-river-rafting.jpg","fatalefu-river-rafting.jpg"
,"rangitikei-river-confluence.jpg","noce-river.jpg","sjoa-river-norway.jpg","rafting-tara-river-montenegro.jpg"];


/*Snowboarding images*/
var snowboardingPics = ["snowboarding.jpg","snowbird.jpg","cervinia.jpg","telluride.jpg","verbier.jpg","charmonix.jpg","mammoth-mountain.jpg"
,"squaw-valley.jpg","alpine-meadows.jpg","whistler-blackcomb.jpg","mt-baker.jpg"];

/*Skydiving images*/
var skydivingPics = ["skydiving.jpg","palm-jumeirah.jpeg","fox-glacier.jpeg","hawaii.jpeg","interlaken.jpeg","north-beach.jpeg"
,"snohomish.jpeg","mount-everest.jpeg","pattaya.jpeg","moab.jpeg"];

/*Fishing images*/
var fishingPics = ["fishing.jpg","nova-scotia.jpg","belize.jpg","malindi.jpg","key-west.jpg","panama.jpg","louisiana.jpg","bermuda.jpg"
,"bahamas.jpg","cabo-san-lucas.jpg"];





function destinationPicture(ID){
  var array;
  var dropdownID = document.getElementById(ID);
  var selectedName = dropdownID.options[dropdownID.selectedIndex].text;

  switch(ID) {
    case "bookHiking":
      array = explorerHiking;
      document.getElementsByClassName("hiking")[0].style.background = 'url("./images/destinations/'+hikingPics[dropdownID.selectedIndex]+'") center no-repeat';
      break;
    case "bookCamping":
      array = explorerCamping;
      document.getElementsByClassName("camping")[0].style.background = 'url("./images/destinations/'+campingPics[dropdownID.selectedIndex]+'") center no-repeat';
      break;
    case "bookRafting":
      array = explorerRafting;
      document.getElementsByClassName("rafting")[0].style.background = 'url("./images/destinations/'+raftingPics[dropdownID.selectedIndex]+'") center no-repeat';
      break;
    case "bookSnowboarding":
      array = explorerSnowBoarding;
      document.getElementsByClassName("snowboarding")[0].style.background = 'url("./images/destinations/'+snowboardingPics[dropdownID.selectedIndex]+'") center no-repeat';
      break;
    case "bookSkyDiving":
      array = explorerSkydiving;
      document.getElementsByClassName("skydiving")[0].style.background = 'url("./images/destinations/'+skydivingPics[dropdownID.selectedIndex]+'") center no-repeat';
      break;  
    case "bookFishing":
      array = explorerFishing;
      document.getElementsByClassName("fishing")[0].style.background = 'url("./images/destinations/'+fishingPics[dropdownID.selectedIndex]+'") center no-repeat';
      break;    
  }




}






function Output(){
  var name = document.getElementById("fname").value;
  var surname = document.getElementById("lname").value;
  var email = document.getElementById("mail").value;
  var checkin = document.getElementById("checkIn").value;
  var checkout = document.getElementById("checkOut").value;
  var plan = document.getElementsByName("pricing");


  var hiking = document.getElementById("bookHiking");
  var camping = document.getElementById("bookCamping");
  var rafting = document.getElementById("bookRafting");
  var snowboarding = document.getElementById("bookSnowboarding");
  var skydiving = document.getElementById("bookSkyDiving");
  var fishing = document.getElementById("bookFishing");



  if(!checkin){
    alert("Please enter your Check In date");
    return;
  }else if(!checkout){
    alert("Please enter your Check Out date");
    return;
  }else if(checkout <= checkin){
    alert("Check Out date shouldn't be previous or in the same date as Check In date");
    return;
  }

  var h = hiking.options[hiking.selectedIndex].text;
  var c = camping.options[camping.selectedIndex].text;
  var r = rafting.options[rafting.selectedIndex].text;
  var s = snowboarding.options[snowboarding.selectedIndex].text;
  var sk = skydiving.options[skydiving.selectedIndex].text;
  var f = fishing.options[fishing.selectedIndex].text;


  if(h == "Hiking" && c == "Camping" && r == "River Rafting" && s == "Snowboarding" && sk == "Skydiving" && f == "Fishing"){
    alert("Please Choose at least one destination");
    return;
  }



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
  }



  
  




  var planID;

  for (var i = 0; i < plan.length; i++) {
    if(plan[i].checked){
      planID = plan[i].id;
      break;
    }
  }

  planID = planID.substring(0,1).toUpperCase() + planID.substring(1);




  alert("Welcome "+name+" "+surname+
      "\nEmail: "+email+"\n"
      + "Your Plan: "+planID);


  


  var message = "Destinations:\n";

  if(h != "Hiking"){
    message +="Hiking: "+h;
  }
  if(c != "Camping"){
    message += "\nCamping: "+c;
  }
  if(r != "River Rafting"){
    message += "\nRiver Rafting: "+r;
  }
  if(s != "Snowboarding"){
    message += "\nSnowboarding: "+s;
  }
  if(sk != "Skydiving"){
    message += "\nSky Diving: "+sk;
  }
  if(f != "Fishing"){
    message += "\nFishing: "+f;
  }

  alert(message);
  
}



  
//Vendos ngjyre background te alternuara tek cilesite e cmimeve
var features = document.getElementsByClassName("features");

for (var i = 0; i < features.length; i+=2) {
    features[i].style.backgroundColor = "#F8FAFF";
}




//FAQ///////////////////////
var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
};
}


window.onload = function() {
  addDestinations();
};




window.onkeydown = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if(key == 27){
    document.documentElement.scrollTop = 0;
  }
}



