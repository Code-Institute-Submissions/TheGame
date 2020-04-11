
   $(document).ready(function(){

       
      
     
        $(".toRed").on("click", function(){
            $(this).toggleClass("red selected");     
        })
        
        
          $(".toBlue").on("click", function(){
            $(this).toggleClass("blue selected");     
        })

         $(".toGreen").on("click", function(){
            $(this).toggleClass("green selected");      
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