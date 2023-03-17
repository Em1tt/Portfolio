<script lang="ts">
	import { onMount } from 'svelte';
    import Scramble from '$lib/Scramble.svelte';

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

<svelte:head>
	<title>Em1t | Home</title>
	<meta
		name="description"
		content="Welcome to em1t.dev. This website serves as a way to demonstrate my practical skills to people. It includes my portfolio, games, and in the future APIs."
	/>
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@Em1ttt" />
	<meta property="og:url" content="https://em1t.dev" />
	<meta property="og:title" content="Em1t | Developer & designer" />
	<meta
		property="og:description"
		content="Welcome to em1t.dev. This website serves as a way to demonstrate my practical skills to people. It includes my portfolio, games, and in the future APIs."
	/>
    <meta property="og:image" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:secure_url" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:type" content="image/png">
	<meta property="og:image:width" content="840">
	<meta property="og:image:height" content="590">
</svelte:head>

<div class="bg-gray-900">
	<main class="grid w-screen h-screen place-items-center z-20 absolute">
		<div>
			<Scramble>
				<h1 class="text-5xl xl:text-7xl text-neutral-200 text-center" data-value="EM1T.DEV">EM1T.DEV</h1>
			</Scramble>
			<p class="mt-8 text-center mx-4 text-neutral-300">Welcome to my development hub, I hope you enjoy it.</p>
			<div class="mt-8 flex justify-center gap-8">
				<a href="/portfolio" class="bg-sky-400/25 border border-sky-500 p-4 rounded text-sky-200 hover:bg-sky-400/40 hover:border-sky-400">Portfolio</a>
				<a href="/games" class="bg-pink-400/25 border border-pink-500 p-4 rounded text-pink-200 hover:bg-pink-400/40 hover:border-pink-400">Games</a>
			</div>
		</div>
	</main>
	<div class="overflow-hidden relative h-screen w-screen">
		<div bind:this={blob} class="opacity-0 bg-gradient-to-r blur-[150px] from-emerald-600 to-sky-500 h-[400px] aspect-square absolute rounded-full animate-rotate z-10" id="blob"></div>
	</div>
</div>