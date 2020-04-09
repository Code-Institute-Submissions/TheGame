$( document ).ready(function() {
    
    $("button").click(function(event) {
        
        function handler( event ) {
        
            var target = $( event.target );
            if ( target.is( "top_one" ) ) {
                $("top_one").toggle(addClass("red"), removeClass("red"));

        }
    };
   
    })

}())