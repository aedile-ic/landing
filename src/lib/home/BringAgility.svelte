<section>
    <div class="container">
        <h2 class="hm">
            Bring agility, and a DAO twist, to<br/> the way you manage your projects !
        </h2>

        <h2 class="hd">
            Bring agility, and a DAO twist, to the way you manage your projects !
        </h2>

        <div class="infos">
            <div class="info">
                <h3>
                    Decentralize your work
                </h3>
                <p>
                    Create, organize and manage your projects on the blockchain
                </p>
            </div>
            <div class="info">
                <h3>
                    Reward your team
                </h3>
                <p>
                    Award tokens to your team and encourage their progress
                </p>
            </div>
            <div class="info">
                <h3>
                    Raise funds
                </h3>
                <p>
                    Find fundings for your ideas among a like-minded community
                </p>
            </div>

        </div>
    </div>

    <img src="/images/home/board-content.svg" class="board" alt="Board aedile">
</section>

<style lang="scss">
  @import '../../routes/assets/scss/global';

  section {
    margin-top: 47rem;
  }

  h2 {
    max-width: 831rem;
    color: $neutral2;

    @media (max-width: $tabletMax) {
      max-width: 342rem
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 32rem;
    margin-top: 96rem;

    @media (max-width: $tabletMax) {
      margin-top: 48rem;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 16rem;
  }

  h3 {
    font-family: 'Chakra Petch', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24rem;
    line-height: 28rem;
    color: $neutral2;
  }

  p {
    font-size: 16rem;
    line-height: 18rem;
    color: $neutral3;
  }

  .board {
    position: absolute;
    right: 0;
    top: 165rem;
    width: 784rem;

    @media (max-width: $tabletMax) {
      display: none;
    }
  }

</style>