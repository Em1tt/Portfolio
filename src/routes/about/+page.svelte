<script lang="ts">
	import Loader from '../../lib/Loader.svelte';
	import Footer from '../../lib/Footer.svelte';
</script>

<svelte:head>
	<title>Em1t | About</title>
	<meta
		name="description"
		content="Read more about my education, goals and past work experience."
	/>
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@Em1ttt" />
	<meta property="og:url" content="https://em1t.dev/about" />
	<meta property="og:title" content="Em1t | Web developer & designer" />
	<meta
		property="og:description"
		content="Read more about my education, goals and past work experience."
	/>
	<meta property="og:image" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:secure_url" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:type" content="image/png">
	<meta property="og:image:width" content="840">
	<meta property="og:image:height" content="590">
</svelte:head>

<main class="grid max-md:grid-cols-1 md:grid-cols-2 px-4 md:px-20 lg:px-40 mt-40 gap-6 pb-12">
	<h1
		class="text-slate-300 text-6xl font-semibold animate-glowContinuous max-md:col-span-1 lg:col-span-2"
	>
		About me
	</h1>
	<div class="leading-8 mt-8 col-span-1">
		<h2 class="text-xl text-slate-300">Education</h2>
		<p class="text-slate-400 text-l mt-4">
			I go to <b>Súkromná Stredná Odborná škola Tatranská Akadémia</b>, a prestigious high school in
			Slovakia. I am studying <b>Information & Digital technologies</b>. My education includes:
			<b>Cisco Networking Academy</b>, <b>Adobe Creative Cloud</b>, <b>Microsoft Office</b>,
			<b>Web design</b>, <b>advanced IoT</b>, and many more!
			<br />My plan is to continue education with a college degree outside of Slovakia.
		</p>
	</div>

	<div class="flex mt-6 col-span-1 gap-2">
		<a
			target="_blank"
			href="https://www.credly.com/badges/21e39917-21b6-4da5-9026-798ed41bbad8/embedded"
			rel="noreferrer"
		>
			<img
				alt="Cisco Networking Academy IT Essentials"
				src="https://images.credly.com/images/04e8034c-81f5-4f7f-ab23-e8b428c31ce9/ITE.png"
				width="160"
				height="160"
			/>
		</a>
	</div>

	<div class="leading-8 mt-8 col-span-1 lg:col-span-2">
		<h2 class="text-xl text-slate-300 mt-2">Past work experience</h2>
		<p class="text-slate-400 text-l mt-4">
			I have worked as a freelancer on Fiverr before, for about a year. I haven't got too much work
			experience, but I know more than basics about communication with clients to understand their
			needs.
		</p>
	</div>
	<div>
		<a href="contact" class="p-4 bg-sky-700/25 text-sky-300 rounded hover:bg-sky-700/50"
			>Let's build your project</a
		>
	</div>
</main>

<Footer />

<!--
<Loader/>
-->
