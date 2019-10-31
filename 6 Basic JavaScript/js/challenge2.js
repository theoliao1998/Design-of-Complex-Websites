useBilling.onchange = function() {
    let home = document.getElementById("home");
    let billing = document.getElementById("billing");
    if (this.checked){
        home.value = billing.value;
        home.disabled = true;
    } else {
        home.value = "";
        home.disabled = false;
    }
}

