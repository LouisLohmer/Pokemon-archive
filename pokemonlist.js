function displayPokemonList() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1023')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (json) {
            currentRowPokemonList = 0;
            for (let i = 0; i < json.results.length; i++) {
                let pokemonPreviewbox = document.createElement('div');
                let pokemonIndex = document.createElement('span');

                pokemonPreviewbox.classList.add('box-pokemon-preview');
                pokemonPreviewbox.value = i + 1;

                pokemonIndex.classList.add('pokemonattribute');
                pokemonIndex.innerHTML = json.results[i].name;

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

                pokemonPreviewbox.appendChild(pokemonImage);
                pokemonPreviewbox.appendChild(pokemonIndex);
                pokemonPreviewbox.appendChild(pokemonname);

                let pokemonlistRow = document.querySelectorAll('.column');
                if (i > 0) {
                    if (currentRowPokemonList !== 2) {
                        currentRowPokemonList += 1;
                    } else if (currentRowPokemonList === 2) {
                        currentRowPokemonList = 0;
                    }
                }

                pokemonlistRow[currentRowPokemonList].appendChild(pokemonPreviewbox);
            }
        })
        .catch();
}

function filterPokemonList() {
    let pokemonPreviewboxes = document.querySelectorAll('.box-pokemon-preview');
    let darkmodeSwitch = document.getElementById('switchDarkmode');

    let filterTypeGrass = document.getElementById('typeGrass');
    let filterTypePoison = document.getElementById('typePoison');
    let filterTypeFire = document.getElementById('typeFire');
    let filterTypeWater = document.getElementById('typeWater');
    let filterTypeFlying = document.getElementById('typeFlying');
    let filterTypeBug = document.getElementById('typeBug');
    let filterTypeGround = document.getElementById('typeGround');
    let filterTypeFighting = document.getElementById('typeFighting');
    let filterTypeRock = document.getElementById('typeRock');
    let filterTypeGhost = document.getElementById('typeGhost');
    let filterTypeElectric = document.getElementById('typeElectric');
    let filterTypePsychic = document.getElementById('typePsychic');
    let filterTypeNormal = document.getElementById('typeNormal');
    let filterTypeDragon = document.getElementById('typeDragon');
    let filterTypeFairy = document.getElementById('typeFairy');
    let filterTypeIce = document.getElementById('typeIce');
    let filterWeightUnderTenKilogram = document.getElementById('weightBelowTen');
    let filterWeightTenTillHundredKilogram = document.getElementById('weightUnderHundred');
    let filterWeightOverHundredKilogram = document.getElementById('weightOverHundred');
    let filteroptions = document.querySelectorAll('input[name="filteroption"]');
    let filterMessage = document.getElementById('statusmessageFilter');
    let selectedFilteroptions = 0;

    for (let i = 0; i < filteroptions.length; i++) {
        if (filteroptions[i].checked) {
            selectedFilteroptions += 1;
        }
    }

    if (selectedFilteroptions === 0) {
        filterMessage.style.visibility = 'visible';
        filterMessage.style.width = '180px';
        filterMessage.innerHTML = 'Wähle einen Filter aus!';
        return;
    } else {
        filterMessage.style.visibility = 'visible';
        filterMessage.style.width = '220px';
        filterMessage.innerHTML = 'Filter erfolgreich angewendet';
    }

    for (let i = 0; i < pokemonPreviewboxes.length; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + (i + 1);

        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(function (json) {
                // Remove filtered pokemon of prevoius filter options
                if (darkmodeSwitch.checked) {
                    for (let a = 0; a < pokemonPreviewboxes.length; a++) {
                        if (
                            pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name &&
                            pokemonPreviewboxes[a].classList.contains('filtered')
                        ) {
                            pokemonPreviewboxes[a].classList.remove('filtered');
                            pokemonPreviewboxes[a].style.background = '#5c5470';
                        }
                    }
                } else {
                    for (let a = 0; a < pokemonPreviewboxes.length; a++) {
                        if (
                            pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name &&
                            pokemonPreviewboxes[a].classList.contains('filtered')
                        ) {
                            pokemonPreviewboxes[a].classList.remove('filtered');
                            pokemonPreviewboxes[a].style.background = '#0075be';
                        }
                    }
                }

                // Check for set weight-filters
                if (
                    (filterWeightUnderTenKilogram.checked && json.weight / 10 < 10) ||
                    (filterWeightOverHundredKilogram.checked && json.weight / 10 > 100) ||
                    (filterWeightTenTillHundredKilogram.checked &&
                        json.weight / 10 >= 10 &&
                        json.weight / 10 <= 100)
                ) {
                    if (darkmodeSwitch.checked) {
                        for (let a = 0; a < pokemonPreviewboxes.length; a++) {
                            if (pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name) {
                                pokemonPreviewboxes[a].classList.add('filtered');
                                pokemonPreviewboxes[a].style.background = '#818589';
                            }
                        }
                    } else {
                        for (let a = 0; a < pokemonPreviewboxes.length; a++) {
                            if (pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name) {
                                pokemonPreviewboxes[a].classList.add('filtered');
                                pokemonPreviewboxes[a].style.background = '#ffde00';
                            }
                        }
                    }
                }

                // Check for set type-filters
                if (
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
                            (json.types[i].type.name === 'grass' &&
                                filterTypeGrass.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'poison' &&
                                filterTypePoison.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'fire' &&
                                filterTypeFire.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'water' &&
                                filterTypeWater.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'bug' &&
                                filterTypeBug.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'flying' &&
                                filterTypeFlying.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'ground' &&
                                filterTypeGround.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'fighting' &&
                                filterTypeFighting.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'rock' &&
                                filterTypeRock.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'ghost' &&
                                filterTypeGhost.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'electric' &&
                                filterTypeElectric.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'psychic' &&
                                filterTypePsychic.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'normal' &&
                                filterTypeNormal.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'dragon' &&
                                filterTypeDragon.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'fairy' &&
                                filterTypeFairy.checked &&
                                darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'ice' &&
                                filterTypeIce.checked &&
                                darkmodeSwitch.checked)
                        ) {
                            for (let a = 0; a < pokemonPreviewboxes.length; a++) {
                                if (pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name) {
                                    pokemonPreviewboxes[a].classList.add('filtered');
                                    pokemonPreviewboxes[a].style.background = '#818589';
                                    break;
                                }
                            }
                        } else if (
                            (json.types[i].type.name === 'grass' &&
                                filterTypeGrass.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'poison' &&
                                filterTypePoison.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'fire' &&
                                filterTypeFire.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'water' &&
                                filterTypeWater.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'bug' &&
                                filterTypeBug.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'flying' &&
                                filterTypeFlying.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'ground' &&
                                filterTypeGround.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'fighting' &&
                                filterTypeFighting.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'rock' &&
                                filterTypeRock.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'ghost' &&
                                filterTypeGhost.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'electric' &&
                                filterTypeElectric.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'psychic' &&
                                filterTypePsychic.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'normal' &&
                                filterTypeNormal.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'dragon' &&
                                filterTypeDragon.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'fairy' &&
                                filterTypeFairy.checked &&
                                !darkmodeSwitch.checked) ||
                            (json.types[i].type.name === 'ice' &&
                                filterTypeIce.checked &&
                                !darkmodeSwitch.checked)
                        ) {
                            for (let a = 0; a < pokemonPreviewboxes.length; a++) {
                                if (pokemonPreviewboxes[a].childNodes[1].innerHTML === json.name) {
                                    pokemonPreviewboxes[a].classList.add('filtered');
                                    pokemonPreviewboxes[a].style.background = '#ffde00';
                                    break;
                                }
                            }
                        }
                    }
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}

displayPokemonList();
