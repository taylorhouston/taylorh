<script lang="ts">
  import BackendIcon from "./BackendIcon.svelte"
  import FrontendIcon from "./FrontendIcon.svelte"
  import UXDesignIcon from "./UXDesignIcon.svelte"
  import BackSplash from "$lib/BackSplash.svelte"
  import FlipBox from "./FlipBox.svelte"
  import Accordion from "./Accordion.svelte"
  import FreelanceForm from "./FreelanceForm.svelte"
  import Hero from "./Hero.svelte"
  import Button from "$lib/Button.svelte"
  import { experimentData } from "./experimentData"
  import GitHubIcon from "./GitHubIcon.svelte"
  const experiments = experimentData[0].list
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="TaylorH.com website" />
</svelte:head>

<section>
  <h1>Front-end focused Web Developer</h1>
  <p>
    I started as a solo Web Developer for a small business then progressively
    became more focused on the front-end side of the web including UX,
    accessibility and vector graphics.
  </p>
  <Hero />
  <BackSplash
    headline="Tools I Love"
  >
    <div class="grid">
      <div>
        <UXDesignIcon />
        <h3>UX Design</h3>
        <h4>I enjoy designing</h4>
        UX, UI, Icons, SVGs
        <h4 class="home-page__h4">Design tools</h4>
        <ul class="hide-list">
          <li>Adobe Illustrator</li>
          <li>Affinity Designer, Photo and Design</li>
        </ul>
      </div>
      <div>
        <FrontendIcon />
        <h3>Front-end</h3>
        <h4>Libraries I enjoy</h4>
        <ul class="hide-list">
          <li>React</li>
          <li>Next</li>
          <li>Cypress</li>
          <li>React Testing Library</li>
          <li>Svelte</li>
          <li>Styled Components</li>
        </ul>
        <h4>Dev tools</h4>
        <ul class="hide-list">
          <li>Jetbrains IDEs (Intellij)</li>
          <li>Webpack</li>
          <li>Prettier</li>
          <li>Eslint</li>
          <li>Vite</li>
        </ul>
      </div>
      <div>
        <BackendIcon />
        <h3>Back-end</h3>
        <h4>Languages I speak</h4>
        JavaScript, TypeScript, PHP, Ruby
        <h4>Libraries I enjoy</h4>
        <ul class="hide-list">
          <li>Node</li>
          <li>Express</li>
          <li>Next</li>
          <li>MongoDB</li>
          <li>Serverless</li>
        </ul>
      </div>
    </div>
  </BackSplash>
  <BackSplash headline="Portfolio" id="portfolio">
    <div class="dark-background">
      <div class="portfolio-grid">
        <FlipBox
          imageBackground="url('/img/cappuccinoBg.jpg')"
          imagePath="svg/cappuccino.svg"
          alt="Cappuccino Chrome extension"
        >
          <p>
            Chrome extension that allows the user to create their own new tab
            page based on links and organization of their choice.
          </p>
          <Button href="https://github.com/ackmanx/cappuccino">
            <GitHubIcon /> view code
          </Button>
        </FlipBox>
        <FlipBox
          imageBackground="url('/img/taylorhBg.jpg')"
          imagePath="svg/logo.svg"
          alt="TaylorH.com website"
        >
          <p>
            This website is used for experimentation and testing of new web
            features but also serves as a Portfolio website.
          </p>
          <Button href="https://www.houstonsgreenhouse.com">
            <GitHubIcon />view code
          </Button>
        </FlipBox>
        <FlipBox
          imageBackground="url('/img/houstonsBg.jpg')"
          imagePath="svg/houstons.svg"
          alt="Houston's Greenhouse, Kasson MN website"
        >
          <p>
            Business card website with time-based content management using
            single-page server-side rendered website.
          </p>
          <Button disabled={true} href="https://www.houstonsgreenhouse.com">
            view website
          </Button>
        </FlipBox>
        <FlipBox
          imageBackground="url('/img/chocolateShoppeBg.jpg')"
          imagePath="svg/cslogo.svg"
          alt="Chocolate Shoppe, Mantorville MN website"
        >
          <p>E-commerce website using the traditional multi-page website.</p>
          <Button href="https://www.chocolateshoppe.co">visit website</Button>
        </FlipBox>
      </div>
      <h4>Work History</h4>
      <Accordion
        title="Senior Engineer"
        title2="Target Corporation"
        dateString="4/2022 to current"
      >
        <ul>
          <li>
            Learned TypeScript, MUI and used them to build React production
            apps.
          </li>
          <li>
            Rewrote significant portions of the front-ends use of dates to
            switch libraries from Moment to Luxon.
          </li>
          <li>Continually kept front-end packages up to date</li>
          <li>
            Used GraphQL to connect to back-end and retrieve any data needed
          </li>
          <li>
            Worked in a team of developers to rebuild a preview app using Vite,
            React, and Vike for SSR.
          </li>
          <li>Contributed to move to Vite from Create React App</li>
        </ul>
      </Accordion>
      <Accordion
        title="Lead Front-end Developer"
        title2="Swanson Health Products"
        dateString="1/2016 to 4/2022"
      >
        <ul>
          <li>
            Led initiative rewriting customer facing responsive e-commerce site
            from legacy to React
          </li>
          <li>Architecture data stores for unidirectional data flow</li>
          <li>
            Developed shared application logic to reduce bundle and save
            development time such as higher order component for forms in which
            all forms could be changed, submitted and give error handling using
            the same actions and reducers
          </li>
          <li>
            Kept company moving forward by adapting to upcoming technologies
            such as hooks, context apis, and stateless components while training
            other developers on these concepts
          </li>
          <li>
            Helped accessibility team with difficult to implement requirements
            such as focus traps, tabbing issues and 3rd party ADA problems
          </li>
          <li>
            Led team’s shift to styled-components to fully replace LESS and SASS
            compilers and ensured that each component only imports exactly what
            is necessary
          </li>
          <li>
            Maintained Webpack configuration for constantly changing business
            requirements
          </li>
          <li>Implemented unit tests using React Testing Library and Jest</li>
          <li>
            Led team’s coding style using Prettier and ESLint making life easier
            for developers
          </li>
          <li>Mentored junior developers as a go-to resource</li>
        </ul>
      </Accordion>
      <h4>Education</h4>
      <ul class="education hide-list">
        <li>Bachelor of Science, Computer Science</li>
        <li>Winona State University, Winona MN</li>
        <li>Graduated magna cum laude and awarded Outstanding Student</li>
      </ul>

      <ul class="education hide-list">
        <li>Certificate, Web Programming</li>
        <li>South Central Technical College, North Mankato MN</li>
        <li>Graduated with Highest Honors</li>
      </ul>
    </div>
  </BackSplash>
  <BackSplash headline="Recent Experiments">
    <ul class="hide-list">
      {#if experiments}
        {#each experiments as experiment}
          <li class="experiment-list">
            <a class="experiment-link" href={experiment.href}>
              <div class="experiment-label">
                {experiment.label}
              </div>
              <div class="experiment-date">
                {experiment.dateCreated}
              </div>
            </a>
          </li>
        {/each}
      {/if}
    </ul>
  </BackSplash>
  <BackSplash headline="Lets work together" id="contact">
    <FreelanceForm />
  </BackSplash>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    text-align: center;
    margin: 0;
    padding-top: 1rem;
  }

  p {
    text-align: center;
    margin: 0;
  }

  ul.hide-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul.education {
    margin: 1rem 0 0 0;
  }

  .experiment-link {
    padding: 1rem;
    display: flex;
    color: var(--color-text);
    text-decoration: none;
  }

  .experiment-list:nth-of-type(even) {
    background-color: var(--off-body);
    border-radius: 0.5rem;
  }

  .experiment-label {
    flex-grow: 1;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.4rem;
    justify-items: center;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1124px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  h4 {
    color: var(--color-accent);
    margin-top: 2rem;
  }
</style>
