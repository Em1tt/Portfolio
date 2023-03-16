<!--INSPIRED BY TAILWINDCSS NAVBAR-->

<header
	class="w-full fixed top-0 left-0 bg-slate-900/25 backdrop-blur z-40 border-b border-slate-300/10 select-none"
>
	<div class="mx-auto max-w-7xl">
		<div class="py-4 px-8">
			<div class="relative flex items-center">
				<a aria-label="Home" href="/"><img src="/E1.png" alt="" width="24px" /></a>
				<div class="relative flex items-center ml-auto">
					<nav class="text-sm leading-6 font-semibold text-slate-200 max-sm:hidden">
						<ul class="flex space-x-8">
							<li>
								<a class="hover:text-sky-400" href="/about">Portfolio</a>
							</li>
							<li>
								<a class="hover:text-sky-400" href="/skills">Games</a>
							</li>
							<li>
								<a class="hover:text-sky-400" href="/contact">Contact</a>
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
						</ul>
					</nav>
					<nav class="text-sm leading-6 font-semibold text-slate-200 hidden max-sm:block">
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
                                    <a class="hover:text-sky-400 py-2 px-4 block whitespace-nowrap bg-black/80" href="/about">Portfolio</a>
                                </li>
                                <li>
                                    <a class="hover:text-sky-400 py-2 px-4 block whitespace-nowrap border-t border-slate-300/10 bg-black/80" href="/skills">Games</a>
                                </li>
                                <li>
                                    <a class="hover:text-sky-400 py-2 px-4 block whitespace-nowrap border-t border-slate-300/10 bg-black/80" href="/contact">Contact</a>
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
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	.dropdown:hover .dropdown-menu {
		display: block;
	}
</style>
