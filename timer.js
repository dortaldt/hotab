
(function(){
  console.log('timer.js is running')
  var counter = [
    "https://imgur.com/WCNc4fp.png",
    "https://imgur.com/GEZlhXh.png",
    "https://imgur.com/RXWdbmK.png",
    "https://imgur.com/waINLYJ.png",
    "https://imgur.com/fJFZPTC.png",
    "https://imgur.com/rBE7We0.png",
    "https://imgur.com/HOaqtjk.png",
    // imgLInk
  ];
  var imgLInk = document.querySelector('link[rel="shortcut icon"]');
  var imgLInkIcon = document.querySelector('link[rel="icon"]');

  var start = function(){

    var buffer = 300001;
    var inter = buffer/counter.length;

    //Looping the intervals
    for(j=0; j < counter.length; j++){
      buffer -= inter;
      (function(j){
        setTimeout(function(){
          if(imgLInk){
            imgLInk.href = counter[j];
            console.log(j +' and counting...');
          }
          else {
            imgLInkIcon.href = counter[j];
            console.log(j +' and counting...');
          }
        }, buffer);
        console.log('buffer is' + buffer);
      })(j);
    };
  };


  start()
})();
