<script lang="ts">
	import Production from '$lib/components/Production.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: sorted = data.groupInfo.group.prods.sort((p1, p2) => {
		const year1 = Number(p1.party_year);
		const year2 = Number(p2.party_year);

		if (year1 !== year2) {
			return year2 - year1;
		}

		return p2.addedDate.localeCompare(p1.addedDate);
	});
</script>

<div class="flex flex-col items-center">
	<img class="mb-3" src="logo.png" alt="Joker logo" />
	<div
		class="container mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-4"
	>
		{#each sorted as prod (prod.id)}
			<Production {prod} />
		{/each}
	</div>
</div>
