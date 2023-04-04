<script lang="ts">
	import { onMount } from 'svelte';

	import { _ } from 'svelte-i18n';

	let canvas: any;

	onMount(() => {
		const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
		function renderBoard(width: number, height: number) {
			(canvas as HTMLElement).setAttribute("width", `${width}`);
			(canvas as HTMLElement).setAttribute("height", `${height}`);
			ctx.clearRect(0, 0, (canvas as OffscreenCanvas).width, (canvas as OffscreenCanvas).height);
			for (let i = 0; i < 8; i++) {
				for (let j = 0; j < 8; j++) {
					if ((j + i) % 2 == 0) {
						ctx.fillStyle = `black`;
					} else {
						ctx.fillStyle = `white`;
					}
					ctx.fillRect(i*width/8,j*width/8,width/8,height/8);
				}
			}
		}
		window.onresize = () => {
			let width = window.innerWidth, height = window.innerHeight;
			if(width > height * 0.25){
				width = window.innerHeight;
			}
			console.log(width, height);
			renderBoard(width, height);
		};
		(() => {
			renderBoard(canvas.clientWidth, canvas.clientHeight);
		})();
	});
</script>

<svelte:head>
	<title>{$_('games.title')}</title>
	<meta name="description" content="Play minigames for free. Made for fun, just for fun." />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@Em1ttt" />
	<meta property="og:url" content="https://em1t.dev" />
	<meta property="og:title" content="Em1t | Developer & designer" />
	<meta property="og:description" content="Play minigames for free. Made for fun, just for fun." />
	<meta property="og:image" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:secure_url" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="840" />
	<meta property="og:image:height" content="590" />
</svelte:head>

<div class="bg-gray-200">
	<main class="flex flex-row flex-nowrap w-screen h-screen place-items-center z-20 flex-shrink-0">
		<div
			class="w-20 duration-500 hover:w-64 xl:w-64 overflow-x-hidden h-full border-r border-slate-300/10  flex-shrink-0 p-4 pt-20 flex flex-col gap-1"
		>
			<button
				disabled
				class="w-56 flex p-3 gap-7 text-slate-300 hover:bg-slate-300/10 rounded disabled:text-slate-500 hover:disabled:bg-slate-300/5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-puzzle"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
					/>
				</svg>
				Chess
				<span
					class="ml-2 font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
					>WIP</span
				>
			</button>
			<button
				disabled
				class="w-56 flex p-3 gap-7 text-slate-300 hover:bg-slate-300/10 rounded disabled:text-slate-500 hover:disabled:bg-slate-300/5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-box-multiple-1"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
					/>
					<path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
					<path d="M14 14v-8l-2 2" />
				</svg>
				2048
				<span
					class="ml-2 font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
					>WIP</span
				>
			</button>
			<button
				disabled
				class="w-56 flex p-3 gap-7 text-slate-300 hover:bg-slate-300/10 rounded disabled:text-slate-500 hover:disabled:bg-slate-300/5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-box-align-bottom"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 14h16v5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-5z" />
					<path d="M4 9v.01" />
					<path d="M4 4v.01" />
					<path d="M9 4v.01" />
					<path d="M15 4v.01" />
					<path d="M20 4v.01" />
					<path d="M20 9v.01" />
				</svg>
				Breakout
				<span
					class="ml-2 font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
					>WIP</span
				>
			</button>
			<button
				disabled
				class="w-56 flex p-3 gap-7 text-slate-300 hover:bg-slate-300/10 rounded disabled:text-slate-500 hover:disabled:bg-slate-300/5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-box-align-left"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M9.752 19.753v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" />
					<path d="M14.752 19.753h-.01" />
					<path d="M19.753 19.753h-.011" />
					<path d="M19.753 14.752h-.011" />
					<path d="M19.753 8.752h-.011" />
					<path d="M19.753 3.752h-.011" />
					<path d="M14.752 3.752h-.01" />
				</svg>
				Pong
				<span
					class="ml-2 font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
					>WIP</span
				>
			</button>
		</div>
		<div class="grid place-items-center aspect-square mx-auto">
			<canvas width=400 height=400 bind:this={canvas} />
		</div>
	</main>
</div>
