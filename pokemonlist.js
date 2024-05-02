function fetchAndDisplayPokemondata() {
  //Pokemon und Pokemondaten fetchen und darstellen
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1023")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (json) {
      indexRow = 0;
      for (let i = 0; i < json.results.length; i++) {
        //Pro Schleifendurchlauf einen Container für das Pokemon erstellen
        let pokemonPreviewbox = document.createElement("div");
        pokemonPreviewbox.classList.add("box-pokemon-preview");
        pokemonPreviewbox.value = i + 1;

        //Pro Schleifendurchgang ein Bild, sowie Pokemonname und Pokeindex für das Pokemon erstellen
        let pokeindex = document.createElement("span");
        pokeindex.classList.add("pokemonattribute");
        pokeindex.innerHTML = json.results[i].name;

        let pokemonImage = document.createElement("img");
        pokemonImage.classList.add("pokemonimage");
        pokemonImage.src =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          (i + 1) +
          ".png";
        pokemonImage.addEventListener("click", displayPokemondetails);

        let pokemonname = document.createElement("span");
        pokemonname.classList.add("pokemonattribute");
        pokemonname.innerHTML = "#" + (i + 1);

        //Daten im Frontend darstellen, indem die Elemente zum Container appended werden und dieser vom Body appended wird
        pokemonPreviewbox.appendChild(pokemonImage);
        pokemonPreviewbox.appendChild(pokeindex);
        pokemonPreviewbox.appendChild(pokemonname);

        //Pokemon-Container geordnet in dreier-Reihen darstellen und die Variable indexRow entsprechend pro Schleifendurchlauf umstellen
        let pokemonlistRow = document.querySelectorAll(".column");
        if (i > 0) {
          if (indexRow !== 2) {
            indexRow += 1;
          } else if (indexRow === 2) {
            indexRow = 0;
          }
        }
        pokemonlistRow[indexRow].appendChild(pokemonPreviewbox);
      }
    })
    .catch();
}

