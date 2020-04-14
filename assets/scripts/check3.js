  $(document).ready(function(){ 

    var color = {
        red : ".red",
        blue : ".blue",
        green: ".green",
        grey : ".grey",
        orange : ".orange",
        yellow : ".yellow",
        zonk : ".zonk",
        
    };
     
    var selected = ".selected";

    function toCheck(){
    if ((selected.length == 2) && (this.color.length <2)){
        $(".selected").delay(1200).removeClass(`selected $(this.color)`)
    } else {
        $(this).toggleClass(`selected $(this.color)`)
    };
    }
  })