function defaultContent(){
    console.log("leave");
    $("#image").css({"background":"url('')",'background-color': '#8e68ff'});
    $("#image").text("Hover over an image below.");
}

function newContent(){
    $("#image").css({"background":"url("+$(this).attr("src")+")","background-size":"100% 100%"});
    $("#image").text($(this).attr("alt"));
}

$(".preview").mouseover(newContent);
$(".preview").focus(newContent);
$(".preview").mouseleave(defaultContent);
$(".preview").blur(defaultContent);




