<script lang="ts">
  import hero_background from "../assets/hero_background.png";
  import image_of_berkkan from "../assets/oberkoerpter.jpeg";
  import github_logo_light from "../assets/github.png";
  import github_logo_dark from "../assets/github-mark.png";
  import gmail from "../assets/gmail-icon.png";
  import themeColor from "./storeTheme";
  import "../app.css";

  let github_logo = github_logo_light;

  $: {
    github_logo = $themeColor === "dark" ? github_logo_light : github_logo_dark;
  }
</script>

<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
  ><path
    fill="#9bb7cf"
    fill-opacity="1"
    d="M0,96L40,85.3C80,75,160,53,240,69.3C320,85,400,139,480,176C560,213,640,235,720,213.3C800,192,880,128,960,133.3C1040,139,1120,213,1200,234.7C1280,256,1360,224,1400,208L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
  ></path></svg
> -->
<!-- <svg viewBox="0 0 1908 369" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  ><path fill="rgba(47, 73, 94, 1)" d="M 0 0 C 157 0 157 107 314 107 L 314 107 L 314 0 L 0 0 Z" stroke-width="0"></path>
  <path fill="rgba(47, 73, 94, 1)" d="M 313 107 C 485 107 485 15 657 15 L 657 15 L 657 0 L 313 0 Z" stroke-width="0"
  ></path>
  <path fill="rgba(47, 73, 94, 1)" d="M 656 15 C 892 15 892 243 1128 243 L 1128 243 L 1128 0 L 656 0 Z" stroke-width="0"
  ></path><path
    fill="rgba(47, 73, 94, 1)"
    d="M 1127 243 C 1284 243 1284 95 1441 95 L 1441 95 L 1441 0 L 1127 0 Z"
    stroke-width="0"
  ></path><path
    fill="rgba(47, 73, 94, 1)"
    d="M 1440 95 C 1674 95 1674 0 1908 0 L 1908 0 L 1908 0 L 1440 0 Z"
    stroke-width="0"
  ></path></svg
> -->
<div id="hero">
  <div id="hero_left">
    <h2>Hey I'm</h2>
    <h1>Berkkan Katirci</h1>
    <h2 class="profession">And I'm a Frontend developer</h2>
    <hr style="border: none; border-top: 5px solid green; width: 110px;" />
    <p>
      I'm coding enthusiast since my teens. Fluent in Flutter and Python, with a keen interest in Svelte. Beyond coding,
      I enjoy video games, puzzles, and the thrill of escape rooms. Let's get to know each other!
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
      </div>
    </div>
  </div>

  <img class="pb" src={image_of_berkkan} alt="Berkkan" />
</div>

<style>
  svg {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

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
    height: 500px;
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
    margin-bottom: 20px;
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
</style>
