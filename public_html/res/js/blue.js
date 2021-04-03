var printFX = document.getElementById("soundFX");



function terminal(input){
  input == String(input).toLowerCase();
  printFX.play();
  // document.getElementsByClassName("blink")[0].parentNode.removeChild(document.getElementsByClassName("blink")[0]);
  switch(input){
    case "location":
      loadMessage(input + "/nLife. Earth. 37.6902\xB0N 120.9355\xB0W/nLife. Earth. 37.6902\xB0N 120.9355\xB0W/nLife. Earth. 37.6902\xB0N 120.9355\xB0W/n 0\t0   0/n  0   0   /n   0   0/n0   0   0 /nhttps://www.google.com/maps/@37.7097763,-120.9368894,5816m/data=!3m1!1e3");
      break;
    case "concept":
      var concept = "/nDog licks. Graffiti. Pink. Bug bike. Sirius. Lemon drops./nCrested snake. Orange sakura. Lightbulb. QR. Suoibem./nMebious. Honeymoon. Library. Apollo. Summer. Masaya./nSolvent. Soulshatter. Desperation. Terminal. LM-5. Blue./nConfession. Solve the Crescent. Answer the call. Open the casket./nRelink to sanity. Unlinked the world. Unlocked the rest./nSystem-d1. A concept.";
      loadMessage(input + concept + concept + concept + concept);
      break;
    case "final":
      loadMessage(input + "/n/nJames C. Enochs/n/nAugust 2021/n/nRecruiting now./n/n/n/n/n");
      break;
    case "help":
      printMessage(input + "/n/nCOMMANDS:/n/nnews - returns the local shenanigans/nclear - clears the terminal/nplay # - replays a previous iteration of Dillon Hayes/n");
      break;

    case "news":
      printMessage(input + "/n\u2018Enochs High Teacher Accused Of Having Inappropriate Relationship With Student\u2019/nBy CBS13 Staff/nMarch 2, 2021 at 12:37 pm /nMODESTO (CBS13) \u2014 A Modesto high school teacher has been arrested on suspicion of having an inappropriate relationship with a student./nModesto police say, on Monday, detectives arrested Enochs High School teacher Patrick Mester. Exactly when the investigation into Mester started is unclear, but police say the alleged victim is an Enochs High student./nModesto City Schools says they revoked his access to the school once they learned of his arrest./n\u201CMr. Mester completed all pre-employment requirements, including fingerprint clearance and background checks. He also received annual training on the prevention of harassment and child abuse reporting,\u201D the district said in a statement on his arrest./nMester has been a music/band teacher at Enochs High since the 2007-2008 school year, officials say, and has been employed by the district since 2003.");
      break;

    case "clear":
      document.getElementById("kokuhakuText").innerHTML = "";
      printMessage("Last Update: Wed Mar 17 23:26:27 // a29rdWhha3U=\u2122");
      document.getElementById("input").value = "";
      break;
    case "refresh":
      printMessage("refreshing..............................");
      setTimeout("window.location.reload()", 1000);
      break;

    case "play 0":
        // document.getElementById("kokuhakuText").innerHTML += "<img id='kokuhakuImg'src='res/sprites/circle.gif'>";
        printMessage(input + "/nloading recorded iteration..........");
        var ready = setTimeout("window.confirm('You are about to enter an outdated conversation with Dillon Hayes. Is that ok?')", 1000);
        if (ready){
          setTimeout("window.open('iteration/0.html')", 1000);
        }else{
          printMessage("cancel/niteration ended");
        }

        break;

    default:
      // console.log(3);
      printMessage(input + "/ncommand not found: " + input);
  }

}
var message = "";
// line handler
function printMessage(msg) {
    message = msg;
    // document.getElementById("input").value = "";

    i = 0;
    // document.getElementById("kokuhakuText").innerHTML = "";
    printLine();
}

// printwriter effect
function printLine() {
  // if (document.getElementById("kokuhakuBox").scrollTop != document.getElementById("kokuhakuBox").scrollHeight){
    document.getElementById("kokuhakuBox").scrollTop = document.getElementById("kokuhakuBox").scrollHeight;
  // }

  if (i < message.length) {
      document.getElementById("next").style.visibility = "hidden";
      // document.getElementById("kokuhakuText").innerHTML += dialogue[lineNum].charAt(i);

      // linebreak check
      if (message.substring(i, i + 2) == "/n"){

        document.getElementById("kokuhakuText").innerHTML += "<br>";
        i+=2;
        printFX.pause();
        printFX.currentTime = 0;
        printFX.play();
      }else{
        document.getElementById("kokuhakuText").innerHTML += message.charAt(i);
        i++;
      }

      if (i == message.length) {
          // document.getElementById("next").style.visibility = "visible";
          // document.getElementById("kokuhakuText").innerHTML += "<br>DH ~ % <span class='blink'>|</span>";
          printFX.pause();
          document.getElementById("next").style.visibility = "visible";
      }
      document.getElementById("kokuhakuBox").scrollTop = document.getElementById("kokuhakuBox").scrollHeight;
      setTimeout(printLine, 20);
  }
}

// terminal header
var startMessage = "/nLast Update: Wed Mar 31 12:00:00//Blue\u2122";
