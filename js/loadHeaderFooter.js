define(["jquery"], function($){
	$(".header").load("/html/include/header.html", function(){
		$(".footer").load("/html/include/footer.html");
	});
});