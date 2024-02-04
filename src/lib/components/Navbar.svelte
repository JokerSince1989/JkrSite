<script lang="ts">
	import Typewriter from 'svelte-typewriter';
</script>

<nav
	class="backdrop-blur flex text-slate-200 p-4 font-mono bg-slate-800/60 items-center justify-between"
>
	<div class="font-xl flex gap-6">
		<div class="font-bold font-mono">Joker</div>
		<div class="gap-4 md:flex hidden items-center">
			<a
				href="https://www.pouet.net/groups.php?which=2992"
				class="hover:text-blue-500 transition-colors">Pouet</a
			>
			<a href="https://demozoo.org/groups/10844/" class="hover:text-blue-500 transition-colors"
				>Demozoo</a
			>
			<a href="https://github.com/JokerSince1989" class="hover:text-blue-500 transition-colors"
				>Github</a
			>
		</div>
	</div>
	<Typewriter mode="loop" interval={60}>
		<span>Joker Team welcomes you!</span>
		<span>ZX Spectrum</span>
		<span>Amiga 500</span>
		<span>Atari ST/E</span>
		<span>Nintendo Game Boy</span>
		<span>too good, to be true...</span>
		<span>...since 1989!</span>
		<span>Our comrades:</span>
		<span>At0m</span>
		<span>Dalthon</span>
		<span>Don Kichote</span>
		<span>Dox</span>
		<span>Dreamer</span>
		<span>e!ghtbm</span>
		<span>Gazela</span>
		<span>GBH</span>
		<span>Jammer</span>
		<span>Kalosz</span>
		<span>MCH</span>
		<span>Pator</span>
		<span>Peters</span>
		<span>Sachy</span>
		<span>Vasyl</span>
		<span>wermi</span>
		<span>Yoga</span>
		<span>Zlew</span>
	</Typewriter>
</nav>
