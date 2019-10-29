$(document).ready(function() {
	
	$("body").css("display", "none");

	$("body").fadeIn(1000);
	$(".occupy").css("height", $(".navigation").height());

	$("a.page").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		// $("iframe").fadeOut(1000, redirectPage);
		$("body").fadeOut(500, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	// function redirectPage() {
    //     $('iframe').attr('src',linkLocation);
    //     $('iframe').fadeIn()
    // }
	
});
