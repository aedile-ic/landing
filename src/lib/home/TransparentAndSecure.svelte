<section>
    <img width="1440" height="1455" loading="lazy" src="/images/home/bg-star.png" class="bg-star  hm" alt="background star">
    <img width="390" height="2204" loading="lazy" src="/images/home/bg-star-mobile.png" class="bg-star ht hd" alt="background star">
    <img width="1440" height="1171" loading="lazy" src="/images/home/bg-star-2.png" class="bg-star2" alt="background star">
    <div class="info" id="concept">
        <img width="246" height="247" loading="lazy" src="/images/home/aedile-charater.svg" class="aedile-character"
             alt="Aedile charater">
        <h3>
            <span class="ht hm">
                Transparent and Secure,<br/> Built on the Internet Computer
            </span>
            <span class="hd">
            Transparent and Secure, Built on the Internet Computer
            </span>
        </h3>
        <p>aedile is built on the first true World Computer, DFINITY's Internet Computer, a Proof-of-Useful-Work (PoUW)
            blockchain that runs under the control of an advanced DAO to completely automate and decentralize processes
            such as protocol upgrades.</p>
    </div>
    <div class="container">
        <div class="row">
            <div class="column">
                <img width="151" height="128" loading="lazy" src="/images/home/group-1.png" alt="Group 1"/>
                <h4>Secure</h4>
                <p>
                    aedile is entirely built on the Internet Computer, a tamper-proof blockchain that can run at web speed, and scales without bounds to billions of users around the world.
                </p>
            </div>
            <div class="column">
                <img width="151" height="128" loading="lazy" src="/images/home/group-2.png" alt="Group 2"/>
                <h4>Efficient</h4>
                <p>
                    Harness the power and breakthrough performance of the Internet Computer, and embrace the simplicity of a unified blockchain driving optimal efficiency.
                </p>
            </div>
            <div class="column">
                <img width="151" height="127" loading="lazy" src="/images/home/group-5.png" alt="Group 5"/>
                <h4>Scalable</h4>
                <p>
                    ICP is the first blockchain protocol where web experiences can be built with smart contracts that scale to provide web interfaces that end-users can access through their browser.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <img width="151" height="127" loading="lazy" src="/images/home/group-6.png" alt="Group 6"/>
                <h4>Decentralized</h4>
                <p>
                    ICP runs on a decentralized network with dedicated hardware established by independent parties, and supports a new kind of autonomous software.
                </p>
            </div>
            <div class="column">
                <img width="151" height="127" loading="lazy" src="/images/home/group-4.png" alt="Group 4"/>
                <h4>Open</h4>
                <p>
                    Share in our vision of an open source world and help build it !
                </p>
            </div>
            <div class="column">
                <img width="151" height="128" loading="lazy" src="/images/home/group-3.png" alt="Group 3"/>
                <h4>Cost-effective</h4>
                <p>
                    Save money by storing your data in ICP smart contracts.
                </p>
            </div>
        </div>
        <a href="https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login" class="btn-gradient" data-text="Try the beta" target="_blank">
            <img width="16" height="16" loading="lazy" src="/images/arrow.svg" class="icon" alt="Arrow Learn more">
        </a>
    </div>
</section>


<style lang="scss">
  @import '../../routes/assets/scss/global';

  section {
    margin-top: 250rem;
    padding-top: 320rem;

    @media (max-width: $tabletMax) {
      margin-top: 0;
      padding-top: 150rem;
    }
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
    height: auto;
    animation: rotateAedile 5s linear infinite, translateAedile 3s linear infinite;
  }


  .info {
    max-width: 831rem;
    text-align: center;
    margin: 0 auto;

    @media (max-width: $tabletMax) {
      width: 850rem;
    }

    @media (max-width: $mobileMax) {
      width: 342rem;
    }

    h3 {
      color: $neutral2;
      margin-top: 32rem;
      margin-bottom: 60rem;

      @media (max-width: $tabletMax) {
        margin-top: 16rem;
      }
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

    @media (max-width: $mobileMax) {
      margin-top: 32rem;
      flex-direction: column;
    }

    .column {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      max-width: 311rem;
      height: auto;

      @media (max-width: $tabletMax) {
        max-width: 400rem;
        text-align: center;
        margin: 0 auto 32rem;
      }

      @media (max-width: $mobileMax) {
        max-width: 100%;
      }

      canvas {
        width: 207rem !important;
        margin: -95px auto -57rem !important;

        @media (max-width: $tabletMax) {
          max-width: 100% !important;
          width: 100rem !important;
        }
      }

      img, canvas {
        width: 150rem;
        margin: 0 auto 16rem;
        height: auto;

        @media (max-width: $tabletMax) {
          max-width: 100%;
          width: 100rem;
        }
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
    gap: 8rem;

    @media (max-width: $tabletMax) {
      margin: 8rem auto 0;
    }
  }

</style>