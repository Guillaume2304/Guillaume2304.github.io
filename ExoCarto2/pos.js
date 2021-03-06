
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
window.addEventListener("DOMContentLoaded", (event) => {  
  function success(pos) {
    var crd = pos.coords;
    $("#balisePos").append(
        $("<p>Votre position actuelle est :<p> "),
        $("<p>Latitude : "+crd.latitude+"<p>"),
        $("<p>Longitude : "+crd.longitude+"<p>"),
        $("<p>La précision est de "+crd.accuracy+"mètres.<p>")
    );
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
})