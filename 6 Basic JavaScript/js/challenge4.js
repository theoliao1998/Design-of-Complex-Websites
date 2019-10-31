ch4form.onsubmit = function () {
    a = document.querySelector("#fullname");
    b = document.querySelector("#streetaddr");
    if(a.value != "" && b.value!=""){
        return true;
    } else{
        if(a.value == ""){
            document.querySelector("#nameerrormsg").style.display = "block";
        } else{
            document.querySelector("#nameerrormsg").style.display = "";
        }
        if(b.value == ""){
            document.querySelector("#addrerrormsg").style.display = "block";
        } else{
            document.querySelector("#addrerrormsg").style.display = "";
        }
        return false;
    }
}





