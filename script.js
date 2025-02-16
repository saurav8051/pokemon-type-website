const typeSelect = document.getElementById('type-select');
const searchButton = document.getElementById('search-button');
const pokemonList = document.getElementById('pokemon-list');

searchButton.addEventListener('click', () => {
const type = typeSelect.value;

// API link Section //
fetch(`https://pokeapi.co/api/v2/type/${type}`)
.then(response => response.json())
.then(data => {
pokemonList.innerHTML = '';

data.pokemon.forEach(pokemon => {
fetch(pokemon.pokemon.url)
.then(response => response.json())
.then(pokemonData => {
const card = document.createElement('div');
card.classList.add('pokemon-card');
card.innerHTML = `
<h2>${pokemonData.name}</h2>
<img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
`;
pokemonList.appendChild(card);
});
});
});
});