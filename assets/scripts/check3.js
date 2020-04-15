$(document).ready(function(){     

    var selected = ".selected".length;
    var clr  = ".red .blue .yellow .white".length;

    
        $(".toRed").on("click", function(){
            
            $.when(

             $(this).toggleClass("red selected")

            ).then( function check(){

         if ((clr != 2)&&(selected == 2)) {
                
                 setTimeout(function(){
                         $(".selected").removeClass("red blue green yellow white orange grey selected")
                    },800); 
            } else if((clr == 2)&&(selected == 2)){
                 setTimeout(function(){
                         
                     $(".red").addClass("unwiped")
                     $(".red").delay(800).addClass("wiped") 
                    },1000); 
            } else {
                console.log("Think more Stan!");
            };
        })

        });

         $(".toBlue").on("click", function(){

            $(this).toggleClass("blue selected")
         });

})