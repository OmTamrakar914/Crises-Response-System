// Initialize Google Maps
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 8,
  });
}

// Geocode Address
function geocodeAddress(geocoder, map) {
  const address = document.getElementById("addressInput").value;
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

// Submit Form Event Listener
document.getElementById("locationForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const geocoder = new google.maps.Geocoder();
  geocodeAddress(geocoder, map);
});
