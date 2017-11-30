define(["jquery", "cookie"], function($){
	$(".header").ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		var user = $.cookie("login_user");
		if (user)
			$(".login_reg").html(`欢迎您：<a href="#">${user}</a>`);
	});
	
	$(".footer").load("/html/include/footer.html");
});
