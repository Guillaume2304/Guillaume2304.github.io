
    
  

var layer = new L.StamenTileLayer("watercolor");
var map = new L.Map("mapcontainer", {
    center: new L.LatLng(24.6109106, -76.2487416),
    zoom: 6
});

map.addLayer(layer);

var polygon = L.polygon([
    [25.7825453, -80.2994984],
    [24.6109106, -76.2487416],
    [17.9702607, -66.6639921]
]).addTo(map);  
  
  

  