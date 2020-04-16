$(document).ready(function(){     

    // var selected = $(".selected").length;
    // var clr  = $(".red .blue .yellow .white").length;

    
    //     $(".toRed").on("click", function(){
            
    //         $.when(

    //          $(this).toggleClass("red selected")

    //         ).then( function check(){

    //      if ((clr != 2)&&(selected == 2)) {
                
    //              setTimeout(function(){
    //                      $(".selected").removeClass("red blue green yellow white orange grey selected")
    //                 },800); 
    //         } else if((clr == 2)&&(selected == 2)){
    //              setTimeout(function(){
                         
    //                  $(".red").addClass("unwiped")
    //                  $(".red").delay(800).addClass("wiped") 
    //                 },1000); 
    //         } else {
    //             console.log("Think more Stan!");
    //         };
    //     })

    //     });

    //       $(".toBlue").on("click", function(){

    //          $(this).toggleClass("blue selected")
    //       })

     
        $(".toRed").on("click", function(){
             $(this).toggleClass("red selected").text(" ")

              if (($("#toRed1").hasClass("red")) && ($("#toRed2").hasClass("red"))){

                $(".red").addClass("unwiped")
                $(".red").delay(800).addClass("wiped") 
            };  
             return toCheck();
        });
        
        
          $(".toBlue").on("click", function(){

            $(this).toggleClass("blue selected").text(" ")

              if (($("#toBlue1").hasClass("blue")) && ($("#toBlue2").hasClass("blue"))){

                $(".blue").addClass("unwiped")
                $(".blue").delay(800).addClass("wiped") 
            };    
             return toCheck();
        });

         $(".toGreen").on("click", function(){
            
           $(this).toggleClass("green selected").text(" ")

            if (($("#toGreen1").hasClass("green")) && ($("#toGreen2").hasClass("green"))){

               $(".green").addClass("unwiped")
               $(".green").delay(800).addClass("wiped") 
            };
            
             return toCheck();
        });


         $(".toOrange").on("click", function(){
             $(this).toggleClass("orange selected").text(" ")

              if (($("#toOrange1").hasClass("orange")) && ($("#toOrange2").hasClass("orange"))){

                $(".orange").addClass("unwiped")
                $(".orange").delay(800).addClass("wiped") 
            };     
             return toCheck();   
        });

         $(".toZonk").on("click", function(){
            $(this).toggleClass("zonk selected").text("nothing's here")
            $(this).delay(2000).addClass("unwiped")    
            $(this).delay(1000).addClass("wiped")
             return toCheck();
        });

    

         $(".toWhite").on("click", function(){
            $(this).toggleClass("white selected").text(" ")

               if (($("#toWhite1").hasClass("white")) && ($("#toWhite2").hasClass("white"))){

                $(".white").addClass("unwiped")
                $(".white").delay(800).addClass("wiped") 
            };     
               return toCheck();

        });

         $(".toYellow").on("click", function(){
            $(this).toggleClass("yellow selected").text(" ")
            
               if (($("#toYellow1").hasClass("yellow")) && ($("#toYellow2").hasClass("yellow"))){

                $(".yellow").addClass("unwiped")
                $(".yellow").delay(800).addClass("wiped") 
            };  
             return toCheck();
        });


         $(".toGrey").on("click", function(){
            $(this).toggleClass("grey selected").text(" ")
          
               if (($("#toGrey1").hasClass("grey")) && ($("#toGrey2").hasClass("grey"))){

                $(".grey").addClass("unwiped")
                $(".grey").delay(800).addClass("wiped") 
            } ;
             
             return toCheck();

        });

         $(".toDark").on("click", function(){
            $(this).toggleClass("dark selected").text(" ")
            
               if (($("#toDark1").hasClass("dark")) && ($("#toDark2").hasClass("dark"))){

                $(".dark").addClass("unwiped")
                 $(".dark").delay(800).addClass("wiped") 
            };  
             return toCheck();
        });


         $(".toBlack").on("click", function(){
            $(this).toggleClass("black selected").text(" ")
          
               if (($("#toBlack1").hasClass("black")) && ($("#toBlack2").hasClass("black"))){

                $(".black").addClass("unwiped")
                $(".black").delay(800).addClass("wiped") 
            } ;
             
             return toCheck();

        });

         $(".toPink").on("click", function(){
            $(this).toggleClass("pink selected").text(" ")
            
               if (($("#toPink1").hasClass("pink")) && ($("#toPink2").hasClass("pink"))){

                $(".pink").addClass("unwiped")
                $(".pink").delay(800).addClass("wiped") 
            };  
             return toCheck();
        });


         $(".toLight").on("click", function(){
            $(this).toggleClass("light selected").text(" ")
          
               if (($("#toLight1").hasClass("light")) && ($("#toLight2").hasClass("light"))){

                $(".light").addClass("unwiped")
                $(".light").delay(800).addClass("wiped") 
            } ;
             
             return toCheck();

        });

           $(".toSmth").on("click", function(){
            $(this).toggleClass("smth selected").text(" ")
          
               if (($("#toSmth1").hasClass("smth")) && ($("#toSmth2").hasClass("smth"))){

                $(".smth").addClass("unwiped")
                $(".smth").delay(800).addClass("wiped") 
            } ;
             
             return toCheck();

        });


         function toCheck(selected, wiped){

                var selected = $(".selected").length;
                var color = $(".red .blue .green .yellow .white .orange .grey .dark .light .smth .black .pink ").length;
           
                 if((selected == 2)&&(color  != 2)) {
                    setTimeout(function(){
                         $(".selected").removeClass("red blue green yellow white orange grey dark light smth black pink selected")
                    },400); 
                   
                };

                 var wiped = $(".wiped").length

               if(wiped == 24){
                    setTimeout(function(){
                        $("#welcome").addClass("disabled")
                        $("#theGame").addClass("disabled")
                        $("#Complete").removeClass("disabled");
                    },700); 
                    
                } ;
            }
           

        
 }) 



     
