
   $(document).ready(function(){       
      
  
     
        $(".toRed").on("click", function(){
             $(this).toggleClass("red selected")

              if (($("#toRed1").hasClass("red")) && ($("#toRed2").hasClass("red"))){

                $(".red").addClass("unwiped")
                $(".red").delay(800).addClass("wiped")
                 setTimeout(function(){
                         $(this).addClass("disabled")
                    },1000);
            };  
             return toCheck();
        });
        
        
          $(".toBlue").on("click", function(){

            $(this).toggleClass("blue selected")

              if (($("#toBlue1").hasClass("blue")) && ($("#toBlue2").hasClass("blue"))){

                $(".blue").addClass("unwiped")
                $(".blue").delay(800).addClass("wiped")
                setTimeout(function(){
                         $(this).addClass("disabled")
                    },1000);
            };    
             return toCheck();
        });

         $(".toGreen").on("click", function(){
            
           $(this).toggleClass("green selected")

            if (($("#toGreen1").hasClass("green")) && ($("#toGreen2").hasClass("green"))){

               $(".green").addClass("unwiped")
               $(".green").delay(800).addClass("wiped")
               setTimeout(function(){
                         $(this).addClass("disabled")
                    },1000);
            };
            
             return toCheck();
        });


         $(".toOrange").on("click", function(){
             $(this).toggleClass("orange selected")

              if (($("#toOrange1").hasClass("orange")) && ($("#toOrange2").hasClass("orange"))){

                $(".orange").addClass("unwiped")
                $(".orange").delay(800).addClass("wiped")
                setTimeout(function(){
                         $(this).addClass("disabled")
                    },1000);
            };     
             return toCheck();   
        });

         $(".toZonk").on("click", function(){
            $(this).toggleClass("zonk").text("nothing's here")            
            $(this).delay(4000).addClass("unwiped").delay(1000)    
            $(this).delay(1000).addClass("wiped")
             setTimeout(function(){
                         $(this).addClass("disabled")
                    },1000); 
           
             return toCheck();
        });

    

         function toCheck(selected, wiped){

                var selected = $(".selected").length;
                var color = $(".red .blue .green .yellow .white .orange .grey ").length;
           
                 if((selected == 2)&&(color  != 2)) {
                    setTimeout(function(){
                         $(".selected").removeClass("red blue green yellow white orange grey selected")
                    },400); 
                   
                };

                 var wiped = $(".wiped").length

                if(wiped == 9){
                    setTimeout(function(){

                        $("#welcome").addClass("disabled")
                        $("#theGame").addClass("disabled")
                        $("#Complete").removeClass("disabled");
                    },700); 
                    
                } ;
            }
          

        
 }) 

