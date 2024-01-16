<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Logo from '$lib/components/Logo.svelte';

	let emu: any;
	let isModalOpen = false;

	onMount(() => {
		emu = window.JSSpeccy(document.getElementById('jsspeccy'), {
			zoom: 3,
			machine: 128,
			sandbox: true
		});
	});
</script>

<svelte:head>
	<script src="/jsspeccy/jsspeccy.js"></script>
</svelte:head>

<div class="bg-black">
	<div class="p-12 h-screen">
		<Logo />
	</div>
	<div class="p-8">
		<slot />
	</div>
</div>

{#if isModalOpen}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
		<div class="relative bg-white p-1 rounded-lg shadow-lg">
			<button
				class="absolute top-0 right-0 mt-1 mr-1 text-black z-10"
				on:click={() => (isModalOpen = false)}
			>
				<svg
					class="h-6 w-6 z-60"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</button>
			<div id="jsspeccy"></div>
		</div>
	</div>
{/if}
