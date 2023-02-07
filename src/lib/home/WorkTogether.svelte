<script>
    import Carrousel from '../anim/Carrousel.svelte';
</script>

<section>
    <img src="/images/home/bg-work-together.svg" class="bg-work-together" alt="background work together">

    <div class="container">
        <h2>Work together in one shared space</h2>
    </div>

    <Carrousel/>
</section>

<style lang="scss">
  @import '../../routes/assets/scss/global';

  .bg-work-together {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 192rem;
    z-index: -1;
  }

  .container {
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    color: $white;
    margin-bottom: 80rem;
  }
</style>

