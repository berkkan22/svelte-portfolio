<script lang="ts">
  import moon from "/images/moon.png";
  import sun from "/images/sun.png";
  import themeColor, { storeThemes } from "../storeTheme";

  let darkMode: boolean = false;
  let themeIcon: string = darkMode ? sun : moon;

  function toggleDarkMode() {
    if ($themeColor === "dark") {
      storeThemes.update((themeColor) => "light");
    } else {
      storeThemes.update((themeColor) => "dark");
    }
    window.document.body.classList.toggle("dark");
    darkMode = !darkMode;
    console.log(darkMode);
    themeIcon = darkMode ? sun : moon;
  }
</script>

<div class="dark-light-btn {$themeColor}">
  <button type="button" on:click={() => toggleDarkMode()}>
    <img src={themeIcon} alt="toggle dark mode" />
  </button>
</div>

<style>
  .dark-light-btn {
    margin-left: 3rem;
  }

  .dark-light-btn > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .dark-light-btn > button > img {
    width: 30px;
    height: 30px;
  }

  .dark-light-btn.dark {
    color: #ff0000;
  }

  @media (max-width: 800px) {
    .dark-light-btn {
      margin-left: 1.5rem;
    }
  }
</style>
