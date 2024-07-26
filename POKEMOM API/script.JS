document.addEventListener('DOMContentLoaded', function () {
    const pokemonInput = document.getElementById('pokemonInput');
    const fetchPokemonButton = document.getElementById('fetchPokemonButton');
    const pokemonDetails = document.getElementById('pokemonDetails');

    fetchPokemonButton.addEventListener('click', function () {
        const pokemonNameOrId = pokemonInput.value.trim().toLowerCase();
        if (pokemonNameOrId === '') {
            alert('Por favor, digite o nome ou ID do Pokémon.');
            return;
        }

        pokemonDetails.innerHTML = '';
    
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`)
        .then(response =>{
            if(!response.ok){
                throw new Error('Pokémom não encontrado')
            }
            return response.json()
        })
        .then(data =>{
            console.log(data)
            const {name, id, types, abilities, sprites} = data
            const pokemomName = name.charAt(0).toUpperCase() + name.slice(1)
            const pokemomId = id
            const pokemomType = 
types.map
(type => 
type.type.name
)
            const pokemomImage = sprites.front_default
            const pokemomAbilities = 
abilities.map
(ability => 
ability.ability.name
).join(',')

            pokemonDetails.innerHTML = `
            <h2>${pokemomName} (#${pokemomId})</h2>
            
            <p>Tipo: ${pokemomType} </p>
            <p>Habilidade : ${pokemomAbilities} </p>
            <img src="${pokemomImage}"/>
            `
            //0 - 1025
        })

    });
}); 