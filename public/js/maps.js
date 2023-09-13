function init () {

	start = '55.75251512240936,37.601874470348655'; // start coordinates
	zoom = 17;                      // start zoom
	id = 'map';

	start = start.split(',');       // split coordinates to array

	lat = start[0];
	long = start[1];
	coords = [lat, long];
	Map = new ymaps.Map(id, {    // initialize map
		center: coords,
		zoom: zoom,
		controls: ['zoomControl']
	});

    mark = new ymaps.Placemark([lat, long],{}, {preset: "islands#redIcon", draggable: true});
    Map.geoObjects.add(mark);

    mark.events.add("dragend", function () {
		coords = this.geometry.getCoordinates();
		save();
	}, mark);
	
	/* Event click */
	Map.events.add('click', function (e) {
		coords = e.get('coords');
		save();
	});
	
	
	/* Event search */
	search.events.add("resultselect", function () {
		coords = search.getResultsArray()[0].geometry.getCoordinates();
		save();
	});

	function save (){
		var new_coords = [coords[0].toFixed(6), coords[1].toFixed(6)];
		mark.getOverlaySync().getData().geometry.setCoordinates(new_coords);
		
        const data = document.getElementById("coordinates").value = new_coords;
        console.log(data)
    //             try {
    //               const response = await fetch('/login',{
    //                 method: 'POST',
    //                 headers: {
    //                   'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(data),
    //               });
    //             } catch (error) {
    //                 alert('Попробуйте еще раз', error);
    //               }
	// }
}
}

ymaps.ready(init);