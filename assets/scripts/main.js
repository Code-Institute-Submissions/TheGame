
   $(document).ready(function(){

        // $("#top_two").on("click", function(){
        //     $("#top_two").remove("button").toggleClass("red");     
        // })
     
        $(".toRed").on("click", function(){
            $(this).toggleClass("red").toggleClass("selected");     
        })
        
        
          $(".toBlue").on("click", function(){
            $(this).toggleClass("blue").toggleClass("selected");     
        })

         $(".toGreen").on("click", function(){
            $(this).toggleClass("green").toggleClass("selected");      
        })

         $(".toZonk").on("click", function(){
            $(this).toggleClass("zonk").innerHTML("<p>nothing's here</p>");     
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