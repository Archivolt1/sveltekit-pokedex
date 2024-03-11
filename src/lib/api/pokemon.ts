import { pokeApiHttpClient } from '$lib/functions/httpclient';

export function getPokemon(offset: string) {
	return pokeApiHttpClient.get(`pokemon?offset=${offset}&limit=20`).json();
}
