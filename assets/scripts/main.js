
   $(document).ready(function(){       
      
     
        $(".toRed").on("click", function(){
            $(this).toggleClass("red selected");     
        })
        
        
          $(".toBlue").on("click", function(){
            $(this).toggleClass("blue selected");     
        })

         $(".toGreen .toGreen2").on("click", function(){
            // $(this).toggleClass("green selected");  
           $(this).toggleClass("green");

            if($(".toGreen").hasClass("green")&& (".toGreen2").hasClass("green")){

                $(".green").fadeOut;
            } 
        })

         $(".toOrange").on("click", function(){
            $(this).toggleClass("orange selected");      
        })

         $(".toZonk").on("click", function(){
            $(this).toggleClass("zonk").text("nothing's here");     
        })
    
       

        
 }) 

//    function Game(click){
        
//         if (".red" == false){
//             addClass("red");
//         }else if (".red" == false){
//             removeClass("red");
//         } else {
//             console.log("Try harder Stan!")
//         }
//     }