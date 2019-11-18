$("#ch4form").submit(function(){
    let name_filled = $("#fullname").val()!="";
    let addr_filled = $("#streetaddr").val()!="";
    $("#nameerrormsg").toggle(!name_filled);
    $("#addrerrormsg").toggle(!addr_filled);
    return name_filled && addr_filled;
  });


