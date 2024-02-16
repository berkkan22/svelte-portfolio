<script lang="ts">
  import Navigation from "./lib/components/Navigation.svelte";
  import Hero from "./lib/Hero.svelte";
  import Projects from "./lib/Projects.svelte";
  import themeColor from "./lib/storeTheme";
  import "./app.css";
  import { onMount } from "svelte";

  let isScrolling = false;

  // Function to handle scroll events
  // function handleScroll() {
  //   isScrolling = true;
  //   // Your additional scroll handling logic goes here
  // }

  // // Function to handle menu item clicks
  // function handleMenuItemClick() {
  //   isScrolling = false;
  //   // Your additional logic for menu item clicks goes here
  // }

  // onMount(() => {
  //   // Add event listeners
  //   window.addEventListener('scroll', handleScroll);
  //   // Replace '.menu-item' with the actual selector for your menu items
  //   document.querySelectorAll('.menu-item').forEach(item => {
  //     item.addEventListener('click', handleMenuItemClick);
  //   });

  //   // Cleanup the event listeners when the component is destroyed
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     document.querySelectorAll('.menu-item').forEach(item => {
  //       item.removeEventListener('click', handleMenuItemClick);
  //     });
  //   };
  // });
</script>

<main class={$themeColor}>
  <Navigation />

  <section id="home">
    <Hero />
  </section>

  <section class={isScrolling ? "" : "notScrolled"} id="my-projects">
    <Projects />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
  }

  #my-projects {
    display: block;
    /* position: relative; */
    top: -250px;
  }

  /* .notScrolled {
    background-color: #ff0000;
  } */
</style>
