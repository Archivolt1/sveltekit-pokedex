<script lang="ts">
	import { Button } from 'bits-ui';
</script>

<div class="flex flex-col">
	<div class="text-center">
		<input
			type="text"
			placeholder="Type a name of a pokemon to search..."
			class="bg-gray-100 rounded-full border-0 px-4 h-12 w-5/6 md:w-1/2"
		/>
		<div class="mt-6">
			<Button.Root
				class="cursor-pointer border-0 rounded-full inline-flex h-12 items-center justify-center bg-blue-200 hover:bg-blue/80 w-1/4 md:w-1/6"
			>
				Back
			</Button.Root>
			<Button.Root
				class="cursor-pointer border-0 rounded-full inline-flex h-12 items-center justify-center bg-blue-200 hover:bg-blue/80 w-1/4 md:w-1/6"
			>
				Next Page
			</Button.Root>
		</div>
	</div>
</div>
