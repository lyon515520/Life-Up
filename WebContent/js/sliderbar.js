  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 18,
      max: 100,
      values: [ 18, 100 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " ans" + " - " + ui.values[ 1 ] + " ans" );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " ans" +
      " - " + $( "#slider-range" ).slider( "values", 1 ) + " ans" );
  });