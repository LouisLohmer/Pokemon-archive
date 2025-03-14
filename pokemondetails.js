function displayPokemondetails(event) {
    let pokemonId = event.target.parentNode.value;
    let popUpWindow = document.querySelector('.popup-pokemondetails');

    popUpWindow.style.visibility = 'visible';

    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (json) {
            let pokemonname = document.getElementById('name');
            let pokemonAbilitites = document.getElementById('ability');
            let pokemonMoves = document.getElementById('moves');
            let pokemonTypes = document.getElementById('types');
            let pokemonHelditems = document.getElementById('heldItems');
            let pokemonWeigth = document.getElementById('weight');

            pokemonname.innerHTML = json.name;

            pokemonAbilitites.innerHTML =
                'Fähigkeiten:  &#8205; &#8205; &#8205;' +
                json.abilities
                    .map(function (ability) {
                        return ability.ability.name;
                    })
                    .slice(0, 3)
                    .join();

            pokemonMoves.innerHTML =
                'Attacken: &#8205; &#8205; &#8205;' +
                json.moves
                    .map(function (move) {
                        return move.move.name;
                    })
                    .slice(0, 3)
                    .join();

            pokemonTypes.innerHTML =
                'Typ: &#8205; &#8205; &#8205;' +
                json.types
                    .map(function (types) {
                        return types.type.name;
                    })
                    .slice(0, 3)
                    .join();

            if (json.held_items.length === 0) {
                pokemonHelditems.innerHTML = 'Items: &#8205; &#8205; &#8205;/';
            } else {
                pokemonHelditems.innerHTML =
                    'Items: &#8205; &#8205; &#8205;' +
                    json.held_items
                        .map(function (held_items) {
                            return held_items.item.name;
                        })
                        .slice(0, 3)
                        .join('     ');
            }

            pokemonWeigth.innerHTML = 'Gewicht:       ' + json.weight / 10 + ' Kg';
        })
        .catch(error => {
            console.error(error);
        });
}

function hidePokemondetails() {
    let popUpWindow = document.querySelector('.popup-pokemondetails');

    popUpWindow.style.visibility = 'hidden';
}
