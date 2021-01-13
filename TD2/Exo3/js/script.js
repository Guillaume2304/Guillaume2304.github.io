const url="https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port&postcode=44380";

window.addEventListener("DOMContentLoaded", (event) => {
    $.getJSON(url, function(result){
        console.log(result);
    });
})