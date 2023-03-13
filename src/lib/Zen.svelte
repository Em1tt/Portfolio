<script lang="ts">
	import { onMount } from 'svelte';

	let div: HTMLElement;
	let i = 1;
	onMount(() => {
		setInterval(() => {
			i = i + 1;
			if (i > 3) {
				i = 1;
			}
			div.setAttribute('data-conf', `${i}`);
		}, 25000);
		i = i + 1;
	});
</script>

<div class="grid place-items-center absolute w-full h-full -z-10 gap-2 overflow-hidden">
	<div bind:this={div} data-conf={i} class="wrapper relative aspect-[1.618] w-screen">
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
	</div>
</div>

<style global>
	.wrapper {
		background: rgba(255 255 255 / 5%);
		filter: blur(12vw);
	}
	.wrapper > div {
		height: 30%;
		width: 30%;
		background-color: rgba(255 255 255 / 5%);
		position: absolute;
		transition: left, top, height, width, border-radius;
		transition-duration: 20s;
		transition-timing-function: ease-in-out;
	}
	.wrapper > div:nth-child(1) {
		background-color: #603F8B;
	}
	.wrapper > div:nth-child(2) {
		background-color: #B4FEE7;
		left: 25%;
	}
	.wrapper > div:nth-child(3) {
		background-color: #A16AE8;
	}
	.wrapper > div:nth-child(4) {
		background-color: #ffb703;
	}
	.wrapper > div:nth-child(5) {
		background-color: #fb8500;
	}
	.wrapper > div:nth-child(6) {
		background-color: #FD49A0;
	}
	.wrapper > div:nth-child(7) {
		background-color: #03045e;
	}

	.wrapper[data-conf='1'] > div:nth-child(1) {
		left: 0%;
		top: 0;
		height: 50%;
		width: 20%;
	}
	.wrapper[data-conf='1'] > div:nth-child(2) {
		left: 0%;
		top: 50%;
		height: 50%;
		width: 50%;
	}
	.wrapper[data-conf='1'] > div:nth-child(3) {
		left: 50%;
		top: 0%;
		height: 100%;
		width: 50%;
	}
	.wrapper[data-conf='1'] > div:nth-child(4) {
		left: 70%;
		top: 50%;
		height: 50%;
		width: 30%;
	}
	.wrapper[data-conf='1'] > div:nth-child(5) {
		left: 20%;
		top: 0%;
		height: 50%;
		width: 30%;
	}
	.wrapper[data-conf='1'] > div:nth-child(6) {
		left: 0%;
		top: 70%;
		height: 30%;
		width: 20%;
	}
	.wrapper[data-conf='1'] > div:nth-child(7) {
		left: 80%;
		top: 65%;
		height: 35%;
		width: 20%;
	}

	.wrapper[data-conf='2'] > div:nth-child(1) {
		left: 0%;
		top: 0;
		height: 100%;
		width: 15%;
	}
	.wrapper[data-conf='2'] > div:nth-child(2) {
		left: 15%;
		top: 50%;
		height: 50%;
		width: 25%;
	}
	.wrapper[data-conf='2'] > div:nth-child(3) {
		left: 15%;
		top: 0%;
		height: 50%;
		width: 50%;
	}
	.wrapper[data-conf='2'] > div:nth-child(4) {
		left: 39%;
		top: 50%;
		height: 50%;
		width: 26%;
	}
	.wrapper[data-conf='2'] > div:nth-child(5) {
		left: 65%;
		top: 0%;
		height: 100%;
		width: 15%;
	}
	.wrapper[data-conf='2'] > div:nth-child(6) {
		left: 80%;
		top: 0%;
		height: 50%;
		width: 20%;
	}
	.wrapper[data-conf='2'] > div:nth-child(7) {
		left: 80%;
		top: 50%;
		height: 50%;
		width: 20%;
	}

	.wrapper[data-conf='3'] > div:nth-child(1) {
		left: 0%;
		top: 0;
		height: 100%;
		width: 15%;
	}
	.wrapper[data-conf='3'] > div:nth-child(2) {
		left: 15%;
		top: 0%;
		height: 100%;
		width: 15%;
	}
	.wrapper[data-conf='3'] > div:nth-child(3) {
		left: 30%;
		top: 0%;
		height: 100%;
		width: 15%;
	}
	.wrapper[data-conf='3'] > div:nth-child(4) {
		left: 45%;
		top: 0%;
		height: 100%;
		width: 15%;
	}
	.wrapper[data-conf='3'] > div:nth-child(5) {
		left: 60%;
		top: 0%;
		height: 100%;
		width: 25%;
	}
	.wrapper[data-conf='3'] > div:nth-child(6) {
		left: 85%;
		top: 0%;
		height: 100%;
		width: 15%;
	}
	.wrapper[data-conf='3'] > div:nth-child(7) {
		left: 80%;
		top: 70%;
		height: 30%;
		width: 20%;
	}
</style>
