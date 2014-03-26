var map;
var busList;
var heatMapData= new Array();
var heatMapDataAlight= new Array();

function initialize() {
	//initalize map
	var mapOptions = {
          center: new google.maps.LatLng(41.87632184, -87.77410482),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.SATELLITE
        	};
    var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

	$(function(){
		busList = $('.bus_data').data('buses');
		if(document.getElementById("boardings").checked && document.getElementById("alightings").checked){
			for (var i=0;i<busList.length;i++){
				var location = busList[i].location;
				location = location.replace('(','');
				location = location.replace(')','');
				location = location.split(',');	
				heatMapData[i]  = {location: new google.maps.LatLng(location[0],location[1]), weight:busList[i].boardings+busList[i].alightings};
			}

			var heatmap = new google.maps.visualization.HeatmapLayer({
		  		data: heatMapData
			});

			heatmap.setMap(map);	

 	        var gradient = [
				'rgba(0, 255, 255, 0)',
			    'rgba(0, 255, 255, 1)',
			    'rgba(0, 191, 255, 1)',
			    'rgba(0, 127, 255, 1)',
			    'rgba(0, 63, 255, 1)',
			    'rgba(0, 0, 255, 1)',
			    'rgba(0, 0, 223, 1)',
			    'rgba(0, 0, 191, 1)',
			    'rgba(0, 0, 159, 1)',
			    'rgba(0, 0, 127, 1)',
			    'rgba(63, 0, 91, 1)',
			    'rgba(127, 0, 63, 1)',
			    'rgba(191, 0, 31, 1)',
			    'rgba(255, 0, 0, 1)'
			]
		    heatmap.set('gradient',gradient);
			}
		else if(document.getElementById("boardings").checked){
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
		}
		else if(document.getElementById("alightings").checked){
				for (var i=0;i<busList.length;i++){
				var location = busList[i].location;
				location = location.replace('(','');
				location = location.replace(')','');
				location = location.split(',');	
				heatMapDataAlight[i]  = {location: new google.maps.LatLng(location[0],location[1]), weight:busList[i].alightings};
			}

			var heatmap = new google.maps.visualization.HeatmapLayer({
		  		data: heatMapDataAlight
			});

			heatmap.setMap(map);	
		}
		else{
			alert("please check at least one box");
		}
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

