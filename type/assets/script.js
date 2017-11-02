$(document).ready(function(){

		$(".a").hover(function(){

			$(this).find("rect-1").toggleClass("rect-1-hover");
			$(this).find("rect-2").toggleClass("rect-2-hover");
			$(this).find("rect-3").toggleClass("");
			$(this).find("rect-4").toggleClass("");
			$(this).find("rect-5").toggleClass("");


	});
});