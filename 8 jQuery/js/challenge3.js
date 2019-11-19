$("#ch3form").submit(function(e){
    let msg = ''
    if (!$('input[name="fruit"]:checked').length){
        e.preventDefault();
        msg += "You must pick a fruit!\n";
    }
    if(!$('input[name="standing"]:checked').length){
        e.preventDefault();
        msg += "You must pick a standing!";
    }
    if(msg){
        alert(msg);
    }
  });


