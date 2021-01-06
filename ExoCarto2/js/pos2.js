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

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

  
  $("#methode1").append("<h3>Méthode 1<h3>");

function success(pos) {
  var crd = pos.coords;
  var timestamp = pos.timestamp
  $("#methode1").append(
  	$("<p>Votre position actuelle est :<p> "),
    $("<p>Latitude : "+crd.latitude+"<p>"),
    $("<p>Longitude : "+crd.longitude+"<p>"),
    $("<p>Précision : "+crd.accuracy+"mètres.<p>"),
	$("<p>Vitesse : "+crd.speed+"<p>"),
	$("<p>TimeStamp : "+timestamp+"<p>"),
	$("<br><br>")
  );
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);


//méthode 2

$("#methode2").append("<h3>Méthode 2<h3>");
function success2(pos) {
  var crd2 = pos.coords;
  var timestamp2 = pos.timestamp


    $("#methode2").append(
    	$("<p>Votre position actuelle est :<p> "),
    	$("<p>Latitude : "+crd2.latitude+"<p>"),
    	$("<p>Longitude : "+crd2.longitude+"<p>"),
    	$("<p>Précision : "+crd2.accuracy+"mètres.<p>"),
		$("<p>Vitesse : "+crd2.speed+"<p>"),
		$("<p>TimeStamp : "+timestamp2+"<p>"),
	);
    navigator.geolocation.clearWatch(id);
  
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}


id = navigator.geolocation.watchPosition(success2, error, options);

