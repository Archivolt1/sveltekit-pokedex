<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import type { PageData } from './$types';
	import PokemonGrid from '$lib/components/PokemonGrid.svelte';
	import { getPokemon } from '$lib/api/pokemon';

	// Get page props from SSR
	export let data: PageData;
	const pokemon = data?.pokemon?.results;
	const offset = data?.offset ?? '0';

	// This data is cached by prefetchQuery in +page.ts so no fetch actually happens here
	const pokemonQuery = createQuery({
		queryKey: [`pokemon-${offset}`],
		queryFn: async () => getPokemon(offset),
		initialData: pokemon
	});
</script>

<main>
	{JSON.stringify(pokemon)}
	<PokemonGrid></PokemonGrid>
</main>
