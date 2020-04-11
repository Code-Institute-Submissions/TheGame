
   $(document).ready(function(){

        // $("#top_two").on("click", function(){
        //     $("#top_two").remove("button").toggleClass("red");     
        // })

        $(".toRed").on("click", function(){
            $(this).toggleClass("red");     
        })
         if("#top_two"+ ".red"==true && "#top_one"+ ".red"==true){
             $(this).slideUp();
         }
        
          $(".toBlue").on("click", function(){
            $(this).toggleClass("blue");     
        })

         $(".toGreen").on("click", function(){
            $(this).toggleClass("green");     
        })

         $(".toZonk").on("click", function(){
            $(this).toggleClass("zonk").innerHTML("nothing");     
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