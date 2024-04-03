<script lang="ts">
  import Navigation from "./lib/components/Navigation.svelte";
  import Hero from "./lib/Hero.svelte";
  import Projects from "./lib/Projects.svelte";
  import Skills from "./lib/Skills.svelte";
  import themeColor from "./lib/storeTheme";
  import "./app.css";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
</svelte:head>

<main class={$themeColor}>
  <Navigation />

  <section id="home">
    <Hero />
  </section>

  <section class="anchor" id="my-projects">
    <Projects />
  </section>

  <section class="anchor" id="skills">
    <Skills />
  </section>
</main>

<style>
  /* ========================== */

  .anchor::before {
    content: "";
    display: block;
    height: 50px;
    margin-top: -50px;
    visibility: hidden;
  }

  main {
    margin-bottom: 200px;
  }
</style>
