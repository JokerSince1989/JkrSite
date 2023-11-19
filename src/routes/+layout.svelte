<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<div class="bg-gradient-to-r from-slate-900 to-slate-700">
	<Navbar />
	<div class="p-8">
		<slot />
	</div>
</div>
