<script lang="ts">
	import { onMount } from 'svelte';
	import '../../../app.css';
    import Scramble from '$lib/Scramble.svelte';
	import Navigation from '$lib/Navigation.svelte';

	let blob: HTMLElement;
	onMount(()=>{
		document.body.onpointermove = ({clientX, clientY}) => {
			blob.animate({
				left: `${clientX-blob.clientWidth/2}px`,
				top: `${clientY-blob.clientHeight/2}px`
			}, {duration: 1000, fill: "forwards"});
		};
	});
</script>

<Navigation/>

<main class="grid w-screen h-screen place-items-center backdrop-blur-[200px] z-20 absolute">
	<Scramble>
        <h1 class="text-7xl text-neutral-200" data-value="EM1T.DEV">EM1T.DEV</h1>
    </Scramble>
</main>
<div bind:this={blob} class="opacity-0 bg-gradient-to-r from-emerald-600 to-sky-500 h-[400px] aspect-square absolute rounded-full animate-rotate z-10" id="blob"></div>
