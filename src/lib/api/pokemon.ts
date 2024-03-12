import { pokeApiHttpClient } from '$lib/functions/httpclient';

export function getPokemon(offset: string) {
	return pokeApiHttpClient.get(`pokemon?offset=${offset}&limit=20`).json();
}

export function getPokemonDetails(pokemonName: Pokemon['name']) {
	return pokeApiHttpClient.get(`pokemon/${pokemonName}`).json();
}
