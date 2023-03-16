<script lang="ts">
	import { onMount } from "svelte";
    let typewriter: HTMLElement;

    export let textArr: Array<string>;
    export let textClass: string = "";
    export let defaultText: string = "";
    export let cursor: boolean = true;
    export let onlyType: boolean = false;

    onMount(() => {
        if(onlyType){
            typeChars(1000, textArr[0], textArr[0]);
        }else{
            deleteChars(1000);
        }

		function deleteChars(timeout: number) {
			setTimeout(() => {
				typewriter.innerText = typewriter.innerText.slice(0, -1);
				if(typewriter.innerText.length) {
					deleteChars(Math.floor(Math.random()*(250 - 200 + 1) + 200));
				}
				else {
					const index = Math.floor(Math.random() * textArr.length);
					typeChars(1000, textArr[index], textArr[index]);
				}
			}, timeout);
		};

		function typeChars(timeout: number, mutatedWord: string, word: string) {
			setTimeout(() => { 
				typewriter.innerText = typewriter.innerText.concat(mutatedWord.charAt(0));
				if(typewriter.innerText.length < word.length) typeChars(Math.floor(Math.random()*(300 - 200 + 1) + 200), mutatedWord.slice(1), word);
				else {
                    if(onlyType) return;
                    deleteChars(3000);
                }
			}, timeout);
		}
    })
</script>

<div class="pr-3 border-r-4 border-transparent {textClass}" bind:this={typewriter}>
    {defaultText}
</div>

{#if cursor}
<style>
    @keyframes animated-cursor {
		from {
			border-right-color: rgba(255, 255, 255, 0.75);
		}
		to {
			border-right-color: transparent;
		}
	}
    div{
		animation: animated-cursor 600ms steps(29, end) infinite;
	}
</style>
{/if}