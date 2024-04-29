

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

// add filter before markers?
const years = [
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
    2024
];

function filterBy(year) {
    const filters = ['==', 'Year', year];
    map.setFilter('popup', filters);
    map.setFilter('marker', filters);

    // Set the label to the month
    document.getElementById('Year').textContent = years[year];
}

// loop over the evictionData array to make a marker for each record
evictionData.forEach(function (evictionRecord) {

    // create a popup to attach to the marker
     const popup = new mapboxgl.Popup({
        offset: 24,
        anchor: 'bottom'
    }).setText(
        `${evictionRecord.BIN}`
    );

    // create a marker, set the coordinates, add the popup, add it to the map
    const marker = new mapboxgl.Marker({
        scale: 0.65,
    })
        .setLngLat([evictionRecord.Longitude, evictionRecord.Latitude])
        .setPopup(popup)
        .addTo(map);
})

// Set filter to first year in dataset
    // 0 = 2017
    filterBy(0);

    document.getElementById('slider').addEventListener('input', (e) => {
        const year = parseInt(e.target.value, 10);
        filterBy(year);
        })
