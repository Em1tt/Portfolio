<script lang="ts">
	import '../../../app.css';
	import Navigation from '$lib/Navigation.svelte';
	import Zen from '$lib/Zen.svelte';
	import { onMount } from 'svelte';

	const greet = ['Hello', '你好', 'नमस्कार', 'Hola', 'Bonjour', 'Привет', 'Ahoj'];

	let unlockOverflow: boolean = false;
	let welcome: HTMLElement;
	let blob: HTMLElement;
	let main: HTMLElement;
	onMount(async () => {
		deleteChars(1000);

		function deleteChars(timeout: number) {
			setTimeout(() => {
				welcome.innerText = welcome.innerText.slice(0, -1);
				if(welcome.innerText.length) {
					deleteChars(Math.floor(Math.random()*(250 - 200 + 1) + 200));
				}
				else {
					const index = Math.floor(Math.random() * greet.length);
					typeChars(1000, greet[index], greet[index]);
				}
			}, timeout);
		};

		function typeChars(timeout: number, mutatedWord: string, word: string) {
			setTimeout(() => { 
				welcome.innerText = welcome.innerText.concat(mutatedWord.charAt(0));
				if(welcome.innerText.length < word.length) typeChars(Math.floor(Math.random()*(300 - 200 + 1) + 200), mutatedWord.slice(1), word);
				else deleteChars(3000);
			}, timeout);
		}

		document.body.onpointermove = ({ clientX, clientY }) => {
			blob.animate(
				{
					left: `${clientX - blob.clientWidth / 2}px`,
					top: `${clientY - blob.clientHeight / 2}px`
				},
				{ duration: 0, fill: 'forwards' }
			);
		};
		main.onmousedown = (ev) => {
			scaleBlob(2, 50);
		};
		main.onmouseup = (ev) => {
			scaleBlob(1, 500);
		};
		main.onmouseenter = (ev) => {
			scaleBlob(1, 250);
		};
		main.onmouseleave = (ev) => {
			scaleBlob(0, 250);
		};

		function scaleBlob(scale: number, duration: number){
			blob.animate([{ transform: `scale(${scale})` }], {
				duration: duration,
				easing: 'ease',
				fill: 'forwards'
			});
		}

		document.body.onscroll = () => {
			if (blob.offsetTop - blob.clientHeight / 2 + window.scrollY > main.clientHeight) {
				blob.animate([{ opacity: 0 }], { duration: 100, easing: 'ease', fill: 'forwards' });
			} else {
				blob.animate([{ opacity: 1 }], { duration: 100, easing: 'ease', fill: 'forwards' });
			}
		};
	});
</script>

<Navigation />
<div
	bind:this={blob}
	class="w-16 h-16 rounded-full backdrop-invert fixed -top-[50px] -left-[50px] z-50 cursor-default hidden lg:block pointer-events-none"
/>
<div
	class="bg-gray-900 w-screen block {unlockOverflow ? 'overflow-auto' : 'overflow-hidden h-screen'}"
