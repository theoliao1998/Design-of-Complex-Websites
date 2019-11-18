function setHomeAddress(){
    let checked = $("#useBilling").is(':checked');
    $("#home").prop({"value": checked ? $("#billing").val() : "", "disabled": checked});
}


