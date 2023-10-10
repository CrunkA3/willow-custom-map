const initialLocation = [3.438879, 50.868141];
let willowMarker;

function initMap() {

    mapboxgl.accessToken = config.mapbox.accessToken;
    map = new mapboxgl.Map({
        container: config.mapbox.containerId,
        style: config.mapbox.style,
        center: initialLocation,
        zoom: 18
    });

    willowMarker = new mapboxgl.Marker()
        .setLngLat(initialLocation)
        .addTo(map);

    map.on('load', onMapLoad);
}


function onMapLoad() {
    setWillowPosition();
    loadImage();

    //load zones
    fetch(config.willow.host + '/settings/zones')
        .then(response => response.json())
        .then(featureCollection => {
            featureCollection.features.forEach(addZoneToMap);
        });
}


function setWillowPosition() {
    fetch(config.willow.host + '/api/statuslog/sensors/gps')
        .then(response => response.json())
        .then(gps => {
            console.log(gps);
            willowMarker.setLngLat([gps.longitude, gps.latitude]);
            map.setCenter([gps.longitude, gps.latitude]);
        });
}


function addZoneToMap(zone) {
    map.addSource(zone.id, {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': zone.geometry
        }
    });

    map.addLayer({
        'id': zone.id + '_outline',
        'type': 'line',
        'source': zone.id,
        'layout': {},
        'paint': {
            'line-color': zone.properties.color,
            'line-width': 3
        }
    });
}

function loadImage() {
    let grundstueckId = 'grundstueck';

    map.addSource(grundstueckId, {
        type: 'image',
        url: config.image.url,
        coordinates: config.image.coordinates
    });

    map.addLayer({
        'id': grundstueckId,
        'type': 'raster',
        'source': grundstueckId
    });
}


initMap();