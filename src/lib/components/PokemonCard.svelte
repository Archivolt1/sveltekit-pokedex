<script>
	import PokemonTypeBadge from '$lib/components/PokemonTypeBadge.svelte';
</script>

<div class="bg-gray-100 max-w-sm rounded overflow-hidden">
	<div class="px-6 py-4">
		<div class="font-bold text-sm md:text-lg mb-2">Pokemon Name</div>
		<img
			class="w-full"
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
			alt="Clefairy"
		/>
		<PokemonTypeBadge /><PokemonTypeBadge />
	</div>
</div>
