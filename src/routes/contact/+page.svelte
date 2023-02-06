<script lang="ts">
	import Loader from '../../lib/Loader.svelte';
	import Footer from '../../lib/Footer.svelte';

	import Swal from 'sweetalert2';

	import axios from 'axios';
	let name: string, email: string, subject: string, content: string;

	async function submit() {
		if (!email || typeof email !== 'string' || !email.trim())
			return printError('E-Mail cannot be empty.');
		if (!content || typeof content !== 'string' || !content.trim())
			return printError('Content cannot be empty.');

		const res = await axios
			.post('/api/contact', {
				name,
				email,
				subject,
				content
			})
			.catch((res) => printError(res?.message));

		if (res?.status == 201)
			return Swal.fire({
				title: 'Success',
				text: 'Message sent.',
				icon: 'success',
				toast: true,
				position: 'bottom-right',
				timer: 3000,
				timerProgressBar: true
			});

		function printError(text: string | undefined) {
			Swal.fire({
				title: 'Error',
				text,
				icon: 'error',
				toast: true,
				position: 'bottom-right',
				timerProgressBar: true,
				timer: 3000
			});
		}
	}
</script>

<svelte:head>
	<title>Em1t | Contact</title>
	<meta
		name="description"
		content="Get in touch with me and let's start working on your projects!"
	/>
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@Em1ttt" />
	<meta property="og:url" content="https://em1t.dev/contact" />
	<meta property="og:title" content="Em1t | Web developer & designer" />
	<meta
		property="og:description"
		content="Get in touch with me and let's start working on your projects!"
	/>
	<meta property="og:image" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:secure_url" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:type" content="image/png">
	<meta property="og:image:width" content="840">
	<meta property="og:image:height" content="590">
</svelte:head>

<main class="grid grid-cols-1 lg:grid-cols-3 px-4 md:px-20 lg:px-40 mt-32 gap-6 pb-12">
	<h1 class="text-slate-300 text-6xl font-semibold animate-glowContinuous lg:col-span-3">
		Contact me
	</h1>
	<div class="leading-8 mt-8 lg:col-span-2">
		<h2 class="text-xl text-slate-300">Let's discuss your projects together.</h2>
		<p class="text-slate-400 text-l mt-4">
			I'm interested in working for projects of any scale, from growing ideas to nearly-finished
			projects. I have a strong passion for dreams, and I'll help you make yours come true.
		</p>
		<form on:submit|preventDefault={submit} class="grid grid-cols-2 gap-2 mt-8">
			<input
				bind:value={name}
				type="text"
				class="bg-slate-800 placeholder:text-slate-600 py-1 px-4 outline-none text-slate-300 rounded border border-transparent focus:border-blue-500"
				placeholder="Name"
			/>
			<input
				bind:value={email}
				type="text"
				class="bg-slate-800 placeholder:text-slate-600 py-1 px-4 outline-none text-slate-300 rounded border border-transparent focus:border-blue-500"
				placeholder="E-mail (required)"
			/>
			<input
				bind:value={subject}
				type="text"
				class="bg-slate-800 placeholder:text-slate-600 py-1 px-4 outline-none text-slate-300 col-span-2 rounded border border-transparent focus:border-blue-500"
				placeholder="Subject"
			/>
			<textarea
				bind:value={content}
				class="bg-slate-800 placeholder:text-slate-600 py-1 px-4 outline-none text-slate-300 col-span-2 rounded border border-transparent focus:border-blue-500"
				name="content"
				rows="6"
				placeholder="Content (required)"
			/>
			<button
				type="submit"
				class="bg-sky-700/25 hover:bg-sky-700/50 text-sky-300 placeholder:text-slate-600 py-1 px-4 outline-none col-span-2 rounded"
				>Submit</button
			>
		</form>
	</div>
	<div
		class="leading-8 mt-8 grid place-items-center lg:border-l sm:max-lg:border-t border-slate-300/10 lg:pl-6 sm:max-lg:pt-6 lg:col-span-1"
	>
		<div class="grid grid-cols-1 w-full gap-2">
			<button
				type="submit"
				class="bg-sky-700/25 hover:bg-sky-700/50 text-sky-300 placeholder:text-slate-600 py-1 px-4 outline-none col-span-2 rounded"
				>Join my Discord</button
			>
			<p
				class="py-1 px-4 bg-yellow-700/25 text-yellow-300 rounded hover:bg-yellow-700/50 outline-none col-span-2 text-center"
			>
				Add me on Discord: Em1t#7103
			</p>
		</div>
	</div>
</main>

<Footer />

<!--
<Loader/>
-->
