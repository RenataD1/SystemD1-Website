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
