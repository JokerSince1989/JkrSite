<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    $: sorted = data.groupInfo.group.prods.sort((p1, p2) => {
        const year1 = Number(p1.party_year);
        const year2 = Number(p2.party_year);
        return year2 - year1;
    });
</script>

<div class="container mx-auto grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    {#each sorted as prod (prod.id)}
        <div class="max-w-[18em] group transition hover:scale-[102%] border rounded-lg shadow-md bg-gray-800 border-gray-900">
            <div class="w-full h-36 overflow-hidden rounded-t-lg">
                <img class="object-cover w-full h-full" src={prod.screenshot} alt={prod.name} />
            </div>
            <div class="p-5 flex flex-col justify-between">
                <h5 class="text-xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">
                    {prod.name}
                </h5>
                <p class="font-mono text-gray-400">
                    {prod.type}
                </p>
            </div>
        </div>
    {/each}
</div>
