$(document).ready(function(){

var hipHop = 0,
    rock = 0,
    pop = 0,
    classical = 0,
    country = 0,
    electro = 0;
    
                   
$("#hipHopMash").click(function(){
  //alert("Added to Hip-Hop");
  hipHop += 1;
  console.log(hipHop);
  $(".potato").toggle(1000);
  $("#potatoGenre").html("<span>Mashed</span>");
});

$("#rockBoil").click(function(){
  //alert("Added to rock");
  rock += 1;
  console.log(rock);
  $(".potato").toggle(1000);
  $("#potatoGenre").html("<span>Boiled!</span>");
});

$("#popSweet").click(function(){
  //alert("Added to pop");
  pop += 1;
  console.log(pop);
  $(".potato").toggle(1000);
  $("#potatoGenre").html("<span>Sweet!</span>");
});

$("#classicalFrench").click(function(){
  //alert("Added to classical");
  classical+= 1;
  console.log(classical);
  $(".potato").toggle(1000);
  $("#potatoGenre").html("<span>French!</span>");
});

$("#countryBake").click(function(){
  //alert("Added to country");
  country += 1;
  console.log(country);
  $(".potato").toggle(1000);
  $("#potatoGenre").html("<span>Country!</span>");
});

$("#electroI").click(function(){
  //alert("Added to electro");
  electro += 1;
  console.log(electro);
  $(".potato").toggle(1000);
  $("#potatoGenre").html("<span>I do not like potatoes.</span>");
  
});

$("#classicalEle").click(function(){
  //alert("Added to classical");
  classical += 1;
  console.log(classical);
  $(".animal").toggle(1000);
  $("#animalGenre").html("<span>Elephant!</span>");
  
});

$("#electroQuail").click(function(){
  //alert("Added to Electro");
  electro += 1;
  console.log(electro);
  $(".animal").toggle(1000);
  $("#animalGenre").html("<span>Quail!</span>");
  
});

$("#countryParrot").click(function(){
  //alert("Added to country");
  country += 1;
  console.log(country);
  $(".animal").toggle(1000);
  $("#animalGenre").html("<span>Parrot!</span>");
  
});

$("#hipHopMonkey").click(function(){
  //alert("Added to hipHop");
  hipHop += 1;
  console.log(hipHop);
  $(".animal").toggle(1000);
  $("#animalGenre").html("<span>Monkey!</span>");
  
});

$("#popLemur").click(function(){
  //alert("Added to pop");
  pop += 1;
  console.log(pop);
  $(".animal").toggle(1000);
  $("#animalGenre").html("<span>Lemur!</span>");
  
});

$("#rockAnt").click(function(){
  //alert("Added to rock");
  rock+= 1;
  console.log(rock);
  $(".animal").toggle(1000);
  $("#animalGenre").html("<span>Ant!</span>");
  
});

$("#electroSexy").click(function(){
  //alert("Added to electro");
  electro+= 1;
  console.log(electro);
  $(".adjective").toggle(1000);
  $("#adjectiveGenre").html("<span>Sexy!</span>");
  
});

$("#classicalGhastly").click(function(){
  classical+= 1;
  console.log(classical);
  $(".adjective").toggle(1000);
  $("#adjectiveGenre").html("<span>Ghastly!</span>");
  
});

$("#countryImmaculate").click(function(){
  country+= 1;
  console.log(country);
  $(".adjective").toggle(1000);
  $("#adjectiveGenre").html("<span>Immaculate!</span>");
  
});

$("#popSnarky").click(function(){
  pop+= 1;
  console.log(pop);
  $(".adjective").toggle(1000);
  $("#adjectiveGenre").html("<span>Snarky!</span>");
  
});

$("#hipHopJubilant").click(function(){
  hipHop+= 1;
  console.log(hipHop);
  $(".adjective").toggle(1000);
  $("#adjectiveGenre").html("<span>Jubilant!</span>");
  
});

$("#rockRatchet").click(function(){
  rock+= 1;
  console.log(rock);
  $(".adjective").toggle(1000);
  $("#adjectiveGenre").html("<span>Ratchet!</span>");
  
});

$("#countryParks").click(function(){
  country+= 1;
  console.log(country);
  $(".tvShow").toggle(1000);
  $("#tvShowGenre").html("<span>Parks & Recreation!</span>");
  
});

$("#classicalOrange").click(function(){
  classical+= 1;
  console.log(classical);
  $(".tvShow").toggle(1000);
  $("#tvShowGenre").html("<span>Orange is the New Black!</span>");
  
});

$("#electroKeeping").click(function(){
  electro+= 1;
  console.log(electro);
  $(".tvShow").toggle(1000);
  $("#tvShowGenre").html("<span>Keeping up with the Kardashians!</span>");
  
});

$("#popMLB").click(function(){
  pop+= 1;
  console.log(pop);
  $(".tvShow").toggle(1000);
  $("#tvShowGenre").html("<span>MLB!</span>");
  
});

$("#rockJeopardy").click(function(){
  rock += 1;
  console.log(rock);
  $(".tvShow").toggle(1000);
  $("#tvShowGenre").html("<span>Jeopardy!</span>");
  
});

$("#hipHopGOT").click(function(){
  hipHop+= 1;
  console.log(hipHop);
  $(".tvShow").toggle(1000);
  $("#tvShowGenre").html("<span>Game of Thrones!</span>");
  
});

$("#countrySteak").click(function(){
  country+= 1;
  console.log(country);
  $(".chipotle").toggle(1000);
  $("#chipotleProtein").html("<span>Steak!</span>");
  
});

$("#classicalChicken").click(function(){
  classical+= 1;
  console.log(classical);
  $(".chipotle").toggle(1000);
  $("#chipotleProtein").html("<span>Chicken!</span>");
  
});

$("#electroCarnitas").click(function(){
  electro+= 1;
  console.log(electro);
  $(".chipotle").toggle(1000);
  $("#chipotleProtein").html("<span>Carnitas!</span>");
  
});

$("#popBarbacoa").click(function(){
  pop+= 1;
  console.log(pop);
  $(".chipotle").toggle(1000);
  $("#chipotleProtein").html("<span>Barbacoa!</span>");
  
});

$("#rockVeggies").click(function(){
  rock+= 1;
  console.log(rock);
  $(".chipotle").toggle(1000);
  $("#chipotleProtein").html("<span>Veggies!</span>");
  
});

$("#hipHopI").click(function(){
  hipHop+= 1;
  console.log(hipHop);
  $(".chipotle").toggle(1000);
  $("#chipotleProtein").html("<span>I don't go to Chipotle.</span>");
  
});

$("#countrySiberia").click(function(){
  country += 1;
  console.log(country);
  $(".vacation").toggle(1000);
  $("#vacationSpot").html("<span>Siberia!</span>");
  
});

$("#classicalGuatamala").click(function(){
  classical += 1;
  console.log(classical);
  $(".vacation").toggle(1000);
  $("#vacationSpot").html("<span>Guatamalian Rainforest!</span>");
  
});

$("#electroMorgue").click(function(){
  electro += 1;
  console.log(electro);
  $(".vacation").toggle(1000);
  $("#vacationSpot").html("<span>A morgue in Lithuania!</span>");
  
});

$("#popNorthKorea").click(function(){
  pop += 1;
  console.log(pop);
  $(".vacation").toggle(1000);
  $("#vacationSpot").html("<span>North Korea!</span>");
  
});

$("#rockFlatiron").click(function(){
  rock += 1;
  console.log(rock);
  $(".vacation").toggle(1000);
  $("#vacationSpot").html("<span>Flatiron School!</span>");
  
});

$("#hipHopAzer").click(function(){
  hipHop += 1;
  console.log(hipHop);
  $(".vacation").toggle(1000);
  $("#vacationSpot").html("<span>Azerbaijan!</span>");
  
});

$("#countryLohan").click(function(){
  country += 1;
  console.log(country);
  $(".celebrity").toggle(1000);
  $("#celebrityPerson").html("<span>Lindsay Lohan!</span>");
  
});

$("#classicalDavid").click(function(){
  classical += 1;
  console.log(classical);
  $(".celebrity").toggle(1000);
  $("#celebrityPerson").html("<span>David Hasselhof!</span>");
  
});

$("#electroSnookie").click(function(){
  electro += 1;
  console.log(electro);
  $(".celebrity").toggle(1000);
  $("#celebrityPerson").html("<span>Snookie!</span>");
  
});

$("#popNixon").click(function(){
  pop += 1;
  console.log(pop);
  $(".celebrity").toggle(1000);
  $("#celebrityPerson").html("<span>President Nixon!</span>");
  
});

$("#rockSoulja").click(function(){
  rock += 1;
  console.log(rock);
  $(".celebrity").toggle(1000);
  $("#celebrityPerson").html("<span>Soulja Boy!</span>");
  
});

$("#hipHopFriday").click(function(){
  hipHop += 1;
  console.log(hipHop);
  $(".celebrity").toggle(1000);
  $("#celebrityPerson").html("<span>The Girl that Sang Friday!</span>");
  
});
       console.log("hello");
  
  $('#submit').click(function(){
    console.log('this is working');  
  });

    $("#submit").click(function(){
    if (hipHop > rock && hipHop > pop && hipHop > classical && hipHop > country && hipHop > electro) {
      window.open("hip_hop.html");
       console.log("hello");
    } else if (rock > hipHop && rock > pop && rock > classical && rock > country && rock > electro) {
      window.open("rock.html"); 
    } else if (pop > hipHop && pop > rock && pop > classical && pop > country && pop > electro) {
      window.open("pop.html");
    } else if (classical > hipHop && classical > rock && classical > pop && classical > country && classical > electro){
      window.open("classical.html");
    } else if (country > hipHop && country > rock && country > pop && country > classical && country > electro) {
     window.open("country.html");
    } else if (electro > hipHop && electro > rock && electro > pop && electro > classical && electro > country){
     window.open("electronic.html");
  }
  });
});

