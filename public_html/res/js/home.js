// Remove Banner
window.onload = () => {
   let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
   bannerNode.parentNode.removeChild(bannerNode);
}

// Tab System
function goToTab(num){
  window.scrollTo(0,0);
  document.getElementById("CONTENT-OPENED").removeAttribute("id");
  document.getElementsByClassName("CONTENT-CLOSED")[num].id="CONTENT-OPENED";
  // document.getElementsByClassName("CONTENT-CLOSED")[num].scrollIntoView();
}

// Collapsible Text
var coll = document.getElementsByClassName("collapseBtn");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      // collapsible.style.boxShadow = "3px 3px 0px #FFFFFF";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        // setTimeout(function(){window.scrollBy(0,content.scrollHeight);},200);
    }
  });
}

// countdown
var today = new Date();
var deadline = new Date('Wed Aug 18 2021 12:00:00');
var distance = (deadline.getTime() - today.getTime());

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
var milliseconds = Math.floor((distance % 1000));

// document.getElementById("time").value = dateTime;
var countdown = days + ":" + hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
document.getElementById("countdown").innerHTML = countdown;
var x = setInterval(function(){
    today = new Date();
    deadline = new Date('Wed Aug 18 2021 12:00:00');
    distance = (deadline.getTime() - today.getTime());

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    milliseconds = Math.floor((distance % 1000));

    // document.getElementById("time").value = dateTime;
    countdown = days + ":" + hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
    document.getElementById("countdown").innerHTML = countdown;
}
,10);
