//Dieses Script dient dem Zweck, die PokemonlistecheckboxDarkmode im Frontend darzustellen
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

fetchAndDisplayPokemondata();
