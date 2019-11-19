for (let i=0; i<document.getElementsByClassName("preview").length; i++){
    document.getElementsByClassName("preview")[i].onmouseover = function () {
        document.querySelector("#image").style.backgroundImage = "url("+this["src"]+")";
        document.querySelector("#image").innerHTML=this["alt"];
    }
}

// still need to enable focus,blur, and mouseleave functions
// check the jQuery one





