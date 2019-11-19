$("#ch4form").submit(function(e){
    let name_filled = $("#fullname").val()!="";
    let addr_filled = $("#streetaddr").val()!="";
    if(!(name_filled && addr_filled)){
        e.preventDefault();
    }
    $("#nameerrormsg").toggle(!name_filled);
    $("#addrerrormsg").toggle(!addr_filled);
  });


