

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

// loop over the evictionData array to make a marker for each record
evictionData.forEach(function (evictionRecord) {

    // // create a popup to attach to the marker
    //  var popup = new mapboxgl.Popup({
    //     offset: 24,
    //     anchor: 'bottom'
    // }).setText(
    //     `${evictionRecord."text for popup"}`
    // );

    // create a marker, set the coordinates, add the popup, add it to the map
    var marker = new mapboxgl.Marker({
        scale: 0.65,
    })
        .setLngLat([evictionRecord.Longitude, evictionRecord.Latitude])
        // .setPopup(popup)
        .addTo(map);
})

// I need help here please
//I think layer = my JSON (evictionData), right?
map.on('load', () => {
    map.addLayer(
            //here I'm trying to add the slider from my HTML doc
            document.getElementById('slider').addEventListener('input', (event) => {
                const year = parseInt(event.target.value);

            //here I'm trying to filer the data from my JSON (evictionData) by year (called "Year" in dataset)
            map.setFilter('evictionData', ['==', ['number', ['get', 'Year']], year]);
        
            // update text when user moves slider
            document.getElementById('Year').innerText = year;
        })
    );
});
        