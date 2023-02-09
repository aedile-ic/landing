<section>
    <img src="/images/home/bg-star.png" class="bg-star" alt="background star">
    <img src="/images/home/bg-star-2.png" class="bg-star2" alt="background star">
    <div class="info"  id="concept">
        <img src="/images/home/aedile-charater.svg" class="aedile-character" alt="Aedile charater">
        <h3>Transparent and Secure, Built on the Internet Computer</h3>
        <p>Our solution is built with DFINITY's Internet of the Future. A new technology stack that is tamper-proof,
            fast, scales to billions of users around the world, and supports a new kind of autonomous software.</p>
    </div>
    <div class="container">
        <div class="row">
            <div class="column">
                <img src="/images/home/group-1.png" alt="Group 1"/>
                <h4>For Builders</h4>
                <p>
                    The Internet Computer is a completely novel public blockchain that can run at web speed and scale
                    without bounds.
                </p>
            </div>
            <div class="column">
                <img src="/images/home/group-2.png" alt="Group 2"/>
                <h4>Tokenize Everything</h4>
                <p>
                    The Internet Computer is the world’s first blockchain where web experiences can be built with smart
                    contracts (canisters) served directly to end users in a browser.
                </p>
            </div>
            <div class="column">
                <img src="/images/home/group-3.png" alt="Group 3"/>
                <h4>Decentralization</h4>
                <p>
                    Why build decentralized software just to run your front end on monopolistic private platforms,
                    proprietary cloud hosting and database services?
                </p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <img src="/images/home/group-4.png" alt="Group 4"/>
                <h4>Power of the Open Web</h4>
                <p>
                    Any service built on the Internet Computer can share functionality and data with others with the
                    permission of the creator.
                </p>
            </div>
            <div class="column">
                <img src="/images/home/group-5.png" alt="Group 5"/>
                <h4>Exciting New Paradigm</h4>
                <p>
                    The radical rethinking baked into the Internet Computer means much of the typical complexity of
                    software architecture melts away.
                </p>
            </div>
            <div class="column">
                <img src="/images/home/group-6.png" alt="Group 6"/>
                <h4>Motoko</h4>
                <p>
                    The Motoko language is optimized for authoring for the Internet Computer.
                </p>
            </div>
        </div>
        <a href="#" class="btn-gradient" data-text="Learn more">
            <img src="/images/arrow.svg"  class="icon" alt="Arrow Learn more">
        </a>
    </div>
</section>


<style lang="scss">
  @import '../../routes/assets/scss/global';

  section {
    margin-top: 250rem;
    padding-top: 320rem;
  }

  .bg-star {
    position: absolute;
    z-index: -3;
    width: 100%;
    top: 0;
  }

  .bg-star2 {
    position: absolute;
    z-index: -2;
    width: 100%;
    top: -118rem;
  }

  @keyframes rotateAedile {
    0% {
      transform: rotate(0) translateX(0) translateY(20rem) rotateX(-10deg);
    }
    25% {
      transform: rotate(20deg) translateX(-20rem) translateY(0) rotateX(20deg);
    }
    50% {
      transform: rotate(0deg) translateX(0px) translateY(-20rem) rotateX(0);
    }
    75% {
      transform: rotate(-20deg) translateX(20rem) translateY(0) rotateX(-20deg);
    }
    100% {
      transform: rotate(0deg) translateX(0) translateY(20rem) rotateX(-10deg);
    }
  }


  .aedile-character  {
    width: 246rem;
    animation: rotateAedile 5s linear infinite, translateAedile 3s linear infinite;
  }


  .info {
    max-width: 831rem;
    text-align: center;
    margin: 0 auto;

    h3 {
      color: $neutral2;
      margin-top: 32rem;
    }

    p {
      color: $neutral2;
      margin-top: 16rem;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin-top: 56rem;

    .column {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      max-width: 311rem;

      img {
        width: 150rem;
        margin: 0 auto 16rem;
      }

      h4 {
        margin-bottom: 16rem;
        background: linear-gradient(90deg, #F296D2 0%, #FFB483 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Chakra Petch', sans-serif;
        font-weight: 700;
        font-size: 24rem;
        line-height: 28rem;
      }

      p {
        font-size: 16rem;
        line-height: 18rem;
        color: $neutral3;
      }
    }
  }

  .btn-gradient {
    width: fit-content;
    margin: 72rem auto 0;
    padding: 16rem;
  }

</style>