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
        document.body.style.transition = '1.5s';
        //header
        let header = document.getElementsByTagName('header');
        header[0].style.backgroundColor = '#818589';
        header[0].style.transition = '1.5s';
        //.pokemonfilter-layout und Inhalt
        let containerContent = document.querySelector('.pokemonfilter-layout');
        containerContent.style.color = 'white';
        containerContent.style.borderColor = 'white';
        containerContent.style.transition = '1.5s';
        //Optionfelder aus dem Select-Imput-Feldern
        let options = document.querySelectorAll('.filteroptions');
        for (let i = 0; i < options.length; i++) {
            options[i].style.backgroundColor = '#282c35';
            options[i].style.color = 'white';
            options[i].style.transition = '1.5s';
        }
        //Select-Input-Felder
        let selectInput = document.querySelectorAll('.filter');
        for (let i = 0; i < selectInput.length; i++) {
            selectInput[i].style.backgroundColor = '#282c35';
            selectInput[i].style.color = 'white';
            selectInput[i].style.transition = '1.5s';
        }
        //containter-pokemon und Inhalt
        let containerPokemon = document.querySelectorAll('.box-pokemon-preview');
        for (let i = 0; i < containerPokemon.length; i++) {
            containerPokemon[i].style.color = 'white';
            containerPokemon[i].style.backgroundColor = '#5c5470';
        }
        //popupFenster und Inhalt
        let popupWindow = document.querySelector('.popup-pokemondetails');
        popupWindow.style.color = 'white';
        popupWindow.style.backgroundColor = '#5c5470';
    } else {
        spanDarkmodestatus.innerHTML = 'Darkmode deaktiviert';
        spanDarkmodestatus.style.color = '#a3a3a3';

        //HTML-Elemente dem Whitemode entsprechend umfärben
        //body
        document.body.style.backgroundColor = 'white';
        //header
        let header = document.getElementsByTagName('header');
        header[0].style.backgroundColor = '#ffde00';
        //.pokemonfilter-layout und Inhalt
        let containerContent = document.querySelector('.pokemonfilter-layout');
        containerContent.style.color = 'black';
        containerContent.style.borderColor = 'black';
        //Optionfelder aus dem Select-Imput-Feldern
        let options = document.querySelectorAll('.filteroptions');
        for (let i = 0; i < options.length; i++) {
            options[i].style.backgroundColor = 'white';
            options[i].style.color = 'black';
        }
        //Select-Input-Felder
        let selectInput = document.querySelectorAll('.filter');
        for (let i = 0; i < selectInput.length; i++) {
            selectInput[i].style.backgroundColor = 'white';
            selectInput[i].style.color = 'black';
        }
        //containter-pokemon und Inhalt
        let containerPokemon = document.querySelectorAll('.box-pokemon-preview');
        for (let i = 0; i < containerPokemon.length; i++) {
            containerPokemon[i].style.color = 'black';
            containerPokemon[i].style.backgroundColor = '#0075be';
        }
        //popupFenster und Inhalt
        let popupWindow = document.querySelector('.popup-pokemondetails');
        popupWindow.style.color = 'black';
        popupWindow.style.backgroundColor = '#0075be';
    }
}

enableDarkmode();
