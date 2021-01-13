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
    var map = L.map('mapcontainer').setView([crd.latitude, crd.latitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([crd.latitude, crd.longitude]).addTo(map)
    .bindPopup('You are here')
    .openPopup();

    L.marker([43.7031691, 7.1827772]).addTo(map)
    .bindPopup('Here we are in Nice')
    .openPopup();
    //$("#mapcontainer").append(map)
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
  
  
  
  