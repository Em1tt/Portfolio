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

<div class="bg-gray-900">
	<main class="flex flex-row flex-nowrap w-screen h-screen place-items-center z-20 flex-shrink-0">
		<div class="w-20 duration-500 hover:w-64 xl:w-64 overflow-x-hidden h-full border-r border-slate-300/10  flex-shrink-0 p-4 pt-20 flex flex-col gap-1">
			<button disabled class="w-56 flex p-3 gap-7 text-slate-300 hover:bg-slate-300/10 rounded disabled:text-slate-500 hover:disabled:bg-slate-300/5">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
				</svg>
				Chess
				<span
				class="ml-2 font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
				>WIP</span
			>
			</button>
			<button disabled class="w-56 flex p-3 gap-7 text-slate-300 hover:bg-slate-300/10 rounded disabled:text-slate-500 hover:disabled:bg-slate-300/5">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-multiple-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
					<path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
					<path d="M14 14v-8l-2 2"></path>
				 </svg>
				2048
				<span
				class="ml-2 font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
				>WIP</span
			>
			</button>
			<button disabled class="w-56 flex p-3 gap-7 text-slate-300 hover:bg-slate-300/10 rounded disabled:text-slate-500 hover:disabled:bg-slate-300/5">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-bottom" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M4 14h16v5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-5z"></path>
					<path d="M4 9v.01"></path>
					<path d="M4 4v.01"></path>
					<path d="M9 4v.01"></path>
					<path d="M15 4v.01"></path>
					<path d="M20 4v.01"></path>
					<path d="M20 9v.01"></path>
				 </svg>
				Breakout
				<span
				class="ml-2 font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
				>WIP</span
			>
			</button>
			<button disabled class="w-56 flex p-3 gap-7 text-slate-300 hover:bg-slate-300/10 rounded disabled:text-slate-500 hover:disabled:bg-slate-300/5">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M9.752 19.753v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z"></path>
					<path d="M14.752 19.753h-.01"></path>
					<path d="M19.753 19.753h-.011"></path>
					<path d="M19.753 14.752h-.011"></path>
					<path d="M19.753 8.752h-.011"></path>
					<path d="M19.753 3.752h-.011"></path>
					<path d="M14.752 3.752h-.01"></path>
				 </svg>
				Pong
				<span
				class="ml-2 font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
				>WIP</span
			>
			</button>
		</div>
		<div class="w-full h-full grid place-items-center">
			<span class="text-center">
				<h1 class="text-3xl lg:text-4xl text-white">Please come back later!</h1>
				<h2 class="text-md lg:text-xl text-slate-400">This page is under construction.</h2>
			</span>
		</div>
	</main>
</div>