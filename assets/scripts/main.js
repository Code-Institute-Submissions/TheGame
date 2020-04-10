
   $(document).ready(function(){

        $("#top_two").on("click", function(){
            $("#top_two").remove("button").addClass("red");
     
        })
        
  

 }) 

   function Game(click){
        
        if (".red" == false){
            addClass("red");
        }else if (".red" == false){
            removeClass("red");
        } else {
            console.log("Try harder Stan!")
        }
    }