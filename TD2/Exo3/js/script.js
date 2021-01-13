const url="https://api-adresse.data.gouv.fr/search/?q=valbonne&type=street&limit=3";

window.addEventListener("DOMContentLoaded", (event) => {
    $.getJSON(url, function(result){
        data=result.features;
        console.log(data)
    });
})