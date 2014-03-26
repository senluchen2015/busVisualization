    	var map;
    	var busList;
		var heatMapData= new Array();
		var pointArray;

    	function initialize() {
			var mapOptions = {
		          center: new google.maps.LatLng(41.87632184, -87.77410482),
		          zoom: 12,
	              mapTypeId: google.maps.MapTypeId.SATELLITE
		        	};
		    var map = new google.maps.Map(document.getElementById("map-canvas"),
		            mapOptions);
		

		var locationWeightArray = new Array();
		$(function(){
			busList = $('.bus_data').data('buses');

			for (var i=0;i<busList.length;i++){
				var location = busList[i].location;
				location = location.replace('(','');
				location = location.replace(')','');
				location = location.split(',');	
				heatMapData[i]  = {location: new google.maps.LatLng(location[0],location[1]), weight:busList[i].boardings};
			}

			var heatmap = new google.maps.visualization.HeatmapLayer({
		  		data: heatMapData
			});
			
			heatmap.setMap(map);	
		});	
	}
		// google.maps.event.addDomListener(window, 'load', initialize);




function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=visualization&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

