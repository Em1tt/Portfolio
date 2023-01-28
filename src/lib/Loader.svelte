<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
    let loading: boolean = true;
    onMount(()=>{
        localStorage.setItem("visited", "11 bytes?");
    });
</script>

{#if loading}
<div transition:fade="{{duration: 200}}" class="text-slate-200 fixed w-screen h-screen bg-slate-900 grid place-items-center transition-opacity duration-200">
    <div class="flex flex-col flex-nowrap gap-2 animate-leaveTop relative">
        <span class="flex items-center gap-4">
            <h1 class="text-6xl font-semibold text-slate-400 animate-glow relative">emit</h1>
            <sub class="text-xl opacity-0 animate-enterRight relative">[ ih-<span class="font-semibold">mit</span>]</sub>
        </span>
        <p class="text-l animate-enterBottom relative opacity-0">to send forth (liquid, light, heat, sound, particles, etc.); discharge.</p>
    </div>
</div>
{/if}