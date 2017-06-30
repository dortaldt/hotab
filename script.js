

//contains all the images for the loop
var images = [
    "https://imgur.com/WCNc4fp.png",
    "https://imgur.com/GEZlhXh.png",
    "https://imgur.com/RXWdbmK.png",
    "https://imgur.com/waINLYJ.png",
    "https://imgur.com/fJFZPTC.png",
    "https://imgur.com/rBE7We0.png",
    "https://imgur.com/HOaqtjk.png"
]

var totalTime = 5000;
var interval = totalTime/images.length;

//this changes the link of the icon on the page
var changeImages = function(imageUrl){
    var link = document.querySelector('link[rel~="icon"]');
    link.href = imageUrl;
    console.log('url is now ' + imageUrl)
};

var timer = function(){
    for(i=0; i<images.length; ++i){
        var timeout = setTimeout(
            changeImages(images[i]),5000
        )
    };
};

timer();