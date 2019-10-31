subscribe.onchange = function() {
    // if (this.checked){
    //   console.log("here");
    //   document.getElementById("emailField").style.display = "block";
    // } else {
    //   console.log("Not selected!");
    //   document.getElementById("emailField").style.display = "none";
    // }
    
    document.getElementById("emailField").style.display = this.checked ? "block":"none";
}

