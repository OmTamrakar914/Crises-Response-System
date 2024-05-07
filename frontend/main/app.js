let map;
let a=28.2599;
let b= 77.4126;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  // const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // let mapOptions = {
  //   center : {lat: a , lng: b  },
  //   zoom : 12
  // }
  
  // map = new google.maps.Map(document.getElementById("map"),mapOptions)
 
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.259933, lng:77.412613 },
    zoom: 12,
  });
  

  
}

initMap();

function redirectToLogin() {
  // Redirect to the login page
  // console.log("YUES!")
   window.location.href = "loginForm.html";
}

function redirectToReport(){
  window.location.href = "report.html";
}

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
