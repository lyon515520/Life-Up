	var map;
	function initialize() {
	  var mapOptions = {
	    zoom: 15,
	    center: new google.maps.LatLng(50.633106, 3.020173)
	  };
	  map = new google.maps.Map(document.getElementById('google-maps'),
	      mapOptions);
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);