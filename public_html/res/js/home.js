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
}

// Collapsible Text
var coll = document.getElementsByClassName("collapsible");
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
