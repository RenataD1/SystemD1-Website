// Marquee Time
// var marquee = document.getElementById("marquee").innerHTML + " // " + Date() + " // ";
// document.getElementById("marquee").innerHTML = "";
// for(var i = 0; i < 100; i++){
//   document.getElementById("marquee").innerHTML+=marquee;
// }
// var x = setInterval(function(){
    // document.title = Date();
    // document.getElementById("marquee").innerHTML += marquee;
    // document.getElementById("m2").innerHTML = Date();
// },6000);


// document.getElementById("next").addEventListener('click', terminal(document.getElementById('input').value));
// Event listeners
var prompt = document.getElementById("input");
prompt.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    terminal(document.getElementById('input').value);
  }
});

// add commands here
function terminal(input){
  // switch(input){
  //   case "open0":
  //     console.log(1);
  //     loadMessage("replaying iteration. . . . . . . . . . . . . . .");
  //     window.open("iteration/0.html");
  //     break;
  //   case "clear":
  //     console.log(document.getElementById("kokuhakuText").innerHTML);
  //     document.getElementById("kokuhakuText").innerHTML = "";
  //     break;
  //   default:
  //     // console.log(3);
  //     loadMessage(input);
  // }
  // console.log(input);

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
      prompt.style.disabled = "yes";
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
          prompt.style.visibility = "visible";
          document.getElementById("next").style.visibility = "visible";
          document.getElementById("kokuhakuText").innerHTML += "<br>";

      }
      setTimeout(typeLine, 20);
  }
}

// terminal startup
loadMessage("Last Update: Wed Mar 17 23:26:27 // Kokuhaku™");
