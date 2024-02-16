<script lang="ts">
  import Navigation from "./lib/components/Navigation.svelte";
  import Hero from "./lib/Hero.svelte";
  import Projects from "./lib/Projects.svelte";
  import themeColor from "./lib/storeTheme";
  import "./app.css";
  import { onMount } from "svelte";

  let isScrolling = false;
</script>

<main class={$themeColor}>
  <Navigation />

  <section id="home">
    <Hero />
  </section>

  <section class="anchor" id="my-projects">
    <Projects />
  </section>
</main>

<style>
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