function filterPokemon() {
  //Pokemon filtern nach angewählten Optionen
  let pokemonPreviewboxes = document.querySelectorAll(".box-pokemon-preview");
  let darkmodeSwitch = document.getElementById("switchDarkmode");
  //Pokemontyp-Radiobuttons für die Filter
  let filterTypeGrass = document.getElementById("typeGrass");
  let filterTypePoison = document.getElementById("typePoison");
  let filterTypeFire = document.getElementById("typeFire");
  let filterTypeWater = document.getElementById("typeWater");
  let filterTypeFlying = document.getElementById("typeFlying");
  let filterTypeBug = document.getElementById("typeBug");
  let filterTypeGround = document.getElementById("typeGround");
  let filterTypeFighting = document.getElementById("typeFighting");
  let filterTypeRock = document.getElementById("typeRock");
  let filterTypeGhost = document.getElementById("typeGhost");
  let filterTypeElectric = document.getElementById("typeElectric");
  let filterTypePsychic = document.getElementById("typePsychic");
  let filterTypeNormal = document.getElementById("typeNormal");
  let filterTypeDragon = document.getElementById("typeDragon");
  let filterTypeFairy = document.getElementById("typeFairy");
  let filterTypeIce = document.getElementById("typeIce");
  //Pokemongewicht-Radiobuttons für die Filter
  let filterWeightUnderTenKilogram = document.getElementById("weightBelowTen");
  let filterWeightTenTillHundredKilogram =
    document.getElementById("weightUnderHundred");
  let filterWeightOverHundredKilogram =
    document.getElementById("weightOverHundred");

  //Nachricht an den Nutzer ausgeben, das kein Filter ausgewählt wurde
  let filteroptions = document.querySelectorAll('input[name="filteroption"]');
  let selectedFilteroptions = 0;
  for (let i = 0; i < filteroptions.length; i++) {
    if (filteroptions[i].checked) {
      selectedFilteroptions += 1;
    }
  }
  if (selectedFilteroptions === 0) {
    //Wenn kein Filter ausgewählt ist, wird der Nutzer darüber informiert und die Funktion bricht ab
    document.getElementById("statusmessageFilter").style.visibility = "visible";
    document.getElementById("statusmessageFilter").style.width = "180px";
    document.getElementById("statusmessageFilter").innerHTML =
      "Wähle einen Filter aus!";
    return;
  } else {
    //Wenn einer der Filter ausgewählt ist, wird der Nutzer darüber informiert und der Filter wird angewendet
    document.getElementById("statusmessageFilter").style.visibility = "visible";
    document.getElementById("statusmessageFilter").style.width = "220px";
    document.getElementById("statusmessageFilter").innerHTML =
      "Filter erfolgreich angewendet";
  }

  //Gesamtanzahl aller dargestellten Pokemon iterativ durchgehen
  for (let i = 0; i < pokemonPreviewboxes.length; i++) {
    let urlFetchAPI = "https://pokeapi.co/api/v2/pokemon/" + (i + 1);
    //Daten vom aktuellen Pokemon fetchen
    fetch(urlFetchAPI)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (json) {
        //Vor dem Filtern alle vorherig gefilterten Pokemon farblich zurücksetzen
        if (darkmodeSwitch.checked) {
          for (let a = 0; a < pokemonPreviewboxes.length; a++) {
            if (pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name) {
              //Klasse filtered vom Element entfernen, wenn diese existiert, damit nur die korrekten Pokemon anders gefärbt werden
              if (pokemonPreviewboxes[a].classList.contains("filtered")) {
                pokemonPreviewboxes[a].classList.remove("filtered");
              }
              pokemonPreviewboxes[a].style.background = "#5c5470";
            }
          }
        } else if (!darkmodeSwitch.checked) {
          for (let a = 0; a < pokemonPreviewboxes.length; a++) {
            if (pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name) {
              //Klasse filtered vom Element entfernen, wenn diese existiert, damit nur die korrekten Pokemon anders gefärbt werden
              if (pokemonPreviewboxes[a].classList.contains("filtered")) {
                pokemonPreviewboxes[a].classList.remove("filtered");
              }
              pokemonPreviewboxes[a].style.background = "#0075be";
            }
          }
        }

        //Auf angegebene Gewichtsfilter prüfen
        if (
          (filterWeightUnderTenKilogram.checked && json.weight / 10 < 10) ||
          (filterWeightOverHundredKilogram.checked && json.weight / 10 > 100) ||
          (filterWeightTenTillHundredKilogram.checked &&
            json.weight / 10 >= 10 &&
            json.weight / 10 <= 100)
        ) {
          if (darkmodeSwitch.checked) {
            //Wenn das Pokemon vom Filter betroffen ist, wird dies farblich entprechend von darkmode herausgehoben
            for (let a = 0; a < pokemonPreviewboxes.length; a++) {
              if (
                pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name
              ) {
                //Klasse filtered zum Element hinzufügen, damit die gefilterten Pokemon farblich anders gefärbt werden können
                pokemonPreviewboxes[a].classList.add("filtered");
                pokemonPreviewboxes[a].style.background = "#818589";
              }
            }
          } else if (!darkmodeSwitch.checked) {
            //Wenn das Pokemon vom Filter betroffen ist, wird dies farblich entprechend von whitemode herausgehoben
            for (let a = 0; a < pokemonPreviewboxes.length; a++) {
              if (
                pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name
              ) {
                //Klasse filtered zum Element hinzufügen, damit die gefilterten Pokemon farblich anders gefärbt werden können
                pokemonPreviewboxes[a].classList.add("filtered");
                pokemonPreviewboxes[a].style.background = "#ffde00";
              }
            }
          }
          //Auf angegebene Typfilter prüfen
        } else if (
          filterTypeGrass.checked ||
          filterTypePoison.checked ||
          filterTypeFire.checked ||
          filterTypeWater.checked ||
          filterTypeBug.checked ||
          filterTypeFlying.checked ||
          filterTypeGround.checked ||
          filterTypeFighting.checked ||
          filterTypeRock.checked ||
          filterTypeGhost.checked ||
          filterTypeElectric.checked ||
          filterTypePsychic.checked ||
          filterTypeNormal.checked ||
          filterTypeDragon.checked ||
          filterTypeFairy.checked ||
          filterTypeIce.checked
        ) {
          for (let i = 0; i < json.types.length; i++) {
            if (
              (json.types[i].type.name === "grass" &&
                filterTypeGrass.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "poison" &&
                filterTypePoison.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "fire" &&
                filterTypeFire.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "water" &&
                filterTypeWater.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "bug" &&
                filterTypeBug.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "flying" &&
                filterTypeFlying.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "ground" &&
                filterTypeGround.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "fighting" &&
                filterTypeFighting.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "rock" &&
                filterTypeRock.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "ghost" &&
                filterTypeGhost.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "electric" &&
                filterTypeElectric.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "psychic" &&
                filterTypePsychic.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "normal" &&
                filterTypeNormal.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "dragon" &&
                filterTypeDragon.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "fairy" &&
                filterTypeFairy.checked &&
                darkmodeSwitch.checked) ||
              (json.types[i].type.name === "ice" &&
                filterTypeIce.checked &&
                darkmodeSwitch.checked)
            ) {
              //Wenn das Pokemon vom Filter betroffen ist, wird dies farblich entprechend von darkmode herausgehoben
              for (let a = 0; a < pokemonPreviewboxes.length; a++) {
                if (
                  pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name
                ) {
                  //Klasse filtered zum Element hinzufügen, damit die gefilterten Pokemon farblich anders gefärbt werden können
                  pokemonPreviewboxes[a].classList.add("filtered");
                  pokemonPreviewboxes[a].style.background = "#818589";
                }
              }
            } else if (
              (json.types[i].type.name === "grass" &&
                filterTypeGrass.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "poison" &&
                filterTypePoison.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "fire" &&
                filterTypeFire.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "water" &&
                filterTypeWater.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "bug" &&
                filterTypeBug.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "flying" &&
                filterTypeFlying.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "ground" &&
                filterTypeGround.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "fighting" &&
                filterTypeFighting.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "rock" &&
                filterTypeRock.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "ghost" &&
                filterTypeGhost.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "electric" &&
                filterTypeElectric.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "psychic" &&
                filterTypePsychic.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "normal" &&
                filterTypeNormal.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "dragon" &&
                filterTypeDragon.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "fairy" &&
                filterTypeFairy.checked &&
                !darkmodeSwitch.checked) ||
              (json.types[i].type.name === "ice" &&
                filterTypeIce.checked &&
                !darkmodeSwitch.checked)
            ) {
              //Wenn das Pokemon vom Filter betroffen ist, wird dies farblich entprechend von whitemode herausgehoben
              for (let a = 0; a < pokemonPreviewboxes.length; a++) {
                if (
                  pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name
                ) {
                  //Klasse filtered zum Element hinzufügen, damit die gefilterten Pokemon farblich anders gefärbt werden können
                  pokemonPreviewboxes[a].classList.add("filtered");
                  pokemonPreviewboxes[a].style.background = "#ffde00";
                }
              }
            }
          }
        }
      })
      .catch();
  }
}

fetchAndDisplayPokemondata();
