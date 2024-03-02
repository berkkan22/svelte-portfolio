<script lang="ts">
  import themeColor from "../lib/storeTheme";
  import "../app.css";

  class Skill {
    name: string;
    asset: string;
    officialLink: string;

    constructor(name: string, icon: string, officialLink: string) {
      this.name = name;
      this.asset = icon;
      this.officialLink = officialLink;
    }
  }

  let skills: Skill[] = [
    new Skill("Flutter", "/images/skills/flutter.svg", "https://flutter.dev/"),
    new Skill("Dart", "/images/skills/dart.svg", "https://dart.dev/"),
    new Skill("Python", "/images/skills/python.svg", "https://www.python.org/"),
    new Skill("GitHub Actions", "/images/skills/github-actions.svg", "https://github.com/features/actions"),
    new Skill("Docker", "/images/skills/docker-icon.svg", "https://www.docker.com/"),
    new Skill("Svelte", "/images/skills/svelte.svg", "https://svelte.dev/"),
  ];
</script>

<div class="wrapper">
  <h2>Skills</h2>
  <div class="skills">
    {#each skills as skill}
      <a href={skill.officialLink} target="_blank">
        <div class="skill">
          <img src={skill.asset} alt={skill.name} />
          <p class={$themeColor}>{skill.name}</p>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px;
    margin-bottom: 100px;
  }

  h2 {
    margin-bottom: 30px;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 36px;
  }

  .skills img {
    width: 70px;
    height: 70px;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
  }

  .skill p {
    margin-top: 16px;
    font-weight: 500;
    color: var(--text-color-light);
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .skill p.dark {
    color: var(--text-color-dark);
  }
</style>
