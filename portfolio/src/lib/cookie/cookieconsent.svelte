<script>
  import { onMount } from "svelte";
  import * as CookieConsent from "vanilla-cookieconsent";
  import config from "./cookieconsent-config";
  import "vanilla-cookieconsent/dist/cookieconsent.css";

  /**
   * Only run plugin on the client side
   */
  onMount(() => {
    CookieConsent.run(config);
  });
</script>
