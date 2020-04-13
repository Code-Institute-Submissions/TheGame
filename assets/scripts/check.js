   
   $(document).ready(function(){   

    function toCheck(selected, wiped){

                var selected = $(".selected").length;
                var red = $(".red").length;
           
                if((selected == 2)&&(red !== 2)) {
                 
                    $(".selected").removeClass("red")
                };

                 var wiped = $(".wiped").length

               if(wiped == 9){
                    
                    // $("#theGame").addClass(disabled)
                    $("#Complete").removeClass(disabled);
                    console.log("Why it does not work?")
                } ;

               
            };

                
console.log("here am I, did you call me?");
               
           })     

        
