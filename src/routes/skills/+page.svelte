<script lang="ts">
	import Loader from '../../lib/Loader.svelte';
	import Footer from '../../lib/Footer.svelte';
</script>

<svelte:head>
	<title>Em1t | Skills</title>
	<meta name="description" content="Browse through my design/development skills." />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@Em1ttt" />
	<meta property="og:url" content="https://em1t.dev/skills" />
	<meta property="og:title" content="Em1t | Web developer & designer" />
	<meta property="og:description" content="Browse through my design/development skills." />
	<meta property="og:image" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:secure_url" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:type" content="image/png">
	<meta property="og:image:width" content="840">
	<meta property="og:image:height" content="590">
</svelte:head>

<main class="grid grid-cols-1 px-4 md:px-20 lg:px-40 mt-40 gap-6 pb-12">
	<h1 class="text-slate-300 text-6xl font-semibold animate-glowContinuous col-span-1">
		Skills &<br />Experience
	</h1>
	<div class="leading-8 mt-8">
		<h2 class="text-xl text-slate-300">Web Development skills:</h2>
		<p class="text-slate-400 text-l mt-4">
			I have created dozens of fast, responsive websites mainly for personal use. My previous work
			includes working with <b>Stripe</b>,
			<b>Leaflet</b> - interactive maps, <b>Puppeteer</b>, <b>Coinbase API</b> and many more.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 mt-8">
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full rounded p-2 border-red-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg
					class="fill-slate-100 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					width="800px"
					height="800px"
					viewBox="-1.5 0 24 24"
					><path
						d="m16.95 7.035.24-2.625h-13.261l.705 8.01h9.18l-.33 3.42-2.955.795-2.94-.795-.195-2.1h-2.625l.33 4.17 5.43 1.5h.06v-.015l5.385-1.485.75-8.16h-9.66l-.225-2.715zm-16.95-7.035h21.12l-1.92 21.57-8.67 2.43-8.61-2.43z"
					/></svg
				>
				HTML5
			</p>
			<p class="text-red-500 text-sm mt-0.5">4 years experience</p>
		</div>

		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full rounded p-2 border-blue-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
					version="1.1"
					class="fill-slate-100 w-4 h-4"
				>
					<title>css3</title>
					<path
						d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z"
					/>
				</svg>
				CSS3
			</p>
			<p class="text-blue-500 text-sm mt-0.5">4 years experience</p>
		</div>

		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full rounded p-2 border-yellow-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg
					class="fill-slate-100 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
					version="1.1"
				>
					<title>javascript</title>
					<path
						d="M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"
					/>
				</svg>
				JavaScript
			</p>
			<p class="text-yellow-500 text-sm mt-0.5">4 years experience</p>
		</div>

		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full rounded p-2 border-sky-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg class="fill-slate-100 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
					><title>file_type_tailwind</title><path
						d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
					/></svg
				>
				TailwindCSS
			</p>
			<p class="text-sky-500 text-sm">6 months experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full rounded p-2 border-violet-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg
					class="fill-slate-100 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					role="img"
					><title>Bootstrap icon</title><path
						d="M20 0H4C1.793.006.006 1.793 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2.187 16.855c-.2.482-.517.907-.923 1.234-.42.34-.952.62-1.607.82-.654.203-1.432.305-2.333.305H6.518v-14h6.802c1.258 0 2.266.283 3.02.86.76.58 1.138 1.444 1.138 2.61 0 .705-.172 1.31-.518 1.81-.344.497-.84.886-1.48 1.156v.046c.854.18 1.515.585 1.95 1.215s.658 1.426.658 2.387c0 .538-.104 1.05-.3 1.528l.025.027zm-2.776-3.45c-.41-.375-.986-.558-1.73-.558H8.985v4.368h4.334c.74 0 1.32-.192 1.73-.58.41-.385.62-.934.62-1.64-.007-.69-.21-1.224-.62-1.59h-.017zm-.6-2.823c.396-.336.59-.817.59-1.444 0-.704-.175-1.204-.53-1.49-.352-.285-.86-.433-1.528-.433h-4v3.863h4c.583 0 1.08-.17 1.464-.496z"
					/></svg
				>
				Bootstrap
			</p>
			<p class="text-violet-500 text-sm">4 months experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full rounded p-2 border-orange-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg
					class="fill-slate-100 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
				>
					<path
						xmlns="http://www.w3.org/2000/svg"
						d="M27.573 4.229c-2.927-4.25-8.656-5.479-13.068-2.802l-7.464 4.745c-2.042 1.281-3.443 3.365-3.854 5.734-0.365 1.969-0.047 4.005 0.891 5.776-0.641 0.964-1.073 2.052-1.266 3.198-0.427 2.406 0.13 4.885 1.547 6.88 2.932 4.24 8.646 5.474 13.068 2.828l7.469-4.75c2.031-1.281 3.427-3.365 3.839-5.734 0.359-1.964 0.042-3.995-0.896-5.755 1.984-3.115 1.88-7.12-0.266-10.12zM13.76 28.172c-2.401 0.625-4.938-0.318-6.349-2.359-0.865-1.198-1.182-2.677-0.932-4.146l0.146-0.708 0.135-0.438 0.401 0.266c0.88 0.667 1.865 1.146 2.917 1.469l0.271 0.094-0.031 0.266c-0.026 0.37 0.083 0.786 0.297 1.104 0.438 0.63 1.198 0.932 1.932 0.734 0.161-0.052 0.318-0.104 0.453-0.188l7.438-4.745c0.375-0.24 0.615-0.599 0.708-1.026 0.083-0.443-0.026-0.896-0.266-1.255-0.443-0.615-1.198-0.891-1.932-0.708-0.161 0.057-0.333 0.12-0.469 0.203l-2.813 1.786c-2.661 1.583-6.099 0.839-7.865-1.708-0.859-1.198-1.198-2.693-0.938-4.146 0.26-1.438 1.12-2.698 2.365-3.469l7.422-4.745c0.469-0.292 0.974-0.505 1.521-0.667 2.401-0.625 4.932 0.318 6.349 2.349 1 1.406 1.281 3.203 0.76 4.849l-0.135 0.443-0.385-0.266c-0.891-0.651-1.88-1.146-2.932-1.469l-0.266-0.078 0.026-0.266c0.026-0.391-0.083-0.802-0.297-1.12-0.438-0.63-1.198-0.896-1.932-0.708-0.161 0.052-0.318 0.104-0.453 0.188l-7.453 4.786c-0.375 0.25-0.615 0.599-0.693 1.036-0.078 0.427 0.026 0.896 0.266 1.24 0.427 0.63 1.203 0.896 1.922 0.708 0.172-0.052 0.333-0.104 0.464-0.188l2.844-1.813c0.464-0.307 0.984-0.531 1.516-0.677 2.417-0.63 4.938 0.318 6.349 2.359 0.865 1.198 1.198 2.677 0.958 4.13-0.25 1.438-1.099 2.698-2.333 3.469l-7.438 4.734c-0.484 0.292-1.005 0.521-1.547 0.677z"
					/>
				</svg>
				Svelte
			</p>
			<p class="text-orange-500 text-sm">6 months experience</p>
		</div>
	</div>

	<div class="leading-8 mt-8">
		<h2 class="text-xl text-slate-300 mt-2">Programming skills:</h2>
		<p class="text-slate-400 text-l mt-4">
			I consider myself a fast learner and I can adapt to new environments rather quickly, but I
			also believe sometimes I need to take my time to master things. My main expertise is back-end
			development, but I'd like to pursue more front-end frameworks.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 mt-8">
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full rounded p-2 border-blue-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg
					class="fill-slate-100 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
				>
					<path
						d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z"
					/>
				</svg>
				TypeScript
			</p>
			<p class="text-blue-500 text-sm">3 years experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full  rounded p-2 border-yellow-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg
					class="fill-slate-100 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
				>
					<path
						xmlns="http://www.w3.org/2000/svg"
						d="M19.212 26.447l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.412 0.412 0.287 0.512 0.1 0.512-0.1 0.412-0.287 0.287-0.412 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.287-0.512-0.1-0.512 0.1zM27.297 8.64l0.35 0.075 0.4 0.15 0.437 0.225 0.45 0.337 0.45 0.437 0.437 0.587 0.4 0.737 0.35 0.912 0.262 1.1 0.175 1.3 0.062 1.537-0.075 1.537-0.2 1.3-0.3 1.075-0.4 0.887-0.45 0.712-0.5 0.562-0.525 0.412-0.525 0.3-0.5 0.2-0.45 0.112-0.4 0.062-0.3 0.025-0.2-0.012h-10.272v1.025h7.298l0.012 3.449 0.025 0.45-0.062 0.425-0.137 0.387-0.212 0.362-0.312 0.312-0.387 0.3-0.475 0.25-0.55 0.212-0.637 0.187-0.725 0.162-0.8 0.112-0.887 0.087-0.962 0.050-1.050 0.012-1.587-0.050-1.337-0.175-1.125-0.25-0.912-0.312-0.737-0.375-0.562-0.412-0.425-0.425-0.312-0.425-0.2-0.412-0.125-0.375-0.050-0.312-0.025-0.25 0.012-0.162v-6.673l0.063-0.8 0.162-0.675 0.262-0.575 0.325-0.475 0.375-0.4 0.412-0.3 0.437-0.25 0.437-0.175 0.412-0.125 0.375-0.075 0.325-0.050 0.262-0.025 0.162-0.012h7.298l0.862-0.062 0.737-0.175 0.625-0.262 0.512-0.35 0.412-0.4 0.337-0.437 0.25-0.45 0.187-0.45 0.125-0.437 0.087-0.4 0.050-0.35 0.025-0.262v-3.824h2.612l0.175 0.012zM10.939 3.704l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.425 0.412 0.275 0.512 0.112 0.512-0.113 0.412-0.275 0.287-0.425 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.275-0.512-0.112-0.512 0.112zM18.812 1.229l1.125 0.25 0.912 0.325 0.737 0.375 0.562 0.4 0.425 0.425 0.312 0.425 0.2 0.412 0.125 0.375 0.050 0.325 0.025 0.25-0.012 0.162v6.673l-0.062 0.787-0.162 0.687-0.262 0.575-0.325 0.475-0.375 0.387-0.412 0.312-0.437 0.237-0.437 0.175-0.412 0.125-0.375 0.087-0.325 0.050-0.263 0.025h-7.46l-0.862 0.062-0.737 0.175-0.625 0.275-0.512 0.337-0.412 0.4-0.337 0.437-0.25 0.45-0.187 0.462-0.125 0.437-0.087 0.4-0.050 0.337-0.025 0.262v3.824h-2.787l-0.262-0.037-0.35-0.087-0.4-0.15-0.437-0.225-0.45-0.325-0.45-0.45-0.437-0.575-0.4-0.737-0.35-0.912-0.262-1.1-0.175-1.312-0.062-1.537 0.075-1.524 0.2-1.3 0.3-1.087 0.4-0.887 0.45-0.712 0.5-0.55 0.525-0.412 0.525-0.3 0.5-0.2 0.45-0.125 0.4-0.062 0.3-0.012h0.2l0.075 0.012h10.197v-1.037h-7.298l-0.012-3.436-0.025-0.462 0.062-0.425 0.137-0.387 0.212-0.35 0.312-0.325 0.387-0.287 0.475-0.25 0.55-0.225 0.637-0.187 0.725-0.15 0.8-0.125 0.887-0.075 0.962-0.050 1.050-0.025 1.587 0.063z"
					/>
				</svg>
				Python
			</p>
			<p class="text-yellow-500 text-sm">1 year experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full  rounded p-2 border-green-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">C#</p>
			<p class="text-green-500 text-sm">8 months experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full  rounded p-2 border-blue-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">C++</p>
			<p class="text-blue-500 text-sm">6 months experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full rounded p-2 border-purple-500 border-2 relative"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg
					class="fill-slate-100 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
				>
					<path
						xmlns="http://www.w3.org/2000/svg"
						d="M23.205 13.759h-1.178l-0.645 3.309h1.047c0.056 0.004 0.122 0.007 0.188 0.007 0.507 0 0.978-0.149 1.374-0.405l-0.010 0.006c0.371-0.33 0.623-0.786 0.688-1.301l0.001-0.010c0.048-0.138 0.076-0.296 0.076-0.461 0-0.291-0.087-0.562-0.236-0.788l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001zM26.448 15.486c-0.075 0.398-0.208 0.753-0.39 1.076l0.009-0.017c-0.194 0.338-0.427 0.628-0.698 0.876l-0.003 0.002c-0.316 0.302-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.472 0.207-0.048 0-0.095-0.001-0.142-0.002l0.007 0h-1.475l-0.409 2.102h-1.722l1.537-7.905h3.31c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.512 0.933 0.512 1.5 0 0.245-0.036 0.482-0.103 0.705l0.004-0.017zM16.955 18.317l0.679-3.498c0.035-0.095 0.055-0.204 0.055-0.318 0-0.183-0.052-0.354-0.142-0.499l0.002 0.004c-0.195-0.142-0.439-0.228-0.703-0.228-0.055 0-0.109 0.004-0.162 0.011l0.006-0.001h-1.365l-0.88 4.53h-1.709l1.537-7.906h1.708l-0.409 2.102h1.522c0.093-0.010 0.2-0.016 0.309-0.016 0.625 0 1.205 0.193 1.683 0.524l-0.010-0.006c0.257 0.291 0.414 0.676 0.414 1.097 0 0.188-0.031 0.369-0.089 0.538l0.003-0.012-0.715 3.679zM11.926 17.423c-0.316 0.303-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.471 0.207-0.047 0-0.095-0.001-0.142-0.002l0.007 0h-1.476l-0.409 2.101h-1.722l1.537-7.905h3.312c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.511 0.933 0.511 1.5 0 0.246-0.036 0.483-0.103 0.707l0.004-0.017c-0.146 0.774-0.533 1.441-1.079 1.934l-0.003 0.003zM16 8.112c-8.281 0-14.996 3.531-14.996 7.888s6.714 7.889 14.996 7.889 14.996-3.533 14.996-7.889-6.714-7.888-14.996-7.888zM9.764 13.759h-1.18l-0.644 3.309h1.047c0.056 0.004 0.121 0.007 0.187 0.007 0.507 0 0.979-0.149 1.375-0.405l-0.010 0.006c0.371-0.329 0.622-0.786 0.686-1.301l0.001-0.010c0.049-0.138 0.077-0.297 0.077-0.462 0-0.29-0.086-0.561-0.235-0.786l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001z"
					/>
				</svg>
				PHP
			</p>
			<p class="text-purple-500 text-sm">2 months experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full  rounded p-2 border-sky-500 border-2 relative"
		>
			<p class="text-slate-300 flex gap-2 items-center">
				<svg
					class="fill-slate-100 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
				>
					<path
						xmlns="http://www.w3.org/2000/svg"
						d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 0 1 .292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 0 1-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 0 1-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"
					/>
				</svg>
				GO
			</p>
			<p class="text-sky-500 text-sm">1 month experience</p>
		</div>
	</div>
	<div class="leading-8 mt-8">
		<h2 class="text-xl text-slate-300 mt-2">Application skills:</h2>
		<p class="text-slate-400 text-l mt-4">
			In addition to the above skills, I can also do graphic design and work with Microsoft Office.
			I agree, these skills might not be relevant, but they might come in handy.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 mt-8">
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full rounded p-2 border-blue-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">Adobe Photoshop</p>
			<p class="text-sky-500 text-sm">3 years experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full  rounded p-2 border-yellow-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">Adobe Illustrator</p>
			<p class="text-yellow-500 text-sm">2 years experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full  rounded p-2 border-pink-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">Adobe XD</p>
			<p class="text-pink-500 text-sm">1.5 years experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full  rounded p-2 border-violet-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">Adobe Premiere Pro</p>
			<p class="text-violet-500 text-sm">6 months experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full  rounded p-2 border-sky-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">Adobe Lightroom</p>
			<p class="text-sky-500 text-sm">6 months experience</p>
		</div>
		<div
			class="bg-slate-800/50 relative transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/25 w-full  rounded p-2 border-orange-500 border-2"
		>
			<p class="text-slate-300 flex gap-2 items-center">Microsoft Office</p>
			<p class="text-orange-500 text-sm">3 years experience</p>
		</div>
	</div>
</main>

<Footer />

<!--
<Loader/>
-->
