<script lang="ts">
  import Navigation from "./lib/components/Navigation.svelte";
  import Hero from "./lib/Hero.svelte";
  import Projects from "./lib/Projects.svelte";
  import Skills from "./lib/Skills.svelte";
  import themeColor from "./lib/storeTheme";
  import Footer from "./lib/components/Footer.svelte";
  import "./app.css";
</script>

<svelte:head>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

  <!-- meta data for SEO -->
  <meta name="author" content="Berkkan Katirci" />
  <meta
    name="description"
    content="My development portfolio to show my skills and expertise as well as projects I made. I am a frontend and backend developer. Skilled in Flutter Svelte Docker CI/CD"
  />
  <meta
    name="keywords"
    content="developer, portfolio, web development, programming, projects, skills, software developer"
  />

  <!-- meta data for open graph tags -->
  <meta property="og:site_name" content="Berkkan Katirci - Portfolio" />
  <meta property="og:title" content="Berkkan Katirci - Portfolio" />
  <meta
    name="description"
    property="og:description"
    content="My development portfolio to show my skills and expertise as well as projects I made. I am a frontend and backend developer. Skilled in Flutter Svelte Docker CI/CD"
  />
  <meta name="image" property="og:image" content="https://berkkan.de/images/berkkan.jpeg" />
  <meta property="og:url" content="https://berkkan.de" />
  <meta property="og:type" content="website" />

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

<Footer />

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
    margin-bottom: 100px;
  }
</style>
