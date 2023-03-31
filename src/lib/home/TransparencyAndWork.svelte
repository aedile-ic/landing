<section>
    <h3>Decentralized and Transparent : Our Vision</h3>
    <p>Aedile's main goal is to become a hub for developers and entrepreneurs to meet, share and collaborate around innovative projects. Our primary objective is to build a tool to foster communities and facilitate funding around new ideas.</p>

    <p class="our-vision">
        As a developer, you will be able to earn cryptos, while bringing your expertise to the ICP ecosystem.<br/>
        As an entrepreneur, you will have access to a wide community of passionate builders.<br/>
        As an investor, you will have the opportunity to discover a large variety of brand new open services and many other cool projects.
        <br/><br/>
        As a part of the aedile network, you will empower a fast growing community and benefit from a network to form a tidal wave of exciting new opportunities !
    </p>
    <div class="container">
        <div class="card">
            <div class="badge available">
                Available
            </div>
            <h4>Manage<br/> Your Projects</h4>
        </div>
        <div class="card">
            <div class="badge soon">
                Soon
            </div>
            <h4>Reward<br/> Your Team</h4>
        </div>
        <div class="card">
            <div class="badge soon">
                Soon
            </div>
            <h4>Earn Funds, Grow<br/> Your Ideas</h4>
        </div>
    </div>
</section>


<style lang="scss">
  @import '../../routes/assets/scss/global';

  section {
    display: flex;
    flex-direction: column;
    margin-top: 214rem;
    text-align: center;

    @media (max-width: $tabletMax) {
      width: 850rem;
      margin: 100rem auto 0;
    }

    @media (max-width: $mobileMax) {
      width: 342rem;
    }
  }

  p {
    max-width: 765rem;
    margin: 16rem auto 0;
    color: $neutral3;

    @media (max-width: $tabletMax) {
      width: 850rem;
    }

    @media (max-width: $mobileMax) {
      width: 342rem;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 32rem;

    @media (max-width: $tabletMax) {
      flex-direction: column;
      gap: 16rem;
    }
  }

  h3 {
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 700;
    font-size: 48rem;
    line-height: 52rem;
    color: #D8D5FB;

    @media (max-width: $tabletMax) {
      font-size: 32rem;
      line-height: 36rem;
    }
  }

  .card {
    width: 100%;
    max-width: 377.67rem;
    background: linear-gradient(150.25deg, rgba(20, 19, 39, 0.92) 0%, rgba(20, 19, 39, 0.8) 79.36%);
    mix-blend-mode: normal;
    box-shadow: 0 91px 330px rgba(255, 138, 214, 0.07), 0 42.0721px 152.569px rgba(255, 138, 214, 0.0519173), 0 24.0727px 87.2965px rgba(255, 138, 214, 0.0438747), 0 14.6119px 52.9883px rgba(255, 138, 214, 0.0377964), 0 8.80434px 31.9278px rgba(255, 138, 214, 0.0322036), 0 4.90282px 17.7795px rgba(255, 138, 214, 0.0261253), 0 2.10867px 7.64683px rgba(255, 138, 214, 0.0180827);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    padding: 32rem;
    display: flex;
    flex-direction: column;
    gap: 16rem;

    @media (max-width: $tabletMax) {
      max-width: 100%;
    }
  }

  h4 {
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 700;
    font-size: 32rem;
    line-height: 36rem;
    text-transform: uppercase;
    color: $neutral3;
    text-align: left;
  }

  .our-vision {
    max-width: 785rem;
    margin-bottom: 16rem;
  }

</style>