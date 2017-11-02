$(document).ready(function(){

  // array of images
  var images = ["image1.svg", "image1.svg", "image1.svg"];
  // index of image in images array
  var currentImage = 0;

  function goNext(){
    currentImage += 1;

    //loop back to the first image
    if(currentImage >= images.length) {
        currentImage = 0;
    }

    $("#hair").css("background-image" : "url(" + images[currentImage] +")");

  }



});

/* var images = ["cat.svg", "cat2.svg", "cat.svg"];
var currentImage = 0; //defaults to image1.jpg

function goNext() {
    currentImage += 1;

    //loop back to the first image
    if(currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("mainImage").src = images[currentImage];
}

var images = ["http://www.maniacworld.com/squirrel-vs-penguin.jpg", "http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blacksquirrelrev.jpg/250px-Blacksquirrelrev.jpg", "http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Sciurus_niger_%28on_fence%29.jpg/200px-Sciurus_niger_%28on_fence%29.jpg"];
     var clicks = 0;
     
     $(document).ready(start);
     
     function start(){
         $("#image").click(changeImage);
     }
     
     function changeImage(){
         clicks++;
         img = images[clicks % images.length];
         // $("#image").attr("src", img);
     }

         //Declare an image array same as calling new Array();
    var img = []
    img[0] = "http://2.bp.blogspot.com/-DNISePZjJ4g/U9bSB5NjEzI/AAAAAAAARCw/K7OGOPjQd0Q/s1600/2.png";
    img[1] = "http://4.bp.blogspot.com/-MoL1MHN12Eo/U9bSB6EIS-I/AAAAAAAARCs/gUSKbzsg05g/s1600/3.png";

    //Select all elements on the page with the name attribute equal to VCRImage
    var images = document.querySelectorAll('[name=VCRImage]');

    //For each image bind the click event
    for(var i=0; i < images.length; i++)
    {
      var image = images[i];
      //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
      image.addEventListener('click', imageClicked(), false);
    }

    function imageClicked()
    {
      //Use a closure to wrap the counter variable
      //so each image element has their own unique counter
      var counter = 0;
      return function(event)
      {
        //Increment counter
        counter++;
        //The context of "this" is the image element
        //Use a modulus
        this.src = img[counter % img.length];
      }
    } */