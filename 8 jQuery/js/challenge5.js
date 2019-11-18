$(".preview").mouseover(function(){
    $("#image").css({"background":"url("+$(this).attr("src")+")","background-size":"100% 100%"});
    $("#image").text($(this).attr("alt"));
})


