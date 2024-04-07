<script lang="ts">
  import Typewriter from "svelte-typewriter";

  import berkkan from "/images/berkkan.jpeg";
  import github_logo_light from "/images/github.png";
  import github_logo_dark from "/images/github-mark.png";
  import gmail from "/images/gmail-icon.png";
  import linkedIn from "/images/linkedin-icon.svg";
  import themeColor from "./storeTheme";
  import "../app.css";

  let github_logo = github_logo_light;

  $: {
    github_logo = $themeColor === "dark" ? github_logo_light : github_logo_dark;
  }
</script>

<div id="hero">
  <div id="hero_left">
    <h2>Hey I'm</h2>
    <h1>Berkkan Katirci</h1>

    <div class="profession">
      and I'm a
      {#if $themeColor === "dark"}
        <Typewriter mode="loop" --cursor-color="var(--primary-color-dark)" --cursor-width="4px">
          <p>Frontend developer</p>
          <p>Backend developer</p>
          <p>Fullstack developer</p>
        </Typewriter>
      {:else}
        <Typewriter mode="loop" --cursor-color="var(--primary-color-light)" --cursor-width="4px">
          <p>Frontend developer</p>
          <p>Backend developer</p>
          <p>Fullstack developer</p>
        </Typewriter>
      {/if}
    </div>
    <hr class={$themeColor} />
    <p>
      I've been a coding enthusiast since my teens. Fluent in Flutter and Python, with a keen interest in Svelte. Beyond
      coding, I enjoy video games, puzzles, and the thrill of escape rooms. Let's get to know each other!
    </p>

    <div class="wrapper">
      <!-- TODO: Download cv button -->
      <!-- <div>Download CV</div> -->
      <div id="social_media">
        <a href="https://github.com/berkkan22" target="_blank">
          <img id="github" src={github_logo} alt="GitHub" />
        </a>
        <a href="mailto:berkkan22@gmail.com">
          <img id="gmail" src={gmail} alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/berkkan-katirci-6b2946300/" target="_blank">
          <img id="linkedin" src={linkedIn} alt="LinkedIn" />
        </a>
      </div>
    </div>
  </div>

  <img class="pb" src={berkkan} alt="Berkkan" />
</div>

<style>
  #hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  #hero_left {
    width: 45%;
    margin-top: 14px;
    margin-right: 20px;
  }

  .pb {
    border-radius: 30% 70% 35% 65% / 30% 30% 70% 70%;
    height: min(71vh, 500px);
  }

  h2 {
    font-size: 1.45em;
    font-weight: 500;
    text-wrap: balance;
    margin-bottom: 4px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 4px;
  }

  .profession {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 1.5em;
  }

  .profession p {
    margin: 0;
    margin-left: 4px;
  }

  hr {
    border: none;
    border-top: 5px solid var(--primary-color-light);
    width: 110px;
  }

  hr.dark {
    border-top: 5px solid var(--primary-color-dark);
  }

  p {
    line-height: 1.5em;
    margin-top: 12px;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  #social_media {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 8px;
  }

  #social_media img {
    height: 35px;
    margin-right: 20px;
  }

  @media (max-width: 1200px) {
    .pb {
      height: 400px;
    }
  }

  @media (max-width: 768px) {
    #hero {
      /* margin-top: 40px; */
      flex-direction: column-reverse;
      align-items: center;
      /* height: 100%; */
      margin: auto;
      width: 80%;
    }

    .pb {
      height: 300px;
    }

    #hero_left {
      width: 100%;
      margin: 0;
    }
  }

  @media (max-width: 560px) {
    .pb {
      height: 200px;
    }
  }

  @media (max-width: 430px) {
    .profession {
      flex-direction: column;
      align-items: flex-start;
    }

    .profession p {
      margin-left: 0;
    }
  }
</style>
