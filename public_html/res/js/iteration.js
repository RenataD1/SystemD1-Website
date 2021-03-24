// Marquee Time
var integer = 0;
var glitch = "";

document.getElementById("first-marquee").innerHTML = Date();
var x = setInterval(function(){
    document.title = Date();
    document.getElementById("first-marquee").innerHTML = Date() + " what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake ";
},1000);

var lineNum = -1;
var talk = document.getElementById("soundFX");
var currentMessage = document.getElementById("messageBox");

// Script Arrays
var sprite = ["circle.gif",
              "d_rise.gif",
              "d_calm.gif",
              "d_anxious.gif",
              "enochs_map_low.jpg",
              "d_calm.gif",
              "r_calm.gif",
              "d_calm.gif"];

var dialogue = ["Hello.",
              "Today, I will be showing you my pictures.",
              "This is me.",
              "This is me when I'm calm.",
              "This is me when I'm anxious.",
              "This is Enochs.",
              "Goodbye--",
              "Hey, don't forget about me!",
              "Oh, right.. Ruth."];

// Loading Dialogue
function load(){
    // CONTROLLING THE DOCUMENT
    switch (lineNum) {
        case 1:
            var track1 = document.getElementById("bg-music");
            track1.play();
            break;
        case 4:
            currentMessage.style.color = "blue";
            currentMessage.setAttribute("onclick", "window.open('https://www.google.com/maps/@37.704869,-120.939145,5816m/data=!3m1!1e3')");
            break;
        case 5:
            currentMessage.style.color="white";
            currentMessage.removeAttribute("onclick");
            break;
    }
    loadImage();
    loadMessage();
}

// console functions
function reset(){
  lineNum=-1;
  load();
  loadImage();
}
function line(num){
  lineNum=num-2;
  load();
  loadImage();
}

// sprite handler
function loadImage() {
    console.log(lineNum);
    // determine if lineNum is the same as before or empty
    if ((sprite[lineNum] == sprite[lineNum - 1]) || (sprite[lineNum] == "")){
        return;
    } else {
        document.getElementById("window").src = "../res/sprites/" + sprite[lineNum];
    }
}

// line handler
function loadMessage() {
    if (lineNum == dialogue.length-1) {
      // Executed once script is exhausted
      var d = Date();
      alert("Session ended on " + d + ".");
      // window.reload();
      window.close();
      window.open("https://helpdillon.000webhostapp.com/Dillon_Chatbot/week_0.html");
    } else {

      document.getElementById("messageBox").innerHTML = "";
      ++lineNum;
      talk.play();
      i = 0;
      typeLine();
    }
}

// typewriter effect
function typeLine() {
  if (i < dialogue[lineNum].length) {
      document.getElementById("next").style.visibility = "hidden";
      document.getElementById("messageBox").innerHTML += dialogue[lineNum].charAt(i);
      i++;
      if (i == dialogue[lineNum].length) {
          document.getElementById("next").style.visibility = "visible";
          talk.pause();
      }
      setTimeout(typeLine, 30);
  }
}

// executed first
loadMessage();
