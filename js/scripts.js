mapboxgl.accessToken = 'pk.eyJ1IjoibW9uaWNhLW1pbGxheSIsImEiOiJjbHV1ZWszeWEwOHlhMnBtcjYyZjd6dmZwIn0.RYKZY8Ym236tnkj4hxTbpg';

var mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // plain/light basemap
    center: [-73.91903, 40.69678], // starting position [lng, lat]
    zoom: 14, // starting zoom
}

// instantiate the map
const map = new mapboxgl.Map(mapOptions);

// add a navitation control
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

map.on('load', () => {
    let filterYear = ['==', ['number', ['get', 'Year']]];

    map.addLayer({
        id: 'evictions',
        type: 'circle',
        source: {
            type: 'geojson',
            data: './evictions.geojson' // replace this with the url of your own geojson
        },
        // paint: {
        //     'circle-radius': [
        //         'interpolate',
        //         ['linear'],
        //         ['number', ['get', 'Casualty']],
        //         0,
        //         4,
        //         5,
        //         24
        //     ],
        //     'circle-color': [
        //         'interpolate',
        //         ['linear'],
        //         ['number', ['get', 'Casualty']],
        //         0,
        //         '#2DC4B2',
        //         1,
        //         '#3BB3C3',
        //         2,
        //         '#669EC4',
        //         3,
        //         '#8B88B6',
        //         4,
        //         '#A2719B',
        //         5,
        //         '#AA5E79'
        //     ],
        //     'circle-opacity': 0.8
        // },
        'filter': ['all', filterYear]
    });
});

// update year filter when the slider is dragged
document.getElementById('slider').addEventListener('input', (event) => {
    const year = parseInt(event.target.value);

    // update the map
    // "filter": ['==', ['type',['get', 'key']],'value']
    map.setFilter('evictions', ['==', ['number', ['get', 'Year']], year]);;

    // update text when user moves slider
    document.getElementById('Year').innerText = year;
});


