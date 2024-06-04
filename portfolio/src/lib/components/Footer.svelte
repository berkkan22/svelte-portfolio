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

<!-- <div class="bg-gray-100">
  <div class="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
    <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex mb-4">
      <a href="#" class="w-6 mx-1">
        <svg
          class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;"
        >
          <path
            id="Twitter"
            d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                0.771,-0.67 1.054,-1.093Z"
          ></path>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg
          class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;"
        >
          <path
            id="Facebook"
            d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                5.373,-12 12,-12c6.627,0 12,5.373
                12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
          ></path>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg
          class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;"
        >
          <g id="Layer_1">
            <circle id="Oval" cx="12" cy="12" r="12"></circle>
            <path
              id="Shape"
              d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                   -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                   -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                   -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                   -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                   0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                   2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                   1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                   0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                   -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                   -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                   -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                   0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                   0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"
              style="fill: rgb(255, 255, 255);"
            ></path>
          </g>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg
          class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;"
        >
          <path
            id="Shape"
            d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                0.4,1.5l0,4.5l2.9,0Z"
          ></path>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg
          class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;"
        >
          <path
            id="Combined-Shape"
            d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
                -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
                -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
                0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
                0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
                -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"
          ></path>
        </svg>
      </a>
    </div>
    <div class="my-5">© Copyright 2024. All Rights Reserved.</div>
  </div>
</div> -->

<!-- Changelog -->

<!-- <section class="w-full max-w-5xl px-2 py-6 md:py-12 mx-auto text-center">
  <h1 class="text-3xl font-bold">Changelog</h1>

  <p class="mt-3 text-xl text-gray-600 md:text-2xl">Find all the new features, improvemements and bugfixes here.</p>
</section>

<section class="px-2 py-12 md:mt-12 bg-gradient-to-b from-gray-50 to-white">
  <ul class="relative w-full max-w-5xl mx-auto">
    <span
      class="absolute bottom-0 left-0 hidden w-1 rounded bg-gray-200/60 top-3 translate-x-2 md:block"
      aria-hidden="true"
    ></span>

    <li class="flex flex-col items-start md:flex-row">
      <h3 class="flex items-center w-full mb-3 space-x-3 md:w-1/3">
        <span class="z-10 hidden block w-5 h-5 bg-white border-4 border-gray-300 rounded-full md:block"></span>

        <time datetime="2023-03-07" class="text-xl font-semibold tracking-tight text-gray-800">7 March 2023</time>
      </h3>

      <div class="w-full space-y-2 md:w-2/3">
        <p>
          <span
            class="inline-block px-2 py-1 text-sm font-medium leading-none text-green-700 rounded-full bg-gradient-to-br from-green-200 to-green-100"
          >
            New
          </span>
        </p>

        <p class="text-gray-700">Added support for multiple languages</p>

        <p>
          <span
            class="inline-block px-2 py-1 mt-5 text-sm font-medium leading-none text-red-700 rounded-full bg-gradient-to-br from-red-200 to-red-100"
          >
            Bugfix
          </span>
        </p>

        <p class="text-gray-700">Fixed a bug where the app would crash when opening certain files</p>

        <p>
          <span
            class="inline-block px-2 py-1 mt-5 text-sm font-medium leading-none text-indigo-700 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-100"
          >
            Improvement
          </span>
        </p>

        <p class="text-gray-700">Improved the app's performance for faster load times and smoother user experience</p>
      </div>
    </li>

    <li class="flex flex-col items-start mt-20 md:flex-row">
      <h3 class="flex items-center w-full mb-3 space-x-3 md:w-1/3">
        <span class="z-10 hidden block w-5 h-5 bg-white border-4 border-gray-300 rounded-full md:block"></span>

        <time datetime="2023-02-17" class="text-xl font-semibold tracking-tight text-gray-800">17 February 2023</time>
      </h3>

      <div class="w-full space-y-2 md:w-2/3">
        <p>
          <span
            class="inline-block px-2 py-1 text-sm font-medium leading-none text-green-700 rounded-full bg-gradient-to-br from-green-200 to-green-100"
          >
            New
          </span>
        </p>

        <p class="text-gray-700">Introduced a new onboarding flow for first-time users</p>

        <p>
          <span
            class="inline-block px-2 py-1 mt-5 text-sm font-medium leading-none text-red-700 rounded-full bg-gradient-to-br from-red-200 to-red-100"
          >
            Bugfix
          </span>
        </p>

        <p class="text-gray-700">Addressed an issue where user preferences were not being saved properly</p>

        <p>
          <span
            class="inline-block px-2 py-1 mt-5 text-sm font-medium leading-none text-indigo-700 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-100"
          >
            Improvement
          </span>
        </p>

        <p class="text-gray-700">Streamlined the checkout process to reduce the number of steps required</p>
      </div>
    </li>

    <li class="flex flex-col items-start mt-20 md:flex-row">
      <h3 class="flex items-center w-full mb-3 space-x-3 md:w-1/3">
        <span class="z-10 hidden block w-5 h-5 bg-white border-4 border-gray-300 rounded-full md:block"></span>

        <time datetime="2023-01-24" class="text-xl font-semibold tracking-tight text-gray-800">24 January 2023</time>
      </h3>

      <div class="w-full space-y-2 md:w-2/3">
        <p>
          <span
            class="inline-block px-2 py-1 text-sm font-medium leading-none text-green-700 rounded-full bg-gradient-to-br from-green-200 to-green-100"
          >
            New
          </span>
        </p>

        <p class="text-gray-700">Implemented a new dashboard design for better data visualization</p>

        <p>
          <span
            class="inline-block px-2 py-1 mt-5 text-sm font-medium leading-none text-red-700 rounded-full bg-gradient-to-br from-red-200 to-red-100"
          >
            Bugfix
          </span>
        </p>

        <p class="text-gray-700">Addressed an issue where user preferences were not being saved properly</p>

        <p>
          <span
            class="inline-block px-2 py-1 mt-5 text-sm font-medium leading-none text-indigo-700 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-100"
          >
            Improvement
          </span>
        </p>

        <p class="text-gray-700">Increased the amount of available storage space for user files</p>
      </div>
    </li>
  </ul>
</section> -->

<!-- different change log -->

<!-- <ol class="relative border-s border-gray-200 dark:border-gray-700">
  <li class="mb-10 ms-6">
    <span
      class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
    >
      <svg
        class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
        />
      </svg>
    </span>
    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
      Flowbite Application UI v2.0.0 <span
        class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"
        >Latest</span
      >
    </h3>
    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      >Released on January 13th, 2022</time
    >
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
      E-commerce & Marketing pages.
    </p>
    <a
      href="#"
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      ><svg
        class="w-3.5 h-3.5 me-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"
        />
        <path
          d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        />
      </svg> Download ZIP</a
    >
  </li>
  <li class="mb-10 ms-6">
    <span
      class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
    >
      <svg
        class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
        />
      </svg>
    </span>
    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      >Released on December 7th, 2021</time
    >
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      All of the pages and components are first designed in Figma and we keep a parity between the two versions even as
      we update the project.
    </p>
  </li>
  <li class="ms-6">
    <span
      class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
    >
      <svg
        class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
        />
      </svg>
    </span>
    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      >Released on December 2nd, 2021</time
    >
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
    </p>
  </li> 
</ol> -->

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
