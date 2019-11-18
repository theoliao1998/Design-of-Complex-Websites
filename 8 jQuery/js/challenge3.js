$("#ch3form").submit(function(){
    if (!$('input[name="fruit"]:checked').length){
        alert("You must pick a fruit!");
        return false;
    } else if(!$('input[name="standing"]:checked').length){
        alert("You must pick a standing!");
        return false;
    }
  });


