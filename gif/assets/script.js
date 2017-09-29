

$(document).ready(function() { 
  $("#button").click(function() {
    var src = $('#myimage').attr('src');

    //if the current image is picture1.png, change it to picture2.png
    if(src == 'http://www.libpng.org/pub/png/PngSuite/f01n2c08.png') {
        $("#myimage").attr("src","http://www.libpng.org/pub/png/PngSuite/f02n2c08.png");

    //if the current image is picture2.png, change it to picture3.png 
    } else if(src == "http://www.libpng.org/pub/png/PngSuite/f02n2c08.png") {
        $("#myimage").attr("src","http://www.libpng.org/pub/png/PngSuite/f03n2c08.png"); 
    //if the current image is anything else, change it back to picture1.png
    } else {
        $("#myimage").attr("src","http://www.libpng.org/pub/png/PngSuite/f01n2c08.png");
    }
    console.log("Src is: " + $("#myimage").attr("src"));
  })
});

