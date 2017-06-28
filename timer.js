

var imgLInk = document.querySelector('link[rel~="icon"]');
var originLink;

//creates a new var for the link if there is no one before
if(typeof originLink == "undefined"){
  originLink = document.querySelector('link[rel~="icon"]');
}
console.log('timer.js is running')

//Imges list for the favicon
var counter = [
  originLink.href,
  "https://imgur.com/WCNc4fp.png",
  "https://imgur.com/GEZlhXh.png",
  "https://imgur.com/RXWdbmK.png",
  "https://imgur.com/waINLYJ.png",
  "https://imgur.com/fJFZPTC.png",
  "https://imgur.com/rBE7We0.png",
  "https://imgur.com/HOaqtjk.png"
];

var buffer = 16000;
var inter = buffer/counter.length;
var timeouts = [];

function changeLink(j){
  var timeFunction = setTimeout(function(){
    imgLInk.href = counter[j];
    timeouts.push(timeFunction);
    if (j == 0) {
      isRunning = true;
      console.log('isRunning is now ' + isRunning)
    }
  }, buffer);
};

//create timeout functions
var activeTimer = function(){
  for(j=0; j < counter.length; ++j){
    changeLink(j)
    buffer -= inter;
    console.log('buffer is' + buffer);
  }
};

//checks if the timer is running and if not- activiting the loop
if(typeof isRunning == "undefined"){
  activeTimer();
}

else {
  for(l = 0; l < timeouts.length ; ++l ){
    clearTimeout(l);
    console.log(timeouts)
  }
  changeLoop();
  console.log('restarting')

}


//creating new images
// function onImageLoaded() {
//   var canvas = document.createElement("canvas");
//   canvas.width = 16;
//   canvas.height = 16;
//   var context = canvas.getContext("2d");
//   context.drawImage(img, 0, 0);
// };
//
// var img = document.createElement("img");
// img.addEventListener("load", onImageLoaded);
// img.src = originLink;
