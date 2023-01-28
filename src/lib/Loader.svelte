<script lang="ts">
	import { fade } from 'svelte/transition';
    import { Rainbow } from 'svelte-loading-spinners';
    let showIntro = true;
    setTimeout(()=>{
        showIntro = false;
    },4000);
</script>

{#if showIntro}
<div on:load transition:fade="{{duration: 200}}" class="text-slate-200 fixed w-screen h-screen bg-slate-900 grid place-items-center transition-opacity duration-200 top-0 left-0 hover:cursor-default selection:bg-transparent">
    <div class="flex flex-col flex-nowrap gap-2 animate-leaveTop relative">
        <span class="flex items-center gap-4">
            <h1 class="text-6xl font-semibold text-slate-400 animate-glow relative">emit</h1>
            <sub class="text-xl opacity-0 animate-enterRight relative">[ ih-<span class="font-semibold">mit</span>]</sub>
        </span>
        <p class="text-l animate-enterBottom relative opacity-0">to send forth (liquid, light, heat, sound, particles, etc.); discharge.</p>
        <div class="flex justify-center mt-20">
            <Rainbow size="40" color="#334155" unit="px" duration="2s" />
        </div>
    </div>
</div>
{/if}