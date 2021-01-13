

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
      
function success(pos) {
    var crd = pos.coords; 


    var layer = new L.StamenTileLayer("watercolor");
    var map = new L.Map("mapcontainer", {
        center: new L.LatLng(24.6109106, -76.2487416),
        zoom: 10
    });
    
    map.addLayer(layer);
    
    var polygon = L.polygon([
        [25.7825453, -80.2994984],
        [32.3192214, -64.906485],
        [17.9702607, -66.6639921]
    ]).addTo(map);  
    
    var circle = L.circle([crd.latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: crd.accuracy
    }).addTo(mymap);
  }  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);


  

  