>
	<header
		bind:this={main}
		class="grid w-screen h-screen place-items-center backdrop-blur-[200px] z-20 cursor-default lg:cursor-none"
	>
		<div class="flex flex-col items-center">
			<h1 bind:this={welcome} class="typewriter text-5xl xl:text-9xl text-neutral-200 text-center min-h-[48px] xl:min-h-[128px] select-none">
				Hello
			</h1>
			<a
				on:click={() => {
					unlockOverflow = true;
				}}

				href="#main"
				class="aspect-square cursor-default lg:cursor-none mt-8 bg-slate-200/20 rounded-full p-4"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-click mx-auto text-neutral-300 drop-shadow-md" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M3 12l3 0"></path>
					<path d="M12 3l0 3"></path>
					<path d="M7.8 7.8l-2.2 -2.2"></path>
					<path d="M16.2 7.8l2.2 -2.2"></path>
					<path d="M7.8 16.2l-2.2 2.2"></path>
					<path d="M12 12l9 3l-4 2l-2 4l-3 -9"></path>
				 </svg>
				 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down mx-auto text-neutral-300 drop-shadow-md" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M6 9l6 6l6 -6"></path>
				 </svg>
			</a>
		</div>
		<Zen />
	</header>
	<main id="main" class="pt-14">
		<div class="grid grid-cols-2 sm:grid-cols-4">
			<div class="flex aspect-square col-span-1 row-span-1 group bg-[url(/portfolio/logo1.png)] bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Em1t's logo #1</h3>
					<p class="mt-4 text-xs text-neutral-400">This is the very first variation of my logo</p>
				</div>
			</div>
			<div class="flex aspect-square col-span-1 row-span-1 group bg-[url(/portfolio/logo2.png)] bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Em1t's logo #2</h3>
					<p class="mt-4 text-xs text-neutral-400">The original version of my logo. Next are just variations.</p>
				</div>
			</div>
			<div class="flex aspect-square col-span-1 row-span-1 group bg-[url(/portfolio/logo4.png)] bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Em1t's logo #3</h3>
					<p class="mt-4 text-xs text-neutral-400">I have added a cute, small 3D effect to it, and changed the colors.</p>
				</div>
			</div>
			<div class="flex aspect-square col-span-1 row-span-1 group bg-[url(/portfolio/logo5.png)] bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Em1t's logo #4</h3>
					<p class="mt-4 text-xs text-neutral-400">I've added a heart to the "1" as I felt like it.</p>
				</div>
			</div>
			<div class="flex aspect-[2/1] col-span-2 row-span-1 group bg-[url(/portfolio/background.png)] bg-right bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Background attempt #1</h3>
					<p class="mt-4 text-xs text-neutral-400">This was made in Photoshop back in 2018. I tried creating a simple background for my school presentation.</p>
				</div>
			</div>
			<div class="flex aspect-[2/1] col-span-2 row-span-1 group bg-[url(/portfolio/m4.png)] bg-left bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Blender 3D model #1</h3>
					<p class="mt-4 text-xs text-neutral-400">I have created a detailed 3D model of an M4A1 assault rifle (I'm a fan of FPS games). This model was used in my own FPS game concept.</p>
				</div>
			</div>
			<div class="flex aspect-[2/1] sm:aspect-square col-span-2 row-span-1 sm:row-span-2 group bg-[url(/portfolio/earth.png)] bg-left sm:bg-center bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Blender 3D model #2</h3>
					<p class="mt-4 text-xs text-neutral-400">This 3D model was created by me, with the help of <a href="https://youtu.be/0YZzHn0iz8U" class="text-white">this tutorial by BlenderGuru</a>. Nevertheless, it's pretty impressive.</p>
				</div>
			</div>
			<div class="flex aspect-[2/1] col-span-2 row-span-1 group bg-[url(/portfolio/Game.png)] bg-left bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">FPS game concept #1</h3>
					<p class="mt-4 text-xs text-neutral-400">In this concept, I have managed to create an FPS character controller, imported my own 3D model of an M4, and created plenty of animations, including shooting.</p>
				</div>
			</div>
			<div class="flex aspect-[2/1] col-span-2 row-span-1 group bg-[url(/portfolio/page1.png)] bg-left bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Website #1</h3>
					<p class="mt-4 text-xs text-neutral-400">This website was created by me for my planned startup. It has gone through many iterations during the design process, but this is what I settled for. You can find it <a href="https://ametrine.host" class="text-white">Here</a></p>
				</div>
			</div>
			<div class="flex aspect-[2/1] col-span-2 row-span-1 group bg-[url(/portfolio/page2.png)] bg-left bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Login/Register #1</h3>
					<p class="mt-4 text-xs text-neutral-400">In this concept, I have managed to create an FPS character controller, imported my own 3D model of an M4, and created plenty of animations, including shooting.</p>
				</div>
			</div>
			<div class="flex aspect-square col-span-1 row-span-1 group bg-[url(/portfolio/Lin1.png)] bg-left bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Lin logo #1</h3>
					<p class="mt-4 text-xs text-neutral-400">This was a profile picture which I made for my Discord moderation bot.</p>
				</div>
			</div>
			<div class="flex aspect-square col-span-1 row-span-1 group bg-[url(/portfolio/Lin2.png)] bg-left bg-cover">
				<div class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4">
					<h3 class="text-neutral-300 text-sm">Lin logo #2</h3>
					<p class="mt-4 text-xs text-neutral-400">Lin logo but for the development server, where I tested new features.</p>
				</div>
			</div>
		</div>
		<button class="text-white p-6 bg-sky-400/20 border border-sky-400 rounded">text</button>
	</main>
</div>

<style>
	.typewriter {
		padding-right: 10px;
		animation: animated-cursor 600ms steps(29, end) infinite;
		border-right: 4px solid transparent;
	}

	@keyframes animated-cursor {
		from {
			border-right-color: rgba(255, 255, 255, 0.75);
		}
		to {
			border-right-color: transparent;
		}
	}
	header a{
		overflow: hidden;
		position: relative;
		animation: pulse 2s ease infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		60% {
			transform: scale(1.2);
		}
		70% {
			transform: scale(0.9);
		}
		85% {
			transform: scale(1.1);
		}
		95% {
			transform: scale(1);
		}
	}
	a svg:first-child{
		transition: 500ms ease;
	}
	header a:hover{
		animation-play-state: paused;
	}
	a:hover svg:first-child{
		transition: 250ms ease;
		opacity: 0;
	}
	a svg:last-child{
		position: absolute;
		top: -50px;
		left: 7px;
		opacity: 0;
		transition: 300ms ease;
	}
	a:hover svg:last-child{
		top: 7px;
		opacity: 1;
		transition: 500ms ease;

	}
</style>
