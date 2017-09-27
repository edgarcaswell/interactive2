

$(function(){
    var image = new Image();
    image.src ='http://rack.3.mshcdn.com/media/ZgkyMDEyLzEwLzE5LzExXzMzXzMzXzE3Nl9maWxlCnAJdGh1bWIJMTIwMHg5NjAwPg/462b8072';
    $('#img').click(function(){
       $(this).attr('src',image.src);
    });
});
