$( document ).ready(function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).toggleClass( "newClass", 1000 );
    });
  } );