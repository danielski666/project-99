<template>
<div>
<navbar />
    <!-- Geolocation Section-->
        <section class="page-section portfolio" id="Geolocation">
            <div class="container">
                <!-- Geolocation Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Lokalizacja sklepu: </h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-globe-americas"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Geolocation Grid Items-->
                
				<div id="map"></div>		
            </div>
        </section>
</div>
</template>
<script>
import navbar from '@/components/Navbar.vue';


export default {
    name: 'GeoLoc',
    components: {
        navbar
    },
     methods: {
        getPosition(position){
var map_init = L.map('map', {
center: [50.06988997898041, 19.955011147403724],
zoom: 8
});
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map_init);
L.Control.geocoder().addTo(map_init);
if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!")
} else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition)
    }, 5000);
}
    lat = position.coords.latitude
    long = position.coords.longitude
    accuracy = position.coords.accuracy

    if (marker) {
        map_init.removeLayer(marker)
    }

    if (circle) {
        map_init.removeLayer(circle)
    }

    marker = L.marker([lat, long])
    circle = L.circle([lat, long], { radius: accuracy })

    var featureGroup = L.featureGroup([marker, circle]).addTo(map_init)

    map_init.fitBounds(featureGroup.getBounds())

    console.log("Your coordinate is: Lat: " + lat + " Long: " + long + " Accuracy: " + accuracy)

    }}};
</script>