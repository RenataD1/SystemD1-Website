// Marquee Time
var integer = 0;
var glitch = "";
document.getElementById("first-marquee").innerHTML = Date();
var x = setInterval(function(){
    document.title = Date();
    document.getElementById("first-marquee").innerHTML = Date() + " what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake what you are reading is not a mistake what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake  what you are reading is not a mistake ";
},1000);






// Script variable
var lineNum = -1;

// soundFX
var talk = document.getElementById("soundFX");
var track1 = document.getElementById("bg-music");

var messageBox = document.getElementById("messageBox");
var display = document.getElementById("display");
var blue = document.getElementById("kokuhaku");

// Script Arrays
var sprite = ["circle.gif",
              "d_rise.gif",
              "d_calm.gif",
              "d_anxious.gif",
              "",
              "d_calm.gif",
              "",
              "",
              "",
              "",
              "",
              "enochs_map_low.jpg",
              "d_calm.gif",
              "r_calm.gif",
              "d_calm.gif"];

var dialogue = ["Hello.",
              "Today, I will be showing you my sprites.",
              "This is me.",
              "This is me when I'm calm.",
              "This is me when I'm anxious.",
              "KOKUHAKU! WAKE UP!",
              "",
              "",
              "",
              "Maybe just shut the fuck up dude.",
              "clear",
              "Now go back to sleep.",
              "Anyways, this is Enochs.",
              "Goodbye--",
              "Hey, don't forget about me!",
              "Oh, right.. Ruth."];

// jQuery.get('txt/0.txt', function(data){
//    //process text file line by line
//    // var textByLine = data.split("\n")
//    console.log(data);
//    // $('#div').html(textByLine);
// });

// Loading Dialogue
function load(){
    // CONTROLLING THE DOCUMENT
    switch (lineNum) {
        case 1:
            track1.play();
            break;
        case 4:
            track1.pause();
            break;
        case 5:
            // blue.style.visibility = "visible";
            document.getElementById("kokuhaku").className="opened";
            // messageBox = document.getElementById("kokuhakuText");
            printMessage(startMessage + "/nGood morning, Dillon Hayes.");
            break;
        case 6:
          printMessage("/nIt's been only a few seconds since you last called me.");
          break;
        case 7:
          printMessage("/nMaybe if you slowed down a bit, I'd actually be able to update my software.");
          break;
        case 8:
            messageBox = document.getElementById("messageBox");
            break;
        case 9:
            document.getElementById("kokuhakuText").innerHTML = "";
            // terminal("clear");
            break;
        case 10:
            document.getElementById("kokuhaku").removeAttribute("class");
            document.getElementById("kokuhaku").className="closed";
            // document.getElementById("kokuhakuBox").style.maxHeight = 0;
            break;
        case 11:

            track1.play();
            messageBox.style.color = "blue";
            // messageBox.setAttribute("onclick",
            // "window.open('https://www.google.com/maps/@37.704869,-120.939145,5816m/data=!3m1!1e3')");
            break;
        case 12:

            messageBox.style.color="white";
            // messageBox.removeAttribute("onclick");
            break;
    }
    console.log("line " + lineNum);
    loadImage();
    loadMessage();
}

// // console functions
function reset(){
  lineNum=-1;
  load();
  loadImage();
}
function line(num){
  lineNum=num-1;
  load();
  loadImage();
}

// sprite handler
function loadImage() {


    // determine if lineNum is the same as before or empty
    if ((sprite[lineNum] == sprite[lineNum - 1]) || (sprite[lineNum] == "")){
        return;
    } else {
        display.src = "../res/sprites/" + sprite[lineNum];
    }

}

// line handler
function loadMessage() {
    if (lineNum == dialogue.length-1) {
      // Executed once script is exhausted
      alert("Session ended on " + Date() + ".");
      window.reload();

    } else {
      if (messageBox != document.getElementById("kokuhakuText")){
        messageBox.innerHTML = "";
      }
      ++lineNum;
      i = 0;

      talk.play();
      typeLine();
    }
}

function typeLine() {

  if (i < dialogue[lineNum].length) {
      document.getElementById("next").style.visibility = "hidden";
      messageBox.innerHTML += dialogue[lineNum].charAt(i);
      i++;
      if (i == dialogue[lineNum].length) {
          messageBox.innerHTML += "<br>";
          document.getElementById("kokuhakuBox").scrollTop = document.getElementById("kokuhakuBox").scrollHeight;
          document.getElementById("next").style.visibility = "visible";
          talk.pause();
      }
      setTimeout(typeLine, 30);
  }

}

// executed first
loadMessage();
