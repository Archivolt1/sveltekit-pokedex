interface Pokemon {
	name: string;
	url: string;
}

interface PokemonDetails {
	id: number;
	name: string;
	types: PokemonType[];
	sprites: { front_default: string };
}

interface PokemonType {
	slot: number;
	type: { name: string; url: string };
}
