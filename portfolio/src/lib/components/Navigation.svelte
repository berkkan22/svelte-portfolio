<script lang="ts">
  import ThemeIcon from "./theme_Icon.svelte";
  import "../../app.css";
  import themeColor from "../storeTheme";
  import { t, locale, locales } from "../i10l/i10l";
  import * as Flag from "svelte-flag-icons";
  import translations from "../i10l/translations"; // replace with the actual path to your translation.ts file

  let menu: Record<string, string> = {
    home: $t("home"),
    "my-projects": $t("my_projects"),
    skills: $t("skills"),
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
  let isShowLanguages: boolean = false;

  function showMenu(): any {
    isShowMenu = !isShowMenu;
  }

  function openLanguageOption(): any {
    isShowLanguages = !isShowLanguages;
  }

  function handleAnchorClick(event: any) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor ? anchor.offsetTop : 0,
      behavior: "smooth",
    });
  }

  function changeLanguage(l: string): any {
    $locale = l;
    isShowLanguages = false;
    menu = {
      home: $t("home"),
      "my-projects": $t("my_projects"),
      skills: $t("skills"),
      // education: "Education",
      // about: "More about me",
    };
  }

  function clickOutside(element: HTMLDivElement, callbackFunction: { (): void; (): void }) {
    function onClick(event: { target: any }) {
      if (!element.contains(event.target)) {
        callbackFunction();
      }
    }

    document.body.addEventListener("click", onClick);

    return {
      update(newCallbackFunction: any) {
        callbackFunction = newCallbackFunction;
      },
      destroy() {
        document.body.removeEventListener("click", onClick);
      },
    };
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
        <a
          class={$themeColor}
          href={"#" + key}
          class:active={activeLink === key}
          on:click={() => setActiveLink(key)}
          on:click={handleAnchorClick}>{menu[key]}</a
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
    <div class="language-switcher">
      <div
        class="language-button {$themeColor} "
        on:click={() => openLanguageOption()}
        use:clickOutside={() => {
          console.log("clicked outside");
          isShowLanguages = false;
        }}
      >
        <svelte:component this={Flag[$locale]} class="flag" size="24" />
        <div class="arrow">
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </svg>
        </div>
      </div>
      <div class="language-dropdown {isShowLanguages ? 'language-content' : 'dont-show-language-content'}">
        {#each locales as l}
          <div class="language-option" on:click={() => changeLanguage(l)}>
            <svelte:component this={Flag[l]} class="flag" size="24" />
            <span>{translations[l]["language"]}</span>
          </div>
        {/each}
      </div>
    </div>
    <!-- <select bind:value={$locale}>
        {#each locales as l}
          <option value={l}>{l}</option>
        {/each}
      </select> -->
    <!-- <svelte:component this={Flag["Us"]} />
    <svelte:component this={Flag["De"]} /> -->

    <div class="{isShowMenu ? 'menu-content' : 'dont-show-menu-content'} {$themeColor}">
      {#each Object.keys(menu) as key}
        <a class={$themeColor} href={"#" + key} class:active={activeLink === key} on:click={() => setActiveLink(key)}
          >{menu[key]}</a
        >
      {/each}
    </div>
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
    box-sizing: border-box;
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

  .language-switcher {
    margin-left: 12px;
    /* position: relative;
    display: inline-block; */
  }

  .language-button {
    background-color: var(--projects-card-background-light);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: -6px;
  }

  .language-button.dark {
    background-color: var(--projects-card-background-dark);
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.5);
  }

  .flag {
    width: 15px;
    height: 15px;
    margin-right: 8px;
  }

  .language-button .arrow {
    margin-left: 8px;
    margin-top: 4px;
  }

  .language-button .arrow svg {
    fill: var(--text-color-light);
    width: 15px;
    height: 15px;
  }

  .language-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 24px;
    background-color: var(--background-color-light);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 4px;
    z-index: 1;
  }

  .dont-show-language-content {
    display: none;
  }

  .language-option {
    padding: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .language-option:hover {
    background-color: var(--projects-card-background-light);
  }

  .language-option.dark {
    background-color: var(--projects-card-background-dark);
  }

  .language-option span {
    margin-left: 8px;
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

  /* .language-switcher {
    position: relative;
    display: inline-block;
  }

  .language-button {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .language-button .flag {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  .language-button .arrow {
    margin-left: 8px;
  }

  .language-dropdown {
    display: none;
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    margin-top: 5px;
    z-index: 1;
    width: 100%;
  }

  .language-option {
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .language-option:hover {
    background-color: #f0f0f0;
  }

  .language-option .flag {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  } */
</style>
