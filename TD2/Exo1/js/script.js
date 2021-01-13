// méthode 1

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  var id, target, options2;
  target = {
    latitude : 0,
    longitude: 0
  };  
 

     
  function success(pos) {
    var crd = pos.coords;
    var timestamp = pos.timestamp
    $("#poscontainer").append(
        $("<p>Votre position actuelle est :<p> "),
      $("<p>Latitude : "+crd.latitude+"<p>"),
      $("<p>Longitude : "+crd.longitude+"<p>"),
      $("<p>Précision : "+crd.accuracy+"mètres.<p>"),
      $("<p>Vitesse : "+crd.speed+"<p>"),
      $("<p>TimeStamp : "+timestamp+"<p>"),
      $("<br><br>")
    );
    var map = L.map('map').setView([crd.latitude, crd.latitude], 13);
    $("#mapcontainer").append(map)
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
  
  
  
  