function enableDarkmode() {
  //Frontend per Knopfdruck in Darkmode und Whitemode umfärben
  let darkmodeSwitch = document.getElementById("switchDarkmode");
  let darkmodestatus = document.getElementById("messageDarkmodestatus");
  let header = document.getElementsByTagName("header");
  let layoutPokemonfilter = document.querySelector(".pokemonfilter-layout");
  let filteroptions = document.querySelectorAll(".filteroptions");
  let filterPokemonButton = document.querySelector(".filterPokemon");
  let pokemonPreviewbox = document.querySelectorAll(".box-pokemon-preview");
  let popupWindow = document.querySelector(".popup-pokemondetails");
  let closePopupButton = document.querySelector(".closePopup");
  let statusFilter = document.getElementById("statusmessageFilter");

  if (darkmodeSwitch.checked === true) {
    //Entsprechende Naricht im Frontend ausgeben, wenn Darkmode aktiviert ist
    darkmodestatus.innerHTML = "Darkmode aktiviert";
    darkmodestatus.style.color = "#0075be";
    //HTML-Elemente dem Darkmode entsprechend umfärben
    //body
    document.body.style.backgroundColor = "#282c35";
    //header
    header[0].style.backgroundColor = "#818589";
    //Filter-Container und Inhalt
    layoutPokemonfilter.style.color = "white";
    layoutPokemonfilter.style.borderColor = "white";
    //Filteroptionen
    for (let i = 0; i < filteroptions.length; i++) {
      filteroptions[i].style.backgroundColor = "#282c35";
      filteroptions[i].style.color = "white";
    }
    //Filter-anwenden-Button
    filterPokemonButton.style.backgroundColor = "#0075be";
    filterPokemonButton.style.color = "white";
    //Filter-anwenden-Nachricht
    statusFilter.style.backgroundColor = "#0075be";
    //pokemon-container und Inhalt
    for (let i = 0; i < pokemonPreviewbox.length; i++) {
      if (pokemonPreviewbox[i].classList.contains("filtered") === true) {
        pokemonPreviewbox[i].style.color = "white";
        pokemonPreviewbox[i].style.backgroundColor = "#818589";
      } else {
        pokemonPreviewbox[i].style.color = "white";
        pokemonPreviewbox[i].style.backgroundColor = "#5c5470";
      }
    }
    //popupFenster und Inhalt
    popupWindow.style.color = "white";
    popupWindow.style.backgroundColor = "#5c5470";
    closePopupButton.style.color = "white";
  } else {
    //Entsprechende Naricht im Frontend ausgeben, wenn Whitemode aktiviert ist
    darkmodestatus.innerHTML = "Darkmode deaktiviert";
    darkmodestatus.style.color = "#a3a3a3";
    //HTML-Elemente dem Whitemode entsprechend umfärben
    //body
    document.body.style.backgroundColor = "white";
    //header
    header[0].style.backgroundColor = "#ffde00";
    //Filter-Container und Inhalt
    layoutPokemonfilter.style.color = "black";
    layoutPokemonfilter.style.borderColor = "black";
    //Filteroptionen
    for (let i = 0; i < filteroptions.length; i++) {
      filteroptions[i].style.backgroundColor = "white";
      filteroptions[i].style.color = "black";
    }
    //Filter-anwenden-Button
    filterPokemonButton.style.backgroundColor = "#ffde00";
    filterPokemonButton.style.color = "black";
    //Filter-anwenden-Nachricht
    statusFilter.style.backgroundColor = "#ffde00";
    //pokemon-container und Inhalt
    for (let i = 0; i < pokemonPreviewbox.length; i++) {
      if (pokemonPreviewbox[i].classList.contains("filtered") === true) {
        pokemonPreviewbox[i].style.color = "black";
        pokemonPreviewbox[i].style.backgroundColor = "#ffde00";
      } else {
        pokemonPreviewbox[i].style.color = "black";
        pokemonPreviewbox[i].style.backgroundColor = "#0075be";
      }
    }
    //popupFenster und Inhalt
    popupWindow.style.color = "black";
    popupWindow.style.backgroundColor = "#ffde00";
    closePopupButton.style.color = "black";
  }
}

enableDarkmode();
