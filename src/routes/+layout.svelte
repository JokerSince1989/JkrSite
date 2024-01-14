<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<div class="bg-slate-900">
	<Navbar />
	<div class="p-8">
		<slot />
	</div>
</div>
