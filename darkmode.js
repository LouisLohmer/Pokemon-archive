function enableAndAbleDarkmode() {
    let darkmodeSwitch = document.getElementById('switchDarkmode');
    let darkmodestatus = document.getElementById('messageDarkmodestatus');

    let header = document.getElementsByTagName('header');
    let body = document.body;

    let layoutPokemonfilter = document.querySelector('.pokemonfilter-layout');
    let filteroptions = document.querySelectorAll('.filteroptions');
    let filterPokemonButton = document.querySelector('.filterPokemon');
    let filterSuccesMessage = document.getElementById('statusmessageFilter');

    let pokemonPreviewbox = document.querySelectorAll('.box-pokemon-preview');

    let popupWindow = document.querySelector('.popup-pokemondetails');
    let closePopupButton = document.querySelector('.closePopup');

    if (darkmodeSwitch.checked) {
        darkmodestatus.innerHTML = 'Darkmode aktiviert';
        darkmodestatus.style.color = '#0075be';

        body.style.backgroundColor = '#282c35';
        header[0].style.backgroundColor = '#818589';

        layoutPokemonfilter.style.color = 'white';
        layoutPokemonfilter.style.borderColor = 'white';
        filterPokemonButton.style.backgroundColor = '#0075be';
        filterPokemonButton.style.color = 'white';
        filterSuccesMessage.style.backgroundColor = '#0075be';

        for (let i = 0; i < filteroptions.length; i++) {
            filteroptions[i].style.backgroundColor = '#282c35';
            filteroptions[i].style.color = 'white';
        }

        for (let i = 0; i < pokemonPreviewbox.length; i++) {
            if (pokemonPreviewbox[i].classList.contains('filtered')) {
                // Higlight pokemon that are currently filtered
                pokemonPreviewbox[i].style.color = 'white';
                pokemonPreviewbox[i].style.backgroundColor = '#818589';
            } else {
                pokemonPreviewbox[i].style.color = 'white';
                pokemonPreviewbox[i].style.backgroundColor = '#5c5470';
            }
        }

        popupWindow.style.color = 'white';
        popupWindow.style.backgroundColor = '#5c5470';
        closePopupButton.style.color = 'white';
    } else {
        darkmodestatus.innerHTML = 'Darkmode deaktiviert';
        darkmodestatus.style.color = '#a3a3a3';

        body.style.backgroundColor = 'white';
        header[0].style.backgroundColor = '#ffde00';

        layoutPokemonfilter.style.color = 'black';
        layoutPokemonfilter.style.borderColor = 'black';
        filterPokemonButton.style.backgroundColor = '#ffde00';
        filterPokemonButton.style.color = 'black';
        filterSuccesMessage.style.backgroundColor = '#ffde00';

        for (let i = 0; i < filteroptions.length; i++) {
            filteroptions[i].style.backgroundColor = 'white';
            filteroptions[i].style.color = 'black';
        }

        for (let i = 0; i < pokemonPreviewbox.length; i++) {
            if (pokemonPreviewbox[i].classList.contains('filtered')) {
                // Higlight pokemon that are currently filtered
                pokemonPreviewbox[i].style.color = 'black';
                pokemonPreviewbox[i].style.backgroundColor = '#ffde00';
            } else {
                pokemonPreviewbox[i].style.color = 'black';
                pokemonPreviewbox[i].style.backgroundColor = '#0075be';
            }
        }

        popupWindow.style.color = 'black';
        popupWindow.style.backgroundColor = '#ffde00';
        closePopupButton.style.color = 'black';
    }
}

enableAndAbleDarkmode();
