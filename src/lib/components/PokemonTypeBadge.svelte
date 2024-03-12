<script lang="ts">
	export let type: string;
</script>

<div class="overflow-hidden rounded-full text-center my-1">
	<div class="font-bold text-xs py-1">{type.charAt(0).toLocaleUpperCase() + type.slice(1)}</div>
</div>
