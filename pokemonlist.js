//Dieses Script dient dem Zweck, die Pokemon-Daten im Frontend darzustellen
function fetchAndDisplayPokemondata() {
    fetch('https://pokeapi.co/api/v2/pokemon-species')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (json) {
            for (let i = 0; i < json.results.length; i++) {
                //Pro Schleifendurchlauf eine Container für das Pokemon erstellen
                let containerPokemon = document.createElement('div');
                containerPokemon.classList.add('container-pokemon');

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

                let pokemonname = document.createElement('span');
                pokemonname.classList.add('pokemonattribute');
                pokemonname.innerHTML = '#' + i;

                //Daten im Frontend darstellen
                containerPokemon.appendChild(pokemonImage);
                containerPokemon.appendChild(pokeindex);
                containerPokemon.appendChild(pokemonname);

                let containerPokemonlist = document.querySelectorAll('.container-pokemonlist');
                if (i < 5) {
                    containerPokemonlist[0].appendChild(containerPokemon);
                } else if (i > 4 && i < 10) {
                    containerPokemonlist[1].appendChild(containerPokemon);
                } else if (i > 9 && i < 15) {
                    containerPokemonlist[2].appendChild(containerPokemon);
                } else if (i > 14 && i <= 19) {
                    containerPokemonlist[3].appendChild(containerPokemon);
                }
            }
        });
}

fetchAndDisplayPokemondata();
