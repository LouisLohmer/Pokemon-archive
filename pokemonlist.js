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
        //Auf angegebene Gewichtsfilter prüfen
        if (
          (filterWeightUnderTenKilogram.checked === true &&
            json.weight / 10 < 10) ||
          (filterWeightOverHundredKilogram.checked === true &&
            json.weight / 10 > 100) ||
          (filterWeightTenTillHundredKilogram.checked === true &&
            json.weight / 10 >= 10 &&
            json.weight / 10 <= 100)
        ) {
          if (darkmodeSwitch.checked === true) {
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
          } else if (darkmodeSwitch.checked === false) {
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
          filterTypeGrass.checked === true ||
          filterTypePoison.checked === true ||
          filterTypeFire.checked === true ||
          filterTypeWater.checked === true ||
          filterTypeBug.checked === true ||
          filterTypeFlying.checked === true ||
          filterTypeGround.checked === true ||
          filterTypeFighting.checked === true ||
          filterTypeRock.checked === true ||
          filterTypeGhost.checked === true ||
          filterTypeElectric.checked === true ||
          filterTypePsychic.checked === true ||
          filterTypeNormal.checked === true ||
          filterTypeDragon.checked === true ||
          filterTypeFairy.checked === true ||
          filterTypeIce.checked === true
        ) {
          for (let i = 0; i < json.types.length; i++) {
            if (
              (json.types[i].type.name === "grass" &&
                filterTypeGrass.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "poison" &&
                filterTypePoison.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "fire" &&
                filterTypeFire.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "water" &&
                filterTypeWater.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "bug" &&
                filterTypeBug.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "flying" &&
                filterTypeFlying.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "ground" &&
                filterTypeGround.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "fighting" &&
                filterTypeFighting.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "rock" &&
                filterTypeRock.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "ghost" &&
                filterTypeGhost.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "electric" &&
                filterTypeElectric.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "psychic" &&
                filterTypePsychic.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "normal" &&
                filterTypeNormal.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "dragon" &&
                filterTypeDragon.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "fairy" &&
                filterTypeFairy.checked &&
                darkmodeSwitch.checked === true) ||
              (json.types[i].type.name === "ice" &&
                filterTypeIce.checked &&
                darkmodeSwitch.checked === true)
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
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "poison" &&
                filterTypePoison.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "fire" &&
                filterTypeFire.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "water" &&
                filterTypeWater.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "bug" &&
                filterTypeBug.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "flying" &&
                filterTypeFlying.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "ground" &&
                filterTypeGround.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "fighting" &&
                filterTypeFighting.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "rock" &&
                filterTypeRock.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "ghost" &&
                filterTypeGhost.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "electric" &&
                filterTypeElectric.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "psychic" &&
                filterTypePsychic.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "normal" &&
                filterTypeNormal.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "dragon" &&
                filterTypeDragon.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "fairy" &&
                filterTypeFairy.checked &&
                darkmodeSwitch.checked === false) ||
              (json.types[i].type.name === "ice" &&
                filterTypeIce.checked &&
                darkmodeSwitch.checked === false)
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
        } else {
          //Wenn das Pokemon nicht vom Filter betroffen ist, wird es wieder farblich und anhand der hinzugefügten Klassen zurückgesetzt
          if (darkmodeSwitch.checked === true) {
            for (let a = 0; a < pokemonPreviewboxes.length; a++) {
              if (
                pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name
              ) {
                pokemonPreviewboxes[a].classList.remove("filtered");
                pokemonPreviewboxes[a].style.background = "#5c5470";
              }
            }
          } else if (darkmodeSwitch.checked === false) {
            for (let a = 0; a < pokemonPreviewboxes.length; a++) {
              if (
                pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name
              ) {
                pokemonPreviewboxes[a].classList.remove("filtered");
                pokemonPreviewboxes[a].style.background = "#0075be";
              }
            }
          }
        }
      })
      .catch();
  }
}

fetchAndDisplayPokemondata();
