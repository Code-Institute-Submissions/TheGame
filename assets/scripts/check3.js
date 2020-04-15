$(document).ready(function(){     

    var selected = ".selected"

        $(".toRed").on("click", function(){
            var red = ".red";

            $(this).toggleClass("red selected")

            if((red.length == 1)&&(selected.length ==1)){

                console.log("here I am");
            
            }else if ((red.length == 1)&&(selected.length == 2)) {
                
                 setTimeout(function(){
                         $(".selected").removeClass("red blue green yellow white orange grey selected")
                    },800); 
            } else if((red.length == 2)&&(selected.length == 2)){
                 setTimeout(function(){
                         
                     $(".red").addClass("unwiped")
                     $(".red").delay(800).addClass("wiped") 
                    },1000); 
            } else {
                console.log("Think more Stan!");
            }

        });

         $(".toBlue").on("click", function(){

            $(this).toggleClass("blue selected")
         });

})