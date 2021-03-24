// Marquee Time
var marquee = document.getElementById("marquee").innerHTML + " // " + Date() + " // ";
document.getElementById("marquee").innerHTML = "";
for(var i = 0; i < 100; i++){
  document.getElementById("marquee").innerHTML+=marquee;
}
// var x = setInterval(function(){
    // document.title = Date();
    // document.getElementById("marquee").innerHTML += marquee;
    // document.getElementById("m2").innerHTML = Date();
// },6000);


// Event listeners
var button = document.getElementById("kokuhakuInput");
document.getElementById("next").addEventListener('click', terminal(document.getElementById('input').value));
button.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click

    // document.getElementById("next").click();
    console.log(document.getElementById('input').value);
    terminal(document.getElementById('input').value);
  }
});

// add commands here
function terminal(input){
  // switch(input){
  //   case "open0":
  //     loadMessage("replaying iteration. . . . . . . . . . . . . . .");
  //     window.open("iteration/0.html");
  //     break;
  //   case "clear":
  //     console.log("it's clear");
  //     break;
  //   default:
  //     loadMessage(input);
  // }
  // console.log(input);
  // loadMessage(input);
  if (input == "open0"){
    loadMessage("replaying iteration. . . . . . . . . . . . . . .");
    window.open("iteration/0.html");
  }else{
    loadMessage(input);
  }
  if (input == "clear"){
    document.getElementById("kokuhakuText").innerHTML = "";
  }
}

var message = "";
// line handler
function loadMessage(msg) {
    message = msg;
    document.getElementById("input").value = "";
    i = 0;
    typeLine();
    document.getElementById("kokuhakuBox").scrollTop = document.getElementById("kokuhakuBox").scrollHeight;
}

// typewriter effect
function typeLine() {
  if (i < message.length) {
      document.getElementById("next").style.visibility = "hidden";
      // document.getElementById("kokuhakuText").innerHTML += dialogue[lineNum].charAt(i);

      // linebreak check
      if (message.substring(i, i + 2) == "/n"){
        document.getElementById("kokuhakuText").innerHTML += "<br>";
        i+=2;
      }else{
        document.getElementById("kokuhakuText").innerHTML += message.charAt(i);
        i++;
      }

      if (i == message.length) {
          document.getElementById("next").style.visibility = "visible";
          document.getElementById("kokuhakuText").innerHTML += "<br>";

      }
      setTimeout(typeLine, 20);
  }
}

// executed first
loadMessage("Last Update: Wed Mar 17 23:26:27 // Kokuhaku™");
// loadMessage("Unlink the world.");
// loadMessage("Unlock the rest.");

// typeLine("Hello world.");
