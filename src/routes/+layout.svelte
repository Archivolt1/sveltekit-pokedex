<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { PageData } from './$types';
	import { onDestroy } from 'svelte';
	import { getBreakpoint, validateBreakpoint } from '$lib/functions/breakpoints';
	import MenuBar from '$lib/components/MenuBar.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';

	let pre = 'svelte-fluid-layout-';
	const fullHeight = (node: any) => {
		node.style.minHeight = '100%';
	};
	$: validateBreakpoint({ breakpoint });

	export let data: PageData;
	export let breakpoint = getBreakpoint();

	if (typeof window !== 'undefined') {
		window.addEventListener('resize', getBreakpoint);
		onDestroy(() => window.removeEventListener('resize', getBreakpoint));
	}
</script>

<QueryClientProvider client={data.queryClient}>
	<div class="font-oxygen">
		<div class="{pre}small {pre}small-{breakpoint}">
			<slot name="header"><SiteHeader /><MenuBar /></slot>
			<slot name="side1" />
			<div>
				<slot />
			</div>
			<slot name="side2" />
			<slot name="footer" />
		</div>

		<div class="{pre}large {pre}large-{breakpoint}">
			<slot name="header"><SiteHeader /><MenuBar /></slot>
			<div use:fullHeight>
				<slot name="side1" />
			</div>
			<slot />
			<div use:fullHeight>
				<slot name="side2" />
			</div>
			<slot name="footer" />
		</div>
	</div>
</QueryClientProvider>

<style>
	.svelte-fluid-layout-small,
	.svelte-fluid-layout-large {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.svelte-fluid-layout-large > div {
		display: flex;
		justify-content: center;
	}

	div div {
		flex: 1;
	}

	.svelte-fluid-layout-large > div div:nth-child(2n + 1):empty {
		flex: 0;
	}

	.svelte-fluid-layout-large-sm {
		display: none;
	}
	.svelte-fluid-layout-large-md {
		display: none;
	}
	.svelte-fluid-layout-large-lg {
		display: none;
	}
	.svelte-fluid-layout-large-xl {
		display: none;
	}

	@media (min-width: 640px) {
		.svelte-fluid-layout-small-sm {
			display: none;
		}
		.svelte-fluid-layout-large-sm {
			display: flex;
		}
	}
	@media (min-width: 768px) {
		.svelte-fluid-layout-small-md {
			display: none;
		}
		.svelte-fluid-layout-large-md {
			display: flex;
		}
	}

	@media (min-width: 1024px) {
		.svelte-fluid-layout-small-lg {
			display: none;
		}
		.svelte-fluid-layout-large-lg {
			display: flex;
		}
	}

	@media (min-width: 1280px) {
		.svelte-fluid-layout-small-xl {
			display: none;
		}
		.svelte-fluid-layout-large-xl {
			display: flex;
		}
	}
</style>
