<script lang="ts">
	import Typewriter from 'svelte-typewriter';
</script>

<nav
	class="sticky top-0 z-40 backdrop-blur flex text-slate-200 p-4 font-mono bg-slate-800/60 items-center justify-between"
>
	<div class="font-xl flex gap-6">
		<div class="font-bold font-mono">Joker</div>
		<div class="gap-4 md:flex hidden items-center">
			<a href="#home" class="hover:text-blue-500 transition-colors">Pouet</a>
			<a href="#contact" class="hover:text-blue-500 transition-colors">Demozoo</a>
		</div>
	</div>
	<Typewriter mode="loop" interval={60}>
		<span>Joker Team welcomes you!</span>
		<span>ZX Spectrum</span>
		<span>Amiga 500</span>
		<span>Atari ST/E</span>
		<span>Nintendo Game Boy</span>
		<span>too good, to be true...</span>
		<span>...since 1990!</span>
		<span>Partyzanci:</span>
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
