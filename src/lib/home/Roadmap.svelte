<section id="roadmap">
    <div class="container">
        <div class="info">
            <h2>Roadmap</h2>
            <p>Follow our next steps !</p>
        </div>

        <img src="/images/home/bg-roadmap.png" class="bg-roadmap" alt="Background roadmap">
        <div class="steps">
            <div class="step">
                <div class="number">
                    <p>Step 1</p>
                    <h3>Q1 2023</h3>
                </div>
                <div class="objectifs">
                    <p>Team ramp up</p>
                    <p>Staff training</p>
                    <p>Authentication using Internet Identity</p>
                    <p>First features</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="step">
                <div class="number">
                    <p>Step 2</p>
                    <h3>Q2 2023</h3>
                </div>
                <div class="objectifs">
                    <p>Personal dashboards</p>
                    <p>Dynamic workflows</p>
                    <p>Task management</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="step">
                <div class="number">
                    <p>Step 3</p>
                    <h3>Q3 2023</h3>
                </div>
                <div class="objectifs">
                    <p>Private dashboards</p>
                    <p>Task assignments</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="step">
                <div class="number">
                    <p>Step 4<p>
                    <h3>Q4 2023</h3>
                </div>
                <div class="objectifs">
                    <p>Beta release of the first features</p>
                    <p>Public dashboards</p>
                    <p>DAO features</p>
                    <p>Funding features</p>
                </div>
            </div>
        </div>
    </div>
</section>


<style lang="scss">
  @import '../../routes/assets/scss/global';

  section {
    margin-top: 215rem;

    @media (max-width: $tabletMax) {
      margin-top: 120rem;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;


    @media (max-width: $tabletMax) {
      flex-direction: column;
    }
  }

  @media (max-width: $tabletMax) {
    .info {
      margin-bottom: 32rem;
    }
  }

  h2 {
    font-size: 48rem;
    line-height: 52rem;
    color: $neutral2;
    margin-bottom: 16rem;

    @media (max-width: $tabletMax) {
      font-size: 32rem;
      line-height: 36rem;
    }
  }

  p {
    color: $neutral3;
  }

  .steps {
    width: 681rem;
    padding: 48rem;
    background: linear-gradient(146.09deg, #141327 4.4%, rgba(20, 19, 39, 0.88) 103.71%);

    box-shadow: 0 91px 330px rgba(255, 138, 214, 0.07), 0 42.0721px 152.569px rgba(255, 138, 214, 0.0519173), 0 24.0727px 87.2965px rgba(255, 138, 214, 0.0438747), 0px 14.6119px 52.9883px rgba(255, 138, 214, 0.0377964), 0px 8.80434px 31.9278px rgba(255, 138, 214, 0.0322036), 0px 4.90282px 17.7795px rgba(255, 138, 214, 0.0261253), 0px 2.10867px 7.64683px rgba(255, 138, 214, 0.0180827);
    border-radius: 16px;

    @media (max-width: $tabletMax) {
      width: 342rem;
      padding: 24rem;
    }
  }

  .step {
    display: flex;
    gap: 61rem;

    @media (max-width: $tabletMax) {
      gap: 16rem;
      flex-direction: column;
    }
  }

  .number {
    h3 {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 40rem;
      line-height: 44rem;
      color: $neutral3;
      white-space: nowrap;

      @media (max-width: $tabletMax) {
          color: $neutral1;
      }
    }
  }

  .objectifs {
    @media (max-width: $tabletMax) {
      margin-left: 16rem;
    }

    p {
      color: $neutral1;
      position: relative;

      @media (max-width: $tabletMax) {
        font-size: 14rem;
        font-weight: 100;
        line-height: 18rem;
      }
    }

    p:before {
      content: ' ';
      width: 5rem;
      height: 5rem;
      position: absolute;
      left: -10rem;
      background-color: $neutral1;
      top: 0;
      bottom: 0;
      margin: auto;
      border-radius: 100%;
    }
  }

  .divider {
    border: 1px solid $neutral3;
    width: 100%;
    margin: 56rem 0;

    @media (max-width: $tabletMax) {
      margin: 40rem 0;
    }
  }

  .bg-roadmap {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    width: 1111rem;
    top: 70rem;

    @media (max-width: $tabletMax) {
      display: none;
    }
  }

</style>