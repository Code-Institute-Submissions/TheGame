
   $(document).ready(function(){       
      
     
        $(".toRed").on("click", function(){
             $(this).toggleClass("red selected")

              if (($("#toRed1").hasClass("red")) && ($("#toRed2").hasClass("red"))){

                $(".red").addClass("unwiped")
                $(".red").delay(800).addClass("wiped") 
            };  
        })
        
        
          $(".toBlue").on("click", function(){

            $(this).toggleClass("blue selected")

              if (($("#toBlue1").hasClass("blue")) && ($("#toBlue2").hasClass("blue"))){

                $(".blue").addClass("unwiped")
                $(".blue").delay(800).addClass("wiped") 
            };    
        })

         $(".toGreen").on("click", function(){
            
           $(this).toggleClass("green selected").delay(1000)

            if (($("#toGreen1").hasClass("green")) && ($("#toGreen2").hasClass("green"))){

               $(".green").addClass("unwiped")
               $(".green").delay(800).addClass("wiped") 
            };
            
        })


         $(".toOrange").on("click", function(){
             $(this).toggleClass("orange selected")

              if (($("#toOrange1").hasClass("orange")) && ($("#toOrange2").hasClass("orange"))){

                $(".orange").addClass("unwiped")
                $(".orange").delay(800).addClass("wiped") 
            };        
        })

         $(".toZonk").on("click", function(){
            $(this).toggleClass("zonk").text("nothing's here");     
        })

         $(".toWhite").on("click", function(){
            $(this).toggleClass("white selected");      
        })

         $(".toYellow").on("click", function(){
            $(this).toggleClass("yellow selected");      
        })

         $(".toGrey").on("click", function(){
            $(this).toggleClass("grey selected");      
        })
       

        
 }) 

