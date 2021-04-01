// Amazing code taken from https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6
function SubForm (url){
   var urlParameter = url;
    $.ajax({
        url:urlParameter,
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("Sorry, there was an error. \n Please try again later.")
        }
    });
}
// normal clock
// var today = new Date();
//
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
//
// var hours = today.getHours();
// var ampm = hours >= 12 ? 'pm' : 'am';
//
// document.getElementById("time").value = dateTime;
// document.getElementById("title").innerHTML = time + ampm;
//
// var x = setInterval(function(){
//     today = new Date();
//
//     date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//     time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     // displayTime = today.getHours()/2 + ":" + today.getMinutes();
//     dateTime = time+' '+date;
//     hours = today.getHours();
//     ampm = hours >= 12 ? 'pm' : 'am';
//     document.getElementById("time").value = dateTime;
//     document.getElementById("title").innerHTML = time + ampm;
// }
// ,1000);


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
document.getElementById("title").innerHTML = countdown;
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
    document.getElementById("title").innerHTML = countdown;
}
,1000);
