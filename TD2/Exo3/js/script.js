const url="https://api-adresse.data.gouv.fr/search/?postcode=06250";

window.addEventListener("DOMContentLoaded", (event) => {
    $.getJSON(url, function(result){
        console.log(result);
    });
})