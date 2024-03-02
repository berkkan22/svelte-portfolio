<script lang="ts">
  import Navigation from "./lib/components/Navigation.svelte";
  import Hero from "./lib/Hero.svelte";
  import Projects from "./lib/Projects.svelte";
  import Skills from "./lib/Skills.svelte";
  import themeColor from "./lib/storeTheme";
  import "./app.css";
</script>

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
