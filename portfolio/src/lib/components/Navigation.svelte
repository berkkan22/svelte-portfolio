<script lang="ts">
  import ThemeIcon from "./theme_Icon.svelte";
  import "../../app.css";
  import themeColor from "../storeTheme";

  let menu: Record<string, string> = {
    home: "Home",
    projects: "My Projects",
    // skills: "Skills",
    // education: "Education",
    // about: "More about me",
  };

  let isTop: boolean = true;

  window.onscroll = () => {
    if (window.scrollY > 1) {
      isTop = false;
    } else {
      isTop = true;
    }
  };

  let activeLink: string = "home";

  function setActiveLink(arg0: string): any {
    activeLink = arg0;
    isShowMenu = false;
  }

  let isShowMenu: boolean = false;

  function showMenu(): any {
    isShowMenu = !isShowMenu;
  }
</script>

<!-- Navigation Bar -->
<header class="{isTop ? '' : 'scrolled'} {$themeColor}">
  <div class="left">
    <p><span>Berkkan</span> Katirci</p>
  </div>
  <div class="right">
    <nav>
      {#each Object.keys(menu) as key}
        <a class={$themeColor} href={"#" + key} class:active={activeLink === key} on:click={() => setActiveLink(key)}
          >{menu[key]}</a
        >
      {/each}
    </nav>
    <div class="nav-btn">
      <input type="checkbox" id="menu-toggle" bind:checked={isShowMenu} on:click={() => showMenu()} />
      <label for="menu-toggle" class="menu-bar-container">
        <div class="menu-bar"></div>
      </label>
    </div>
    <ThemeIcon />
  </div>
  <div class="{isShowMenu ? 'menu-content' : 'dont-show-menu-content'} {$themeColor}">
    {#each Object.keys(menu) as key}
      <a class={$themeColor} href={"#" + key} class:active={activeLink === key} on:click={() => setActiveLink(key)}
        >{menu[key]}</a
      >
    {/each}
  </div>
</header>

<style>
  header {
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 24px;
    background-color: var(--background-color-light);
  }

  header.dark {
    background-color: var(--background-color-dark);
    color: var(--text-color-dark);
  }

  .scrolled {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }

  .scrolled.dark {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.25em;
    font-weight: bold;
  }

  p > span {
    color: var(--primary-color-light);
  }

  nav > a {
    margin-left: 1.25rem;
    text-decoration: none;
    color: var(--text-color-light);
  }

  nav > a.dark {
    margin-left: 1.25rem;
    text-decoration: none;
    color: var(--text-color-dark);
  }

  nav > a.active {
    color: var(--primary-color-light);
    font-weight: bold;
  }

  .right {
    display: flex;
    align-items: center;
  }

  .nav-btn {
    display: none;
  }

  .nav-btn {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }

  #menu-toggle {
    display: none;
  }

  .menu-bar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  .menu-bar {
    left: 4px;
  }

  .menu-bar,
  .menu-bar::before,
  .menu-bar::after {
    position: absolute;
    width: 22px;
    height: 3px;
    background-color: var(--primary-color-light);
    border-radius: 10px;
    transition: 300ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  .menu-bar::before {
    content: "";
    top: -6px;
  }

  .menu-bar::after {
    content: "";
    top: 6px;
  }

  #menu-toggle:checked + .menu-bar-container .menu-bar {
    width: 0;
  }

  #menu-toggle:checked + .menu-bar-container .menu-bar::before {
    transform: rotate(45deg);
    top: 0;
  }

  #menu-toggle:checked + .menu-bar-container .menu-bar::after {
    transform: rotate(-45deg);
    top: 0;
  }

  .dont-show-menu-content {
    display: none;
  }

  .menu-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: var(--background-color-light);
    align-items: center;
    padding: 24px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .menu-content.dark {
    background-color: var(--background-color-dark);
    color: var(--text-color-dark);
  }

  .menu-content > a {
    margin-left: 1.25rem;
    text-decoration: none;
    color: var(--text-color-light);
    padding: 8px 0;
  }

  .menu-content > a.dark {
    color: var(--text-color-dark);
  }

  .menu-content > a.active {
    color: var(--primary-color-light);
    font-weight: bold;
  }

  @media (max-width: 800px) {
    .right > nav {
      display: none;
    }

    .nav-btn {
      display: block;
    }

    .scrolled {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.3s ease;
    }

    .scrolled.dark {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
      transition: box-shadow 0.3s ease;
    }
  }
</style>
