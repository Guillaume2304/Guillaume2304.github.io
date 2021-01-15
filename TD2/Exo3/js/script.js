const url="https://api-adresse.data.gouv.fr/search/?q=valbonne&type=street&limit=3";

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
 


window.addEventListener("DOMContentLoaded", (event) => {
    $.getJSON(url, function(result){
        data=result.features;
        console.log(data)
    
    
        var map = L.map('mapcontainer').setView([data[0].properties.x, data[0].properties.y], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        data.forEach(element => {
            L.marker([element.properties.x, element.properties.x]).addTo(map)
            .bindPopup('Example of GeoJson data use')
            .openPopup();

        });
    });
    
})




     
    
    
  
  
 