
   $(document).ready(function(){       
      
  
     
        $(".toRed").on("click", function(){
             $(this).toggleClass("red selected")

              if (($("#toRed1").hasClass("red")) && ($("#toRed2").hasClass("red"))){

                $(".red").addClass("unwiped")
                $(".red").delay(800).addClass("wiped") 
            };  
             return toCheck(selected, wiped);
        });
        
        
          $(".toBlue").on("click", function(){

            $(this).toggleClass("blue selected")

              if (($("#toBlue1").hasClass("blue")) && ($("#toBlue2").hasClass("blue"))){

                $(".blue").addClass("unwiped")
                $(".blue").delay(800).addClass("wiped") 
            };    
             return toCheck(this);
        });

         $(".toGreen").on("click", function(){
            
           $(this).toggleClass("green selected").delay(1000)

            if (($("#toGreen1").hasClass("green")) && ($("#toGreen2").hasClass("green"))){

               $(".green").addClass("unwiped")
               $(".green").delay(800).addClass("wiped") 
            };
            
             return toCheck;
        });


         $(".toOrange").on("click", function(){
             $(this).toggleClass("orange selected")

              if (($("#toOrange1").hasClass("orange")) && ($("#toOrange2").hasClass("orange"))){

                $(".orange").addClass("unwiped")
                $(".orange").delay(800).addClass("wiped") 
            };     
             return toCheck;   
        });

         $(".toZonk").on("click", function(){
            $(this).toggleClass("zonk selected").text("nothing's here")
            $(this).delay(2000).addClass("unwiped")    
            $(this).delay(1000).addClass("wiped")
             return toCheck;
        });

    

         $(".toWhite").on("click", function(){
            $(this).toggleClass("white selected")

               if (($("#toWhite1").hasClass("white")) && ($("#toWhite2").hasClass("white"))){

                $(".white").addClass("unwiped")
                $(".white").delay(800).addClass("wiped") 
            };     
               return toCheck;

        });

         $(".toYellow").on("click", function(){
            $(this).toggleClass("yellow selected")
            
               if (($("#toYellow1").hasClass("yellow")) && ($("#toYellow2").hasClass("yellow"))){

                $(".yellow").addClass("unwiped")
                $(".yellow").delay(800).addClass("wiped") 
            };  
             return toCheck;
        });


         $(".toGrey").on("click", function(){
            $(this).toggleClass("grey selected")
          
               if (($("#toGrey1").hasClass("grey")) && ($("#toGrey2").hasClass("grey"))){

                $(".grey").addClass("unwiped")
                $(".grey").delay(800).addClass("wiped") 
            } ;
                // else if(((".selected").length==2)&&((".grey").length<=2)){
                //     $(".selected").addClass("unwiped")
                //     $(".selected").delay(800).removeClass("selected grey")
                // }
            // else if (($("#toGrey1").hasClass("grey")) || ($("#toGrey2").hasClass("grey"))&&($(".selected").length==2)){

            //     $(this).delay(800).toggleClass("grey selected")
            // } 
            // else {
            //     $(this).toggleClass("grey selected")
            // }
             return toCheck(this);

        });

        
       

        
 }) 

