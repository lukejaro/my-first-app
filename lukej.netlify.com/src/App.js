import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Logo from './josh.jpg'
function  App()  {
    window.onload = ()=>{
      document.getElementById("1").style.display = "none"
      document.getElementById("2").style.display = "none"
      document.getElementById("3").style.display = "none"
      document.getElementById("4").style.display = "none"
      document.getElementById("joshh").style.display = "none"
    }
    return (
      
      <div className="App">
         
        <div id = "josh"> 
        </div>
        <img src = {Logo} id  = 'joshh' ></img>
        <header className = "App-header" id= "timeUntil"></header>
        <p className = "note" id = "note">  </p>
        <Button id = "1" onClick = {()=>{alert("Baby lock the doors and turn the lights down low...")
          document.getElementById(2).style.display = "" 
          document.getElementById(1).style.display = "none"
      }}>Want a hint?</Button>
         <Button id = "2" onClick = {()=> {alert("It starts with a J....")
        document.getElementById("3").style.display = "" 
        document.getElementById("2").style.display = "none"}}>Another hint?</Button>
         <Button id = "3" onClick = {()=>{ alert("Okay.. Jeez you sure do need a lot of Hints ... We are going to a concert you goof :)")
        document.getElementById("4").style.display = ""
        document.getElementById("3").style.display = "none"}}>You are joking right..</Button>
         <Button id = "4" onClick = {()=>{
           document.getElementById("note").style.display = "none"
           var img = document.createElement("img")
           img.src = {Logo};
           console.log(img) 
           document.getElementById("josh").outerHTML = "<div id = 'josh'>WE ARE GOING TO  SEE JOSH FUCKING TURNER TONIGHT!!! I love you!!!!</div>"
           document.getElementById("joshh").style.display = ""
         }}>But Who though?</Button>
      </div>
    );
    
    }
// Set the date we're counting down to
var countDownDate = new Date("Febuary 15, 2020 18:00:00").getTime();

// Update the count down every 1 second
 var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
   
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timeUntil").innerText = "Valentines Note Clock\n" + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "  ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeUntil").innerHTML = "Neydee, I Love you!";
    document.getElementById("note").innerText= "Babe,\n \n  " + 
            "Thank you for doing everything that you do for me. \n" + 
            "There is not a day that we have been together where you were not there for me \n" + 
            "I'm Luke Jaroszewski for crying out loud; one of the biggest babies out there, I can't keep track of time, I get lost on my way to my own house.\n\n " + 
            "You, Neydee Torres are indeed the BADDEST, HANDS DOWN COOLEST, BEST FRIEND, LOVER, SOMETIMES HATER (only of mexicans), CAT LOVING, " +
            "WHISKEY CHUGGING, BOYSCOUT IGNORING, MOUNTAIN SCALING, CHILD HELPING, MOMMY MILKIN, BOYFRIEND PLEASING, BEAUTIFUL GIRLFRINED of mine that I will love forever :) " +
            "\n\nThank you for truely being my Valentine... all that to be said:  \n\n" + 
            "and in the spirit of valentines day, when we get back, we are locking the doors and turning the lights down low. ;)" + 
            "" 
    document.getElementById("1").style.display  = "";
    
  }
}, 1000);

 
   
 
 


 

export default App;


 