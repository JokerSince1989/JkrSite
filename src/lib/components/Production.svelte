<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import Saos from 'saos';

	export let prod: Prod;
	let isHoveredOrActive = false;
	let showEmu = false;
</script>

<Saos animation={'scale-in-center 0.3s'}>
	<div
		class="bg-slate-800 border border-slate-800 transition transform duration-200 ease-in-out rounded-lg overflow-hidden group relative"
		on:mouseenter={() => (isHoveredOrActive = true)}
		on:mouseleave={() => (isHoveredOrActive = false)}
		on:touchstart={() => (isHoveredOrActive = true)}
		on:touchend={() => (isHoveredOrActive = false)}
		role="article"
	>
		<div class="w-full h-48 overflow-hidden">
			<img
				class="object-cover w-full h-full transition-all duration-450 {isHoveredOrActive
					? 'filter-class'
					: ''}"
				src={prod.screenshot}
				alt={prod.name}
			/>
		</div>

		{#if isHoveredOrActive}
			<div class="absolute bottom-0 left-0 w-full">
				<div class="flex justify-between items-center p-3 text-slate-200">
					<div class="flex space-x-2">
						{#if prod.download}
							<a
								href={prod.download}
								class="p-1 font-mono text-sm border border-slate-200 rounded hover:bg-slate-200 hover:text-black transition-colors"
							>
								Download
							</a>
						{/if}
					</div>
				</div>
			</div>
			<div class="absolute top-0 left-0 w-full p-4">
				<Typewriter delay={60} interval={40} keepCursorOnFinish={true}>
					<h5 class="font-mono text-lg text-slate-200 mb-2">
						{prod.name}
					</h5>
				</Typewriter>
				<Typewriter delay={60} interval={40} keepCursorOnFinish={true}>
					<h7 class="font-mono text-sm text-slate-400">
						{prod.type.replace(/,/g, ', ') +
							', ' +
							prod.platforms[Object.keys(prod.platforms)[0]].name}
					</h7>
				</Typewriter>
			</div>
		{/if}
	</div>
</Saos>

<style>
	.filter-class {
		filter: brightness(30%) contrast(300%);
	}

	@keyframes -global-scale-in-center {
		0% {
			transform: scale(0.5);
			opacity: 0.8;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
