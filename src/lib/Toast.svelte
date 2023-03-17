<script lang="ts">
    export let show: boolean = false;
    export let title: string;
    export let text: string;
    export let color: string = "green";
    import { fly, fade } from 'svelte/transition';
</script>

{#if show}
<div transition:fly="{{y:50, duration: 500}}" class="fixed bg-slate-800 rounded-md border m-2 border-slate-300/10 bottom-0 right-0 w-64 z-50 overflow-hidden">
    <div class="px-6 py-2">
        <h2 class="text-2xl {color == "green" ? "text-green-500" : "text-red-500"}">{title}</h2>
        <p class="text-slate-400">{text}</p>
    </div>
</div>
{/if}
