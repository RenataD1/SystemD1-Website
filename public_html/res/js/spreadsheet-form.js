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


// post the time of submission
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var hours = today.getHours();
var ampm = hours >= 12 ? 'pm' : 'am';
document.getElementById("time").value = dateTime;
document.getElementById("title").innerHTML = time + ampm;
var x = setInterval(function(){
    date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    displayTime = today.getHours()/2 + ":" + today.getMinutes();
    dateTime = time+' '+date;
    hours = today.getHours();
    ampm = hours >= 12 ? 'pm' : 'am';
    document.getElementById("time").value = dateTime;
    document.getElementById("title").innerHTML = time + ampm;
},1000);

// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
// // var hours = today.getHours();
// // var ampm = hours >= 12 ? 'pm' : 'am';
// // document.getElementById("time").value = dateTime;
// // document.getElementById("title").innerHTML = time;
// var x = setInterval(updateTime,1000);
//
// function updateTime(){
//     date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//     time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     displayTime = today.getHours()/2 + ":" + today.getMinutes();
//     dateTime = time+' '+date;
//     hours = today.getHours();
//     ampm = hours >= 12 ? 'pm' : 'am';
//     document.getElementById("time").value = dateTime;
//     document.getElementById("title").innerHTML = time;
// }
