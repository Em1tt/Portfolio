<script lang="ts">
  import Typewriter from "$lib/Typewriter.svelte";
  import Zen from "$lib/Zen.svelte";

  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";

  let cursor: HTMLElement;
  let main: HTMLElement;
  let gallery: HTMLElement;

  onMount(async () => {
    try {
      document.body.onpointermove = ({ clientX, clientY }) => {
        cursor.animate(
          {
            left: `${clientX - cursor.clientWidth / 2}px`,
            top: `${clientY - cursor.clientHeight / 2}px`,
          },
          { duration: 0, fill: "forwards" }
        );
      };
    } catch (e) {
      e;
    }

    try {
      main.onmousedown = (ev) => {
        scaleCursor(2, 50);
      };
    } catch (e) {
      e;
    }

    try {
      main.onmousedown = (ev) => {
        scaleCursor(2, 50);
      };
    } catch (e) {
      e;
    }

    try {
      main.onmouseup = (ev) => {
        scaleCursor(1, 500);
      };
    } catch (e) {
      e;
    }

    try {
      main.onmouseenter = (ev) => {
        scaleCursor(1, 250);
      };
    } catch (e) {
      e;
    }

    try {
      main.onmouseleave = (ev) => {
        scaleCursor(0, 250);
      };
    } catch (e) {
      e;
    }

    try {
      document.body.onscroll = () => {
        if (
          cursor.offsetTop - cursor.clientHeight / 2 + window.scrollY >
          main.clientHeight
        ) {
          cursor.animate([{ opacity: 0 }], {
            duration: 100,
            easing: "ease",
            fill: "forwards",
          });
        } else {
          cursor.animate([{ opacity: 1 }], {
            duration: 100,
            easing: "ease",
            fill: "forwards",
          });
        }
      };
    } catch (e) {
      e;
    }

    function scaleCursor(scale: number, duration: number) {
      cursor.animate([{ transform: `scale(${scale})` }], {
        duration: duration,
        easing: "ease",
        fill: "forwards",
      });
    }
  });
</script>

<svelte:head>
  <title>Em1t | Portfolio</title>
  <meta
    name="description"
    content="Welcome to my portfolio. Here you can see some of the projects I've made in the past few years that I'm the most proud of."
  />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content="@Em1ttt" />
  <meta property="og:url" content="https://em1t.dev" />
  <meta property="og:title" content="Em1t | Developer & designer" />
  <meta
    property="og:description"
    content="Welcome to my portfolio. Here you can see some of the projects I've made in the past few years that I'm the most proud of."
  />
  <meta property="og:image" content="https://em1t.dev/Em1t.png" />
  <meta property="og:image:secure_url" content="https://em1t.dev/Em1t.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="840" />
  <meta property="og:image:height" content="590" />
</svelte:head>

<div
  bind:this={cursor}
  class="w-16 h-16 rounded-full backdrop-invert fixed -top-[50px] -left-[50px] z-50 cursor-default hidden xl:block pointer-events-none"
/>
<div class="bg-gray-900 w-screen block overflow-auto">
  <div
    bind:this={main}
    class="hero grid w-screen h-screen place-items-center backdrop-blur-[200px] z-20 cursor-default xl:cursor-none"
  >
    <div class="flex flex-col items-center">
      <Typewriter
        defaultText="Hello"
        textClass="text-5xl xl:text-9xl text-neutral-200 text-center min-h-[48px] xl:min-h-[128px] select-none"
        textArr={[
          "Hello",
          "你好",
          "नमस्कार",
          "Hola",
          "Bonjour",
          "Привет",
          "Ahoj",
        ]}
      />
      <button
        on:click={() => {
          gallery.scrollIntoView(true);
        }}
        class="aspect-square cursor-pointer xl:cursor-none mt-8 bg-slate-200/20 rounded-full p-4 overflow-hidden relative group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-click mx-auto text-neutral-300 drop-shadow-md duration-500 group-hover:duration-300 group-hover:opacity-0"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12l3 0" />
          <path d="M12 3l0 3" />
          <path d="M7.8 7.8l-2.2 -2.2" />
          <path d="M16.2 7.8l2.2 -2.2" />
          <path d="M7.8 16.2l-2.2 2.2" />
          <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-down mx-auto text-neutral-300 drop-shadow-md absolute -top-12 left-2 duration-300 group-hover:duration-500 group-hover:top-2"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>
    </div>
    <Zen />
  </div>
  <main bind:this={gallery} class="pt-14">
    <div class="grid grid-cols-12 auto-rows-fr gap-2 px-2">
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/Admin.png)] bg-left bg-cover rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.admin.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.admin.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/Calendar.png)] bg-left bg-cover rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.clientArea.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.clientArea.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/Tickets.png)] bg-left bg-cover rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.supportSystem.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.supportSystem.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/TicketSystem.png)] bg-left bg-cover rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.supportMessages.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.supportMessages.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/ZubZen.png)] bg-left bg-cover rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.zubzen.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.zubzen.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/Texnet.png)] bg-left bg-cover rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.texnet.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.texnet.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/m4.png)] bg-left bg-contain bg-repeat rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.m4.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.m4.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/MK47.png)] bg-left bg-contain rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.mk47.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.mk47.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/earth.png)] bg-left bg-cover bg-repeat rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.earth.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.earth.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-[2/1] lg:aspect-[3/2] col-span-12 lg:col-span-6 lg:bg-center group bg-[url(/portfolio/RobartyVizitka.png)] bg-left bg-cover bg-repeat rounded-md overflow-hidden"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.robarty.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.robarty.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-square col-span-6 lg:col-span-4 group bg-[url(/portfolio/Mockup1.png)] bg-left sm:bg-center bg-cover overflow-hidden rounded-md"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.mockup.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.mockup.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-square col-span-6 lg:col-span-4 group bg-[url(/portfolio/logo4.png)] bg-left sm:bg-center bg-cover overflow-hidden rounded-md"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.logo.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.logo.description")}
          </p>
        </div>
      </div>
      <div
        class="flex aspect-square col-span-6 lg:col-span-4 group bg-[url(/portfolio/logo5.png)] bg-left sm:bg-center bg-cover overflow-hidden rounded-md"
      >
        <div
          class="group-hover:backdrop-blur-xl w-full h-full group-hover:bg-black/60 duration-200 opacity-0 group-hover:opacity-100 p-4"
        >
          <h3 class="text-neutral-200 text-sm md:text-base lg:text-lg">
            {$_("portfolio.logo2.title")}
          </h3>
          <p class="mt-4 text-xs md:text-sm lg:text-md text-neutral-300">
            {$_("portfolio.logo2.description")}
          </p>
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.2);
    }
    70% {
      transform: scale(0.9);
    }
    85% {
      transform: scale(1.1);
    }
    95% {
      transform: scale(1);
    }
  }

  div.hero button {
    animation: pulse 2s ease infinite;
  }
  div.hero button:hover {
    animation-play-state: paused;
  }
</style>
