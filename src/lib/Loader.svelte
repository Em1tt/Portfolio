<script lang="ts">
	import { fade } from 'svelte/transition';
    import { Rainbow } from 'svelte-loading-spinners';
    import { navigating } from '$app/stores';
    let showIntro = true;
    if($navigating){
        showIntro = false;
    }
    setTimeout(()=>{
        showIntro = false;
    },4000);
</script>

{#if showIntro}
<div on:load out:fade="{{duration: 200}}" class="text-slate-200 fixed w-screen h-screen bg-slate-900 grid place-items-center transition-opacity duration-200 top-0 left-0 hover:cursor-default selection:bg-transparent z-50">
    <div class="flex flex-col flex-nowrap gap-2 animate-leaveTop relative">
        <span class="flex items-center gap-4">
            <h1 class="text-6xl font-semibold text-slate-300 animate-glow relative">emit</h1>
            <sub class="text-xl opacity-0 animate-enterRight relative text-slate-400">[ ih-<span class="font-semibold">mit</span>]</sub>
        </span>
        <p class="text-l animate-enterBottom relative opacity-0 text-slate-500">to send forth (liquid, light, heat, sound, particles, etc.); discharge.</p>
        <div class="flex justify-center mt-20">
            <Rainbow size="40" color="#334155" unit="px" duration="2s" />
        </div>
    </div>
</div>
{/if}