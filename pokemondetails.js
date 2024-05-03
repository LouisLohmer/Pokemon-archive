function displayPokemondetails(event) {
  /**
   * Diese Funktion wird über einen Eventlistener über einen Klick auf das Pokemonbild ausgeführt.
   * Sie dient dem anzeigen der jeweiligen Pokemondetails bei Klick auf das Pokemonbild.
   */
  //Popup-Fenster bei Klick öffnen
  let popUpWindow = document.querySelector(".popup-pokemondetails");
  popUpWindow.style.visibility = "visible";

  //Value des geclickten Containers auslesen, damit exakt diese Details gefetched werden können
  let pokemonId = event.target.parentNode.value;
  //Pokemondetails in Popup-Fenster darstellen
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (json) {
      //Name darstellen
      let name = document.getElementById("name");
      name.innerHTML = json.name;
      //Abilites darstellen
      let attributeAbility = document.getElementById("ability");
      attributeAbility.innerHTML =
        "Fähigkeiten:  &#8205; &#8205; &#8205;" +
        json.abilities
          .map(function (ability) {
            //Array mit .map() erstellen und alle Fähigkeitenname returnen
            return ability.ability.name;
          })
          //Array-Elemente mit .slice() aus dem Array entfernen
          .slice(0, 3)
          //Mit .join() an den String anhängen
          .join();
      //Moves darstellen
      let attributeMoves = document.getElementById("moves");
      attributeMoves.innerHTML =
        "Attacken: &#8205; &#8205; &#8205;" +
        json.moves
          .map(function (move) {
            return move.move.name;
          })
          .slice(0, 3)
          .join();
      //Types darstellen
      let attributeTypes = document.getElementById("types");
      attributeTypes.innerHTML =
        "Typ: &#8205; &#8205; &#8205;" +
        json.types
          .map(function (types) {
            return types.type.name;
          })
          .slice(0, 3)
          .join();
      //helditems darstellen
      let attributeHelditems = document.getElementById("heldItems");
      if (json.held_items.length === 0) {
        attributeHelditems.innerHTML = "Items: &#8205; &#8205; &#8205;/";
      } else if (json.held_items.length !== 0) {
        attributeHelditems.innerHTML =
          "Items: &#8205; &#8205; &#8205;" +
          json.held_items
            .map(function (held_items) {
              return held_items.item.name;
            })
            .slice(0, 3)
            .join("     ");
      }
      //weigth darstellen
      let attributeWeigth = document.getElementById("weight");
      attributeWeigth.innerHTML = "Gewicht:       " + json.weight / 10 + " Kg";
    })
    .catch();
}

function hidePokemondetails() {
  //Popupfenster mit Button in der oberen, linken Ecke schließen
  let popUpWindow = document.querySelector(".popup-pokemondetails");
  popUpWindow.style.visibility = "hidden";
}
