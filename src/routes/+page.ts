import { getPokemon } from '$lib/api/pokemon';

export async function load({ url }) {
	const offset = url.searchParams.get('offset') ?? '0';

	const pokemon = (await getPokemon(offset)) as { results: Array<any> };

	return { offset, pokemon };
}
