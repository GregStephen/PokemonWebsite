let pokemonArray = [
	{
		"name": "Bulbasaur",
		"number": 001,
		"type": ["Grass", "Poison"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
	},{
		"name": "Ivysaur",
		"number": 002,
		"type": ["Grass", "Poison"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
	},{
		"name": "Venusaur",
		"number": 003,
		"type": ["Grass", "Poison"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
	},{
		"name": "Charmander",
		"number": 004,
		"type": ["Fire"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
	},{
		"name": "Charmeleon",
		"number": 005,
		"type": ["Fire"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
	},{
		"name": "Charizard",
		"number": 006,
		"type": ["Fire", "Flying"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
	},{
		"name": "Squirtle",
		"number": 007,
		"type": ["Water"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
	},{
		"name": "Wartortle",
		"number": 008,
		"type": ["Water"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
	},{
		"name": "Blastiose",
		"number": 009,
		"type": ["Water"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
	},{
		"name": "Caterpie",
		"number": 010,
		"type": ["Bug"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
	},{
		"name": "Metapod",
		"number": 011,
		"type": ["Bug"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
	},{
		"name": "Butterfree",
		"number": 012,
		"type": ["Bug", "Flying"],
		"image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
	},
	// {
	// 	"name": "",
	// 	"number": ,
	// 	"type": [],
	// 	"image": 
	// },{
	// 	"name": "",
	// 	"number": ,
	// 	"type": [],
	// 	"image": 
	// },{
	// 	"name": "",
	// 	"number": ,
	// 	"type": [],
	// 	"image": 
	// },{
	// 	"name": "",
	// 	"number": ,
	// 	"type": [],
	// 	"image": 
	// },{
	// 	"name": "",
	// 	"number": ,
	// 	"type": [],
	// 	"image": 
	// },
];

let searchBar = $("#searchBar");
let searchBtn = $("#searchBtn");
let divOutput = $("#output-places");


function showPokemon(pokemonArray) {
	let searchVal = searchBar.val().toLowerCase();
	console.log(searchVal);
	divOutput.html("");
	for(let i of pokemonArray) {
		console.log(i.name);
		if (i.name.toLowerCase().includes(searchVal)) {
			divOutput.append(`<div class="card bg-dark text-white col" 
				style="width:18rem;"><h5 class="card-header">${i.name} #${i.number}</h5>
				<img class="card-img-top location-image" src="${i.image}"alt="${i.name}">
				<div class="card-footer">${i.type}</div></div>`).children(':last').hide().fadeIn(1500);
		}
	}
}

$(pokemonSearchForm).submit(function(event){
	event.preventDefault();
	showPokemon(pokemonArray);
});