<script lang="ts">
  import "../../app.css";
  import themeColor from "../../lib/storeTheme";

  import github_logo_light from "/images/github.png";
  import github_logo_dark from "/images/github-mark.png";
  import gmail from "/images/gmail-icon.png";
  import linkedIn from "/images/linkedin-icon.svg";

  let github_logo = github_logo_light;

  $: {
    github_logo = $themeColor === "dark" ? github_logo_light : github_logo_dark;
  }
</script>

<footer>
  <div class="footer {$themeColor}">
    <div class="social-media">
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
    <p>© 2024. All Rights Reserved</p>
  </div>
</footer>


<style>
  .footer {
    background-color: var(--projects-card-background-light);
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer.dark {
    background-color: var(--projects-card-background-dark);
  }

  .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 8px;
  }

  .social-media a img {
    width: 30px;
    /* height: 30px; */
  }
</style>
