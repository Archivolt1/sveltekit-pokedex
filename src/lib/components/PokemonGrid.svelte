<script>
	import PokemonCard from '$lib/components/PokemonCard.svelte';

	export let pokemonArray: Pokemon[];
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8">
	{#each pokemonArray as item}
		<PokemonCard pokemon={item} />
	{/each}
</div>
