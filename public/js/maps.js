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
}


ymaps.ready(init);