//Dieses Script dient dem Zweck, die Pokemonliste im Frontend darzustellen und zu filtern
function fetchAndDisplayPokemondata() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1023')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (json) {
            indexRow = 0;
            for (let i = 0; i < json.results.length; i++) {
                //Pro Schleifendurchlauf eine Container für das Pokemon erstellen
                let containerPokemon = document.createElement('div');
                containerPokemon.classList.add('box-pokemon-preview');
                containerPokemon.value = i + 1;

                //Pro Schleifendurchgang ein Bild, sowie Pokemonname und Pokeindex für das Pokemon erstellen
                let pokeindex = document.createElement('span');
                pokeindex.classList.add('pokemonattribute');
                pokeindex.innerHTML = json.results[i].name;

                let pokemonImage = document.createElement('img');
                pokemonImage.classList.add('pokemonimage');
                pokemonImage.src =
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                    (i + 1) +
                    '.png';
                pokemonImage.addEventListener('click', displayPokemondetails);

                let pokemonname = document.createElement('span');
                pokemonname.classList.add('pokemonattribute');
                pokemonname.innerHTML = '#' + (i + 1);

                //Daten im Frontend darstellen
                containerPokemon.appendChild(pokemonImage);
                containerPokemon.appendChild(pokeindex);
                containerPokemon.appendChild(pokemonname);

                let pokemonlistRow = document.querySelectorAll('.column');
                if (i > 0) {
                    if (indexRow !== 2) {
                        indexRow += 1;
                    } else if (indexRow === 2) {
                        indexRow = 0;
                    }
                }
                pokemonlistRow[indexRow].appendChild(containerPokemon);
            }
        })
        .catch();
}

function filterPokemon() {
    //Pokemon-Preview-container und darkmode-Checkbox
    let pokemonPreviews = document.querySelectorAll(".box-pokemon-preview");
    let checkboxDarkmode = document.getElementById('switchDarkmode');

    //Pokemontyp-Filter
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
    
    //Pokemonitems-Filter
    let filterItemNone = document.getElementById("itemNone");
    let filteritemsItems = document.getElementById("itemRandomItems");

    //Pokemongewicht-Filter
    let filterWeightUnderTen = document.getElementById("weightBelowTen");
    let filterWeightUnderHundred = document.getElementById("weightUnderHundred");
    let filterWeightOverHundred = document.getElementById("weightOverHundred");

    //Gesamtanzahl aller dargestellten Pokemon iterativ durchgehen
    let test = 0;
    for (let i = 0;i < pokemonPreviews.length;i++) {
        let urlFetchAPI ='https://pokeapi.co/api/v2/pokemon/' + (i+1);
        //Daten vom aktuellen Pokemon fetchen
        fetch(urlFetchAPI)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
        }).then(function(json) {
            //Auf angegebene Filter prüfen und Pokemon filtern
            //Gewichtsfilter für Pokemon unter 10Kg
            if (filterWeightUnderTen.checked === true && (json.weight / 10) < 10) {
                //Wenn das Pokemon vom Filter betroffen ist, wird dies farblich entprechend von darkmode und whitemode herausgehoben
                if (checkboxDarkmode.checked === true) {
                    for (let a = 0;a < pokemonPreviews.length;a++) {
                        if (pokemonPreviews[a].childNodes[1].innerHTML === json.name) {
                            pokemonPreviews[a].classList.add("filtered");
                            pokemonPreviews[a].style.background = '#818589';
                        }
                    }
                } else if (checkboxDarkmode.checked === false) {
                    for (let a = 0;a < pokemonPreviews.length;a++) {
                        if (pokemonPreviews[a].childNodes[1].innerHTML === json.name) {
                            pokemonPreviews[a].classList.add("filtered");
                            pokemonPreviews[a].style.background = '#ffde00';
                        }
                    }
                }
            } else {
                //Wenn das Pokemon nicht vom Filter betroffen ist, wird es wieder farblich zurückgesetzt
                if (checkboxDarkmode.checked === true) {
                    for (let a = 0;a < pokemonPreviews.length;a++) {
                        if (pokemonPreviews[a].childNodes[1].innerHTML === json.name) {
                            pokemonPreviews[a].classList.remove("filtered");
                            pokemonPreviews[a].style.background = '#5c5470';
                        }
                    }
                } else if (checkboxDarkmode.checked === false) {
                    for (let a = 0;a < pokemonPreviews.length;a++) {
                        if (pokemonPreviews[a].childNodes[1].innerHTML === json.name) {
                            pokemonPreviews[a].classList.remove("filtered");
                            pokemonPreviews[a].style.background = '#0075be';
                        }
                    }
                }
            }
            
            //Gewichtsfilter für Pokemon über 100Kg
            if (filterWeightOverHundred.checked === true && (json.weight / 10) > 100) {
                //Wenn das Pokemon vom Filter betroffen ist, wird dies farblich entprechend von darkmode und whitemode herausgehoben
                if (checkboxDarkmode.checked === true) {
                    for (let a = 0;a < pokemonPreviews.length;a++) {
                        if (pokemonPreviews[a].childNodes[1].innerHTML === json.name) {
                            pokemonPreviews[a].classList.add("filtered");
                            pokemonPreviews[a].style.background = '#818589';
                        }
                    }
                } else if (checkboxDarkmode.checked === false) {
                    for (let a = 0;a < pokemonPreviews.length;a++) {
                        if (pokemonPreviews[a].childNodes[1].innerHTML === json.name) {
                            pokemonPreviews[a].classList.add("filtered");
                            pokemonPreviews[a].style.background = '#ffde00';
                        }
                    }
                }
            } else {
                //Wenn das Pokemon nicht vom Filter betroffen ist, wird es wieder farblich zurückgesetzt
                if (checkboxDarkmode.checked === true) {
                    for (let a = 0;a < pokemonPreviews.length;a++) {
                        if (pokemonPreviews[a].childNodes[1].innerHTML === json.name) {
                            pokemonPreviews[a].classList.remove("filtered");
                            pokemonPreviews[a].style.background = '#5c5470';
                        }
                    }
                } else if (checkboxDarkmode.checked === false) {
                    for (let a = 0;a < pokemonPreviews.length;a++) {
                        if (pokemonPreviews[a].childNodes[1].innerHTML === json.name) {
                            pokemonPreviews[a].classList.remove("filtered");
                            pokemonPreviews[a].style.background = '#0075be';
                        }
                    }
                }
            }
        }).catch();
    }
}

fetchAndDisplayPokemondata();
