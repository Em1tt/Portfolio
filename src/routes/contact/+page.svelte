<script lang="ts">
	import axios from 'axios';
	import Toast from '$lib/Toast.svelte';

	let name: string, email: string, subject: string, content: string;

    let showToast = false, title: string, text: string, color: string;

	async function submit() {
        showToast = true;
        setTimeout(() => {
            showToast = false;
        }, 5000);
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

		if (res?.status == 201){
            title = "Success";
            text = "Message has been sent.";
            color = "green";
            showToast = true;
        }
	}
    function printError(textt: string | undefined) {
            title = "Error";
            text = textt || "";
            color = "red";
            showToast = true;
		}
</script>

<svelte:head>
	<title>Em1t | Contact</title>
	<meta
		name="description"
		content="Get in touch with me, whether for work, or just to chat."
	/>
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@Em1ttt" />
	<meta property="og:url" content="https://em1t.dev" />
	<meta property="og:title" content="Em1t | Developer & designer" />
	<meta
		property="og:description"
		content="Get in touch with me, whether for work, or just to chat."
	/>
    <meta property="og:image" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:secure_url" content="https://em1t.dev/Em1t.png" />
	<meta property="og:image:type" content="image/png">
	<meta property="og:image:width" content="840">
	<meta property="og:image:height" content="590">
</svelte:head>

<Toast show={showToast} title={title} text={text} color={color}/>

<div class="bg-gray-900">
    <main class="w-full grid place-items-center py-10 min-h-screen">
        <div class="grid grid-cols-1 drop-shadow-lg p-4 py-12 md:grid-cols-2 w-screen md:w-auto">
            <form on:submit|preventDefault={submit} class="bg-gradient-to-br from-cyan-500 to-blue-500 p-4 selection:bg-pink-500 rounded-tl rounded-tr md:rounded-tr-none md:rounded-bl md:p-14 border border-gray-300/30">
                <h1 class="text-3xl text-left text-white">Send me a message</h1>
                <fieldset class="flex flex-col-reverse mt-4">
                    <input bind:value={name} class="text-gray-100 py-1 bg-transparent border-b border-gray-100/60 outline-none" type="text" name="name" id="name">
                    <label class="text-gray-200/90" for="name">Name</label>
                </fieldset>
                <fieldset class="flex flex-col-reverse mt-2">
                    <input bind:value={email} class="text-gray-100 py-1 bg-transparent border-b border-gray-100/60 outline-none" type="email" name="email" id="email">
                    <label class="text-gray-200/90" for="email">Email</label>
                </fieldset>
                <fieldset class="flex flex-col-reverse mt-2">
                    <input bind:value={subject} class="text-gray-100 py-1 bg-transparent border-b border-gray-100/60 outline-none" type="text" name="subject" id="subject">
                    <label class="text-gray-200/90" for="subject">Subject</label>
                </fieldset>
                <fieldset class="flex flex-col-reverse mt-2">
                    <textarea bind:value={content} class="resize-none py-1 text-gray-100 bg-transparent border-b border-gray-100/60 outline-none" name="content" id="content" rows="7"></textarea>
                    <label class="text-gray-200/90" for="content">Content</label>
                </fieldset>
                <button type="submit" class="px-6 py-3 mt-2 rounded bg-white hover:bg-gray-300">Submit</button>
            </form>
            <div class="bg-slate-900 p-4 md:p-14">
                <h1 class="text-3xl text-slate-200">Contact me</h1>
                <span id="underline" class="w-9 mt-1 mb-2 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 block"></span>
                <p class="w-3/4 md:w-80 text-slate-400">I'm open for any suggestions, job offers, or just to chat</p>
                <div class="flex flex-row flex-nowrap mt-6 text-slate-200 items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-at" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                        <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                    </svg>
                    <p class="text-slate-400"><span class="text-slate-200">Email:</span> em1t.dev@tuta.io</p>
                </div>
                <div class="flex flex-row flex-nowrap mt-6 text-slate-200 items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-discord" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                        <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                        <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l.975 1.923a11.913 11.913 0 0 1 4.053 0l.972 -1.923c1.5 .16 3.043 .485 4.5 1.5c2 5.667 2.167 9.833 1.5 11.5c-.667 1.333 -2 3 -3.5 3c-.5 0 -2 -2 -2 -3"></path>
                        <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                     </svg>
                    <p class="text-slate-400"><span class="text-slate-200">Discord:</span> Em1t#7103</p>
                </div>
                <div class="flex flex-row flex-nowrap mt-6 text-slate-200 items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M3.6 9h16.8"></path>
                        <path d="M3.6 15h16.8"></path>
                        <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                        <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                     </svg>
                    <p class="text-slate-400"><span class="text-slate-200">Website:</span> em1t.dev</p>
                </div>
                <div class="flex flex-row flex-nowrap mt-6 text-slate-200 items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                     </svg>
                    <p class="text-slate-400"><span class="text-slate-200">GitHub:</span> <a class="underline underline-offset-2 hover:text-sky-400" href="https://github.com/em1tt">Em1tt</a></p>
                </div>
            </div>
        </div>
    </main>
</div>

<style>
    @keyframes hue-rotate{
        0% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
    form, #underline{
        animation: 60s linear hue-rotate infinite; 
    }
</style>