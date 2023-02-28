mapboxgl.accessToken = 'pk.eyJ1IjoiZmF0aW1hY2FsZGVyb24iLCJhIjoiY2t2MmpjaDhuMGgyaDJ3bm53b2dtMmh0bCJ9.anBlXoK6KS8BfBOjHqTZ1w';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/satellite-streets-v11',
center: [-89.48227, 13.89825],
zoom: 14,
projection: 'globe' // display the map as a 3D globe
});
 
// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([-89.48225,13.89923])
.addTo(map);
 
map.addControl(new mapboxgl.FullscreenControl());

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}),'top-left');

map.addControl(new mapboxgl.NavigationControl());

