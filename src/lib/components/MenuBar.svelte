<script lang="ts">
	import { Button } from 'bits-ui';
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	<Button.Root
		class="border-0	rounded-full inline-flex h-12 items-center justify-center bg-blue-300 hover:bg-blue/80"
	>
		<div class="i-tabler-arrow-left" />
		Back
	</Button.Root>
	<input
		type="text"
		placeholder="Type a name of a pokemon to search..."
		class="bg-gray-100 rounded-full border-0 px-4"
	/>
	<Button.Root
		class="border-0 rounded-full inline-flex h-12 items-center justify-center bg-blue-300 hover:bg-blue/80"
	>
		Next
		<div class="i-tabler-arrow-right" />
	</Button.Root>
</div>
