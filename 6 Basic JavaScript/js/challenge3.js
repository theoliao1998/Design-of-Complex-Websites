ch3form.onsubmit = function () {
    if (document.querySelector('input[name="fruit"]:checked') == null){
        alert("You must pick a fruit!");
        return false;
    }
    return true;
}





