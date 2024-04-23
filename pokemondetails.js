//Dieses Script dient dazu, Pokemondetails auf den Klick auf einen Pokemoncontainer darzustellen

function displayPokemondetails(event) {
    //Diese Funktion wird über einen Eventlistener über eine Klick auf die Pokemon-Container ausgeführt
    //Popup-Fenster bei Klick öffnen
    let popUpWindow = document.querySelector('.popup-pokemondetails');
    popUpWindow.style.visibility = 'visible';

    let pokemonId = event.target.parentNode.value;
    //Pokemondetails in Popup-Fenster darstellen
    fetch('https://pokeapi.co/api/v2/ability/' + pokemonId)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (json) {
            let attributeAbility = document.getElementById('ability');
            try {
                attributeAbility.innerHTML = 'Fähigkeit: ' + json.name;
            } catch {
                attributeAbility.innerHTML = 'Fähigkeit: Nicht verfügbar!';
            }
        })
        .catch();
}

function hidePokemondetails() {
    //Popupfenster mit Button schließen
    let popUpWindow = document.querySelector('.popup-pokemondetails');
    popUpWindow.style.visibility = 'hidden';
}
