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
    
        $("body").append($("<p>Les données récupérées sont affichées dans la console.</p>"));
        var map = L.map('mapcontainer').setView([data[0].geometry.coordinates[1], data[0].geometry.coordinates[0]], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        data.forEach(element => {
            L.marker([element.geometry.coordinates[1], element.geometry.coordinates[0]]).addTo(map)
            .bindPopup('Example of GeoJson data use')
            .openPopup();

        });
    });
    
})




     
    
    
  
  
 