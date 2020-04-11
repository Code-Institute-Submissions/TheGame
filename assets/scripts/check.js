   
 $(document).ready(function(){

    console.log("here am I, did you call me?")

    let pair = $(".selected");               
    let className = [ ".red", "blue", ".green", "orange"];         
               
               
                if (pair[0].className  === pair[1].className) {
                pair.fadeOut();         
                } 


                 // if($(".selected").length === 2) {
                //     (this).removeClass("red").removeClass("blue");
                // }else 
            



})