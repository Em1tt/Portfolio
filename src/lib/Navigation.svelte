<!--INSPIRED BY TAILWINDCSS NAVBAR-->

<script lang="ts">
	import { _, locale } from 'svelte-i18n';

	let flags = {
		"en": "/i18n/en.webp",
		"sk": "/i18n/sk.webp"
	};

	$: flag = flags[$locale as keyof typeof flags];

	$: if(!flag){
		flag = "/i18n/en.webp";
	};

	function changeLocale(newLocale: string){
		locale.set(newLocale);
	};

    import { fly } from 'svelte/transition';
	let showAnnouncement = true;
	function hideAnnouncement(){
		showAnnouncement = false
	}
</script>

<header
	class="w-full fixed top-0 left-0 bg-slate-900/25 backdrop-blur z-40 border-b border-slate-300/10 select-none"
>
	{#if showAnnouncement}
	<div transition:fly="{{y:-20, duration: 500}}" class="hidden w-full bg-white p-1 lg:grid place-items-center">
		<a href="https://www.juniorinternet.sk/cms/" target="_blank" rel="noreferrer" class="flex flex-row flex-wrap gap-4 items-center justify-center">
			<img src="/junior internet.png" width="200" alt="">
			<p class="text-sm text-center">{$_("navigation.announcement")}</p>
		</a>
		<button on:click={hideAnnouncement} class="float-right fixed right-0 mr-2">
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
				<path d="M10 10l4 4m0 -4l-4 4"></path>
			 </svg>
		</button>

	</div>
	{/if}
	<div class="mx-auto max-w-7xl">
		<div class="py-4 px-8">
			<div class="relative flex items-center">
				<a aria-label="Home" href="/"><img src="/E1.png" alt="" width="24px" /></a>
				<div class="relative flex items-center ml-auto">
					<nav class="text-sm leading-6 font-semibold text-slate-200 max-sm:hidden">
						<ul class="flex space-x-8">
							<li>
								<a class="hover:text-sky-400" href="/portfolio">{$_("navigation.portfolio")}</a>
							</li>
							<li>
								<a class="hover:text-sky-400" href="/games">{$_("navigation.games")}</a>
							</li>
							<li>
								<a class="hover:text-sky-400" href="/contact">{$_("navigation.contact")}</a>
							</li>
							<li>
								<a aria-disabled="true" class="opacity-50 cursor-default" href="/">
									API
									<span
										class="font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
										>WIP</span
									>
								</a>
							</li>
							<li class="grid place-items-center">
								<div class="dropdown flex relative border-l border-slate-300/10 pl-6">
									<button 
										aria-label="Open navigation"
										class="text-slate-200 font-semibold rounded flex items-center hover:text-sky-500"
									>
									<img src="{flag}" alt="Language" width=30>
									</button>
									<ul class="dropdown-menu absolute hidden text-slate-200 top-6 -left-32 w-48 rounded overflow-hidden">
										<li>
											<button on:click={()=>{changeLocale("en")}} class="hover:text-sky-400 py-2 px-4 whitespace-nowrap bg-black/80 w-full text-left flex flex-row gap-2"><img src="{flags.en}" alt="" width=30 class="py-1"> English</button>
										</li>
										<li>
											<button on:click={()=>{changeLocale("sk")}} class="hover:text-sky-400 py-2 px-4 whitespace-nowrap bg-black/80 w-full text-left flex flex-row gap-2"><img src="{flags.sk}" alt="" width=30 class="py-1"> Slovak</button>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</nav>
					<nav class="text-sm leading-6 font-semibold text-slate-200 hidden max-sm:flex flex-row gap-4 border-l border-slate-300/10 pl-6">
						<div class="dropdown flex relative">
							<button 
								aria-label="Open navigation"
								class="text-slate-200 font-semibold rounded flex items-center hover:text-sky-500"
							>
                            <svg class="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
							</button>
							<ul class="dropdown-menu absolute hidden text-slate-200 top-6 -left-40 w-48 rounded overflow-hidden">
								<li>
                                    <a class="hover:text-sky-400 py-2 px-4 block whitespace-nowrap bg-black/80" href="/portfolio">{$_("navigation.portfolio")}</a>
                                </li>
                                <li>
                                    <a class="hover:text-sky-400 py-2 px-4 block whitespace-nowrap border-t border-slate-300/10 bg-black/80" href="/games">{$_("navigation.games")}</a>
                                </li>
                                <li>
                                    <a class="hover:text-sky-400 py-2 px-4 block whitespace-nowrap border-t border-slate-300/10 bg-black/80" href="/contact">{$_("navigation.contact")}</a>
                                </li>
                                <li>
                                    <a aria-disabled="true" class="text-slate-500 cursor-default py-2 px-4 block whitespace-nowrap border-t border-slate-300/10 bg-black/80" href="/">
                                        API
                                        <span
                                            class="ml-2 font-medium text-xs leading-5 rounded-full text-yellow-400 px-2 py-0.5 bg-yellow-700/25"
                                            >WIP</span
                                        >
                                    </a>
                                </li>
							</ul>
						</div>
						<li class="grid place-items-center">
							<div class="dropdown flex relative">
								<button 
									aria-label="Open navigation"
									class="text-slate-200 font-semibold rounded flex items-center hover:text-sky-500"
								>
								<img src="{flag}" alt="Language" width=30>
								</button>
								<ul class="dropdown-menu absolute hidden text-slate-200 top-6 -left-40 w-48 rounded overflow-hidden">
									<li>
										<button on:click={()=>{changeLocale("en")}} class="hover:text-sky-400 py-2 px-4 whitespace-nowrap bg-black/80 w-full text-left flex flex-row gap-2"><img src="{flags.en}" alt="" width=30 class="py-1"> English</button>
									</li>
									<li>
										<button on:click={()=>{changeLocale("sk")}} class="hover:text-sky-400 py-2 px-4 whitespace-nowrap bg-black/80 w-full text-left flex flex-row gap-2"><img src="{flags.sk}" alt="" width=30 class="py-1"> Slovak</button>
									</li>
								</ul>
							</div>
						</li>
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	.dropdown:focus-within .dropdown-menu {
		display: block;
	}
</style>
