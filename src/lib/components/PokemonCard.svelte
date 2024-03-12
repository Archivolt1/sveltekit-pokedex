<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import PokemonTypeBadge from '$lib/components/PokemonTypeBadge.svelte';
	import { getPokemonDetails } from '$lib/api/pokemon';
	import PokemonCardPlaceholder from '$lib/components/PokemonCardPlaceholder.svelte';

	export let pokemon: Pokemon;

	const pokemonDetailsQuery = createQuery({
		queryKey: [`pokemon-details-${pokemon.name}`],
		queryFn: () => getPokemonDetails(pokemon.name) as Promise<PokemonDetails>
	});
</script>

{#if $pokemonDetailsQuery.isSuccess && $pokemonDetailsQuery.data}
	<div class="bg-gray-100 rounded overflow-hidden">
		<div class="px-6 py-4">
			<div class="font-bold text-sm md:text-lg text-neutral">
				{$pokemonDetailsQuery.data?.id}
			</div>
			<div class="font-bold text-sm md:text-lg mb-2">
				{pokemon.name.charAt(0).toLocaleUpperCase() + pokemon.name.slice(1)}
			</div>
			<div class="w-full text-center">
				<img
					class="h-96px md:h-128px"
					src={$pokemonDetailsQuery.data?.sprites?.front_default}
					alt={pokemon.name}
				/>
			</div>
			{#each $pokemonDetailsQuery.data?.types as type}
				<PokemonTypeBadge type={type.type.name} />
			{/each}
		</div>
	</div>
{:else if $pokemonDetailsQuery.isError}
	<p>Error loading pokemon details...</p>
{:else if $pokemonDetailsQuery.isLoading}
	<PokemonCardPlaceholder />
{/if}
