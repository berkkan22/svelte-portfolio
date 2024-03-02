<script lang="ts">
  import "../app.css";
  import themeColor from "./storeTheme";

  class Project {
    title: string;
    description: string;
    technologies: Technology[];
    image: string;
    imageAlt: string;
    imageOverlayColor: string;
    demoLink: string;
    githubLink: string;

    constructor(
      title: string,
      description: string,
      technologies: Technology[],
      image: string,
      imageAlt: string,
      imageOverlayColor: string,
      demoLink: string,
      githubLink: string
    ) {
      this.title = title;
      this.description = description;
      this.technologies = technologies;
      this.image = image;
      this.imageAlt = imageAlt;
      this.imageOverlayColor = imageOverlayColor;
      this.demoLink = demoLink;
      this.githubLink = githubLink;
    }
  }

  class Technology {
    name: string;
    color: string;
    txtColor: string;

    constructor(name: string, color: string, txtColor: string) {
      this.name = name;
      this.color = color;
      this.txtColor = txtColor;
    }
  }

  let projects: Project[] = [
    new Project(
      "Pubspec dependency inspector",
      "This is a VSCode extension that helps you to inspect the dependencies of your flutter project.",
      [new Technology("TypeScript", "#2cceff", "#000000")],
      "/images/projects/vscode-extension.png",
      "Pubspec dependency inspector",
      "--text-color-dark",
      "https://marketplace.visualstudio.com/items?itemName=berkkan.pubspec-dependency-inspector",
      "https://github.com/berkkan22/pubspec-dependency-inspector"
    ),
    new Project(
      "WC Warteliste",
      "This was a project which I did in my school for my school. It is an application to manage the waiting list for the restroom on the Abitur exams.",
      [new Technology("JavaScript", "#FFFF00", "#000000"), new Technology("Electron", "#1B1C26", "#FFFFFF")],
      "/images/projects/wc-warteliste.png",
      "WC Warteliste",
      "--text-color-light",
      "",
      "https://github.com/berkkan22/wc-warteliste"
    ),
    new Project(
      "Bachelor Thesis - AVSS",
      "This was my bachelor thesis. The goal of this thesis was to create a real-time preprocessing module for audio-visual speech separation. At the end I got a working model which can separate the speech from the background noise. But not as expected. Read more in the thesis.",
      [new Technology("Python", "rgb(255 12 12)", "#FFFFFF")],
      "",
      "",
      "--text-color-dark",
      "",
      "https://github.com/berkkan22/audio-visual-speech-separation"
    ),
  ];
</script>

<div class="wrapper">
  <h2>My Projects</h2>
  <div class={$themeColor} id="projects">
    {#each projects as project}
      <div class="project-card {$themeColor}">
        {#if project.image && project.demoLink}
          <a href={project.demoLink} target="_blank">
            <div class="image">
              <img src={project.image} alt={project.imageAlt} />

              {#if project.imageOverlayColor == "--text-color-dark"}
                <p style="color: var({project.imageOverlayColor})">View Demo</p>
              {:else}
                <p class="dark" style="color: var({project.imageOverlayColor})">View Demo</p>
              {/if}
            </div>
          </a>
        {/if}
        {#if project.image && !project.demoLink}
          <div class="image no-demo">
            <img src={project.image} alt={project.imageAlt} />
          </div>
        {/if}
        {#if !project.image}
          <div class="no image">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCI+CiAgPHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj5ObyBQcmV2aWV3PC90ZXh0PiAgIAo8L3N2Zz4="
              alt={project.imageAlt}
            />
          </div>
        {/if}
        <p class={$themeColor} id="title">{project.title}</p>
        <p class={$themeColor} id="description">{project.description}</p>
        <div id="technologies" class={$themeColor}>
          {#each project.technologies as tech}
            <!-- <p style="background-color: {tech.color}">{tech.name}</p> -->
            <p class={$themeColor} style="background-color: {tech.color}; color: {tech.txtColor};">{tech.name}</p>
          {/each}
        </div>

        <div id="links">
          {#if project.githubLink}
            <!-- <button> tes </button> -->
            <a class={$themeColor} href={project.githubLink} target="_blank">View On GitHub</a>
          {:else}
            <a class={$themeColor} href={project.githubLink} target="_blank" style="display: none;">View On GitHub</a>
          {/if}
        </div>
      </div>
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

  #projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .project-card {
    width: 300px;
    height: 370px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-self: center;
    background-color: var(--projects-card-background-light);
    color: var(--text-color-light);
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project-card.dark {
    background-color: var(--projects-card-background-dark);
    color: var(--text-color-dark);
  }

  .image {
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
  }

  .image img {
    width: 300px;
    height: 125px;
    object-fit: cover;
    object-position: left;
  }

  .project-card:hover img {
    transform: scale(1.01);
    filter: blur(3px);
    cursor: pointer;
  }

  .project-card:hover .no-demo img {
    transform: scale(1.01);
    filter: none;
  }

  .project-card:hover .no img {
    transform: scale(1.01);
    filter: none;
  }

  .image p {
    display: none;
    width: max-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    cursor: pointer;
    color: var(--text-color-dark);
    font-size: 1.5rem;
  }

  .image p::after {
    content: "" / "opens in new tab/window";
    width: 1em;
    height: 1em;
    margin: 0 0.05em 0 0.1em;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48cGF0aCBkPSJNOSAyTDkgMyAxMi4zIDMgNiA5LjMgNi43IDEwIDEzIDMuNyAxMyA3IDE0IDcgMTQgMlpNNCA0QzIuOSA0IDIgNC45IDIgNkwyIDEyQzIgMTMuMSAyLjkgMTQgNCAxNEwxMCAxNEMxMS4xIDE0IDEyIDEzLjEgMTIgMTJMMTIgNyAxMSA4IDExIDEyQzExIDEyLjYgMTAuNiAxMyAxMCAxM0w0IDEzQzMuNCAxMyAzIDEyLjYgMyAxMkwzIDZDMyA1LjQgMy40IDUgNCA1TDggNSA5IDRaIi8+PC9zdmc+)
      no-repeat;
    background-size: contain;
    display: inline-block;
    vertical-align: text-bottom;
    filter: invert(100%);
  }

  .image p.dark::after {
    filter: invert(0%);
  }

  .project-card:hover p {
    display: block;
  }

  #title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 8px;
    color: var(--text-color-light);
  }

  #title.dark {
    color: var(--text-color-dark);
  }

  #description {
    margin-bottom: 24px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-color-light);
  }

  #description.dark {
    color: var(--text-color-dark);
  }

  #technologies {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 16px;
    cursor: default;
  }

  #technologies p {
    margin-right: 10px;
    display: inline-block;
    border-radius: 20px;
    margin-right: 10px;
    /* background-color: var(--accent-color-light); */
    font-size: 13px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }

  #links {
    display: flex;
    justify-content: flex-end;
  }

  #links a {
    text-decoration: none;
    color: var(--text-color-light);
    border: 2px solid var(--primary-color-dark);
    border-radius: 8px;
    padding: 8px 16px;
    background-color: var(--github-button-bg-color-light);
  }

  #links a:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  #links a.dark {
    color: var(--text-color-dark);
    background-color: var(--github-button-bg-color-dark);
  }

  @media (max-width: 1150px) {
    #projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    #projects {
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
    }
  }
</style>
