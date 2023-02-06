<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    let zen = false;

    let arr = [
      "/desert.svg",
      "/waves.svg",
      "/cave.svg",
      "/forest.svg",
      "/hole.svg",
      "/pit.svg",
      "/mountains.svg"
  ];

    function toggleZen(){
      zen = !zen;
    }

    function goBack(){
      history.back();
    }

    let bg = arr[Math.floor(Math.random() * arr.length)];

    onMount(()=>{
      // @ts-ignore
      document.getElementById("bg").style = `background: url(${bg}) no-repeat center center fixed; background-size: cover; width: 100vw; height: 100vh; filter: hue-rotate(${Math.floor(Math.random() * 360)}deg) invert(${Math.round(Math.random())}) saturate(${Math.round(Math.random() * 50) == 5 ? 0 : 1}) sepia(${Math.round(Math.random() * 20) == 5 ? 1 : 0});`;
    })
  </script>

<div class="w-screen h-screen absolute" id="bg"></div>
{#if !zen}
<span class="absolute bg-black/50">
  <span class="relative grid place-items-center w-screen h-screen">
    <span class="text-center">
      <h1 class="text-5xl font-bold animate-glowContinuous text-slate-300">{$page.error?.message}</h1><br>
      <p class="animate-glowContinuous text-slate-300">How did you get lost so far in the {bg.split(".")[0].replace("/", "")}?</p>
      <span class="flex flex-row justify-center gap-8 mt-8">
        <button on:click="{goBack}" class="p-4 bg-sky-700/50 text-sky-300 rounded hover:bg-sky-700/75">Go Back</button>
        <button on:click="{toggleZen}" class="p-4 bg-yellow-700/50 text-yellow-300 rounded hover:bg-yellow-700/75">Zen mode</button>
      </span>
    </span>
  </span>
</span>

<p class="animate-glowContinuous text-slate-400 mt-4 absolute right-0 bottom-0 mx-4">Fun fact: There's over 20000 image combinations here!</p>
{/if}