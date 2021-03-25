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
var prompt = document.getElementById("input");
prompt.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    terminal(document.getElementById('input').value);
  }
});

// add commands here
function terminal(input){
  document.getElementsByClassName("blink")[0].parentNode.removeChild(document.getElementsByClassName("blink")[0]);
  document.getElementById("kokuhakuText").innerHTML += "D1: ";
  switch(input){

    case "help":
      loadMessage(input + "/n/nCOMMANDS:/n/nnews - returns the local shenanigans/nclear - clears the terminal/nplay # - replays a previous iteration of Dillon Hayes/n");
      break;

    case "news":
      loadMessage(input + "/n‘Enochs High Teacher Accused Of Having Inappropriate Relationship With Student’/nBy CBS13 Staff/nMarch 2, 2021 at 12:37 pm /nMODESTO (CBS13) — A Modesto high school teacher has been arrested on suspicion of having an inappropriate relationship with a student. Modesto police say, on Monday, detectives arrested Enochs High School teacher Patrick Mester. Exactly when the investigation into Mester started is unclear, but police say the alleged victim is an Enochs High student. Modesto City Schools says they revoked his access to the school once they learned of his arrest. “Mr. Mester completed all pre-employment requirements, including fingerprint clearance and background checks. He also received annual training on the prevention of harassment and child abuse reporting,” the district said in a statement on his arrest. Mester has been a music/band teacher at Enochs High since the 2007-2008 school year, officials say, and has been employed by the district since 2003. ");
      break;

    case "clear":
      document.getElementById("kokuhakuText").innerHTML = "";
      loadMessage("Last Update: Wed Mar 17 23:26:27 // Kokuhaku™");
      document.getElementById("input").value = "";
      break;

    case "play 0":
        // document.getElementById("kokuhakuText").innerHTML += "<img id='kokuhakuImg'src='res/sprites/circle.gif'>";

        if (window.confirm("You are about to enter an outdated conversation with Dillon Hayes. Is that ok?")){
          setTimeout("window.open('iteration/0.html')", 1000);
          loadMessage(input + "/nloading recorded iteration.........");

        }else{
          loadMessage("iteration cancelled");
        }

        break;

    default:
      // console.log(3);
      loadMessage(input + "/ncommand not found: " + input);
  }

}

var message = "";
// line handler
function loadMessage(msg) {
    message = msg;
    document.getElementById("input").value = "";

    i = 0;
    typeLine();
}

// typewriter effect
function typeLine() {
  // if (document.getElementById("kokuhakuBox").scrollTop != document.getElementById("kokuhakuBox").scrollHeight){
    document.getElementById("kokuhakuBox").scrollTop = document.getElementById("kokuhakuBox").scrollHeight;
  // }

  if (i < message.length) {
      prompt.style.disabled = "yes";
      document.getElementById("next").style.visibility = "hidden";
      // document.getElementById("kokuhakuText").innerHTML += dialogue[lineNum].charAt(i);

      // linebreak check
      if (message.substring(i, i + 2) == "/n"){
        document.getElementById("kokuhakuBox").scrollTop = document.getElementById("kokuhakuBox").scrollHeight;
        document.getElementById("kokuhakuText").innerHTML += "<br>";

        i+=2;
      }else{
        document.getElementById("kokuhakuText").innerHTML += message.charAt(i);
        i++;
      }

      if (i == message.length) {
          prompt.style.visibility = "visible";
          document.getElementById("next").style.visibility = "visible";
          document.getElementById("kokuhakuText").innerHTML += "<span class='blink'>|</span><br>";
      }
      setTimeout(typeLine, 20);
  }
}

// terminal startup
loadMessage("Last Update: Wed Mar 17 23:26:27 // Kokuhaku™");
