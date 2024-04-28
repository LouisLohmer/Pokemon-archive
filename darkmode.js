//Diese Script dient dem Zweck, das Pokemon-Archive auf Knopfdruck in den Darkmode zu wechseln
function enableDarkmode() {
    //Entsprechende Naricht im Frontend ausgeben, wenn Darkmode enabled oder abled ist
    let checkbox = document.getElementById('switchDarkmode');
    let spanDarkmodestatus = document.getElementById('messageDarkmodestatus');
    if (checkbox.checked === true) {
        spanDarkmodestatus.innerHTML = 'Darkmode aktiviert';
        spanDarkmodestatus.style.color = '#0075be';

        //HTML-Elemente dem Darkmode entsprechend umfärben
        //body
        document.body.style.backgroundColor = '#282c35';
        //header
        let header = document.getElementsByTagName('header');
        header[0].style.backgroundColor = '#818589';
        //Filter-Container und Inhalt
        let containerContent = document.querySelector('.pokemonfilter-layout');
        containerContent.style.color = 'white';
        containerContent.style.borderColor = 'white';
        //Filteroptionen
        let options = document.querySelectorAll('.filteroptions');
        for (let i = 0; i < options.length; i++) {
            options[i].style.backgroundColor = '#282c35';
            options[i].style.color = 'white';
        }
        //Filter-anwenden-Button
        let button = document.querySelector(".filterPokemon");
        button.style.backgroundColor = '#818589';
        button.style.color = "white";
        //pokemon-container und Inhalt
        let containerPokemon = document.querySelectorAll('.box-pokemon-preview');
        for (let i = 0; i < containerPokemon.length; i++) {
            if (containerPokemon[i].classList.contains('filtered') === true) {
                containerPokemon[i].style.color = 'white';
                containerPokemon[i].style.backgroundColor = '#818589';
            } else {
                containerPokemon[i].style.color = 'white';
                containerPokemon[i].style.backgroundColor = '#5c5470';
            }
        }
        //popupFenster und Inhalt
        let popupWindow = document.querySelector('.popup-pokemondetails');
        popupWindow.style.color = 'white';
        popupWindow.style.backgroundColor = '#5c5470';
        let closePopupButton = document.querySelector('.closePopup');
        closePopupButton.style.color = 'white';
    } else {
        spanDarkmodestatus.innerHTML = 'Darkmode deaktiviert';
        spanDarkmodestatus.style.color = '#a3a3a3';

        //HTML-Elemente dem Whitemode entsprechend umfärben
        //body
        document.body.style.backgroundColor = 'white';
        //header
        let header = document.getElementsByTagName('header');
        header[0].style.backgroundColor = '#ffde00';
        //Filter-Container und Inhalt
        let containerContent = document.querySelector('.pokemonfilter-layout');
        containerContent.style.color = 'black';
        containerContent.style.borderColor = 'black';
        //Filteroptionen
        let options = document.querySelectorAll('.filteroptions');
        for (let i = 0; i < options.length; i++) {
            options[i].style.backgroundColor = 'white';
            options[i].style.color = 'black';
        }
        //Filter-anwenden-Button
        let button = document.querySelector(".filterPokemon");
        button.style.backgroundColor = '#ffde00';
        button.style.color = "black";
        //pokemon-container und Inhalt
        let containerPokemon = document.querySelectorAll('.box-pokemon-preview');
        for (let i = 0; i < containerPokemon.length; i++) {
            if (containerPokemon[i].classList.contains('filtered') === true) {
                containerPokemon[i].style.color = 'black';
                containerPokemon[i].style.backgroundColor = '#ffde00';
            } else {
                containerPokemon[i].style.color = 'black';
                containerPokemon[i].style.backgroundColor = '#0075be';
            }
        }
        //popupFenster und Inhalt
        let popupWindow = document.querySelector('.popup-pokemondetails');
        popupWindow.style.color = 'black';
        popupWindow.style.backgroundColor = '#ffde00';
        let closePopupButton = document.querySelector('.closePopup');
        closePopupButton.style.color = 'black';
    }
}

enableDarkmode();